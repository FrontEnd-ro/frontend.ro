import React from 'react';
import List from '../List';
import Link from '~/components/generic/Link';
import styles from './TableOfContents.module.scss';

interface State {
  activeChapterId: null | string;
}

interface Props {
  chapters: Chapter[];
  className?: string;
  onChapterClick?: (id: string) => void
}

export interface Chapter {
  id: string;
  title: string;
  href: string;
  subchapters?: Chapter[]
}

const SCROLL_DURATION = 2000;

class TableOfContents extends React.Component<Props, State> {
  private observer: IntersectionObserver;

  private timeoutId: any;

  constructor(props) {
    super(props);

    this.state = { activeChapterId: null };
  }

  componentDidMount() {
    const options = {
      threshold: 0.5,
    };

    this.refreshActiveChapter();

    this.observer = new IntersectionObserver(this.changeNav, options);
    this.timeoutId = setTimeout(this.observeAll, SCROLL_DURATION);
  }

  componentDidUpdate(prevProps) {
    const { chapters } = this.props;
    if (chapters !== prevProps.chapters) {
      this.refreshActiveChapter();
    }
  }

  componentWillUnmount() {
    this.observer.disconnect();
    clearTimeout(this.timeoutId);
  }

  observeAll = () => {
    const { chapters } = this.props;

    /**  Target the elements to be observed */
    const flattenChapters = chapters.flatMap(this.flattenChapter);
    flattenChapters.forEach((item) => {
      const chapterId = document.getElementById(item.id);
      if (chapterId !== null) {
        this.observer.observe(chapterId);
      }
    });
  };

  changeNav = (entries) => {
    const { activeChapterId } = this.state;
    entries.some((entry) => {
      if (entry.intersectionRatio <= 0.5) {
        return false;
      }

      if (entry.target.id !== activeChapterId) {
        this.setState({
          activeChapterId: entry.target.id,
        });
      }

      return true;
    });
  }

  scrollToItem = (id) => {
    const { onChapterClick } = this.props;

    let itemToScroll = document.getElementById(id);
    if (itemToScroll === null) {
      console.warn(`TableOfContents: expected to find element with id=${id} to scroll to`);
    }

    /**
     * Clickin on a link scrolls to that element.
     * However, since we already have an active InsersectionObserver we may
     * get racing conditions which mess up the correctly highlighted/scrolled element.
     *
     * To fix this we're disabling the observer while the scroll is in progress,
     * and then re'attaching it. A proper solution would need us to know when
     * the scroll has ended. We could add a `scroll` event on document but that
     * wouldn't work if the article is rendered in just a part of the page.
     *
     * So, our solution was to "guess" how long it would take to scroll, and use a timeout.
     */
    this.observer.disconnect();

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(this.observeAll, SCROLL_DURATION);

    this.setState({
      activeChapterId: id,
    });

    if (onChapterClick) {
      onChapterClick(id);
    }
  }

  flattenChapter = (chapter: Chapter) => {
    if (!chapter.subchapters || chapter.subchapters.length === 0) {
      return [chapter];
    }

    return [chapter, ...chapter.subchapters.flatMap(this.flattenChapter)];
  }

  refreshActiveChapter = () => {
    const { chapters } = this.props;
    const flattenedChapters = chapters.flatMap(this.flattenChapter);

    const match = flattenedChapters.find((chapter) => {
      return window.location.href.includes(chapter.href);
    });

    if (match !== undefined) {
      this.setState({
        activeChapterId: match.id,
      });
    }
  }

  render() {
    const { chapters, className } = this.props;
    const { activeChapterId } = this.state;

    return (
      <nav className={`${className ?? ''} ${styles.tableOfContents}`}>
        <List>
          {chapters.map((item) => (
            <ChapterListItem
              key={item.id}
              item={item}
              scrollToItem={this.scrollToItem}
              activeChapterId={activeChapterId}
            />
          ))}
        </List>
      </nav>
    );
  }
}

function ChapterListItem({
  item,
  scrollToItem,
  activeChapterId,
  isSubchapter,
}: {
  item: Chapter,
  scrollToItem: (id: string) => void,
  activeChapterId: string,
  isSubchapter?: boolean
}) {
  return (
    <li className={`
      ${!isSubchapter ? styles['is--main-chapter'] : ''}
      ${item.subchapters?.length ?? 0 > 0 ? styles['with--subchapters'] : ''}
    `}
    >
      <Link
        replace
        href={item.href}
        prefetch={false}
        onClick={() => scrollToItem(item.id)}
        className={activeChapterId === item.id ? `${styles.active} text-bold` : 'text-bold'}
      >
        {item.title}
      </Link>
      <List>
        {item.subchapters && item.subchapters.map((subchapter) => (
          <ChapterListItem
            isSubchapter
            key={subchapter.id}
            item={subchapter}
            scrollToItem={scrollToItem}
            activeChapterId={activeChapterId}
          />
        ))}
      </List>
    </li>
  );
}

export default TableOfContents;
