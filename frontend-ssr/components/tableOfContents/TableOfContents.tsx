import React from 'react';
import { withRouter, SingletonRouter } from 'next/router';
import styles from './TableOfContents.module.scss';

interface State {
    activeChapterId: string,
}

interface Props {
    chapters: Chapters[],
    router?: SingletonRouter,
}

interface Chapters {
    title: string,
    id: string,
}

const SCROLL_DURATION = 2000;

class TableOfContents extends React.Component<Props, State> {
  private observer: IntersectionObserver;

  private timeoutId: any;

  constructor(props) {
    super(props);

    this.state = {
      activeChapterId: props.chapters[0].id,
    };
  }

  componentDidMount() {
    const options = {
      threshold: 0.5,
    };

    if (window.location.hash) {
      this.setState({
        activeChapterId: window.location.hash.split('#')[1],
      });
    }

    this.observer = new IntersectionObserver(this.changeNav, options);
    this.timeoutId = setTimeout(this.observeAll, SCROLL_DURATION);
  }

  componentWillUnmount() {
    this.observer.disconnect();
    clearTimeout(this.timeoutId);
  }

  observeAll = () => {
    const { chapters } = this.props;

    /**  Target the elements to be observed */
    chapters.forEach((item) => {
      const chapterId = document.getElementById(item.id);
      if (chapterId !== null) {
        this.observer.observe(chapterId);
      }
    });
  };

  changeNav = (entries) => {
    const { router } = this.props;
    const { activeChapterId } = this.state;
    entries.some((entry) => {
      if (entry.intersectionRatio <= 0.5) {
        return false;
      }

      if (entry.target.id !== activeChapterId) {
        router.replace(`/intro/lesson-0#${entry.target.id}`);
        this.setState({
          activeChapterId: entry.target.id,
        });
      }

      return true;
    });
  }

  scrollToItem = (id) => {
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
  }

  render() {
    const { chapters } = this.props;
    const { activeChapterId } = this.state;

    return (
      <nav className={styles.tableOfContents}>
        <ul>
          {chapters.map((item) => (
            <li
              key={item.id}
            >
              <a
                href={`#${item.id}`}
                onClick={() => this.scrollToItem(item.id)}
                className={activeChapterId === item.id ? `${styles.active} text-bold` : 'text-bold'}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default withRouter(TableOfContents);
