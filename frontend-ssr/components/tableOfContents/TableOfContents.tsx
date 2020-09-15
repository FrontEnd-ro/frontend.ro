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

class TableOfContents extends React.Component<Props, State> {
  private observer: any;

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
    this.observer = new IntersectionObserver(this.changeNav, options);
    this.observeAll();
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  observeAll = () => {
    const { chapters } = this.props;
    // target the elements to be observed
    chapters.forEach((item) => {
      const chapterId = document.getElementById(item.id);
      if (chapterId !== null) {
        this.observer.observe(chapterId);
      }
    });
  };

  changeNav = (entries) => {
    const { router } = this.props;
    entries.some((entry) => {
      if (entry.intersectionRatio > 0.5) {
        router.replace(`/intro/lesson-0#${entry.target.id}`);
        this.setState({
          activeChapterId: entry.target.id,
        });
      }
      return entry.target.id;
    });
  }

  scrollToItem = (id) => {
    let itemToScroll = document.getElementById(id);
    if (itemToScroll === null) {
      console.warn(`TableOfContents: expected to find element with id=${id} to scroll to`);
    }
    // We need to unobserve all elements on click, because our subsections are quite short.
    // So when we click on a chapter, the checkpoint automatically moves to the next one, because
    // the subsection enters the viewport and intersectionRatio exceeds 0.5 .
    // Then, on scroll we observe all elements again with this setTimeout().
    this.observer.disconnect();
    setTimeout(() => { this.observeAll(); }, 2000);
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
