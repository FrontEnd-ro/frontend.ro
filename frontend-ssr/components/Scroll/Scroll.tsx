import React from 'react';
import BScroll from 'better-scroll';
import throttle from 'lodash/throttle';

import styles from './Scroll.module.scss';

const INFINITE_SCROLL_DISTANCE = 100;

interface Props {
  hasInfiniteScroll: boolean;
  /** we use the property isReversed here so we can listen to the bottom or the
   * top of the page */
  isReversed?: boolean;
  /** fetch data when we reach the top of the page, maybe we will need to do that in
   *  some components */
  onStartReach?: () => Promise<void>;
  /** fetch data when we reach the end of the page */
  onEndReach: () => Promise<void>;
  preloadDistance: any;
  className?: string;
}
class Scroll extends React.Component<Props> {
  forceStop: Record<string, unknown>;

  scrollRef: React.RefObject<HTMLDivElement>;

  bScroll: any;

  constructor(props) {
    super(props);
    this.forceStop = {};
    this.scrollRef = React.createRef();
    this.checkStartReach = throttle(this.checkStartReach, 50);
    this.checkEndReach = throttle(this.checkEndReach, 50);
  }

  componentDidMount() {
    this.bScroll = new BScroll(this.scrollRef.current, {
      scrollbar: true,
      eventPassthrough: 'horizontal',
      mouseWheel: true,
      click: true,
    });
    this.setupScrollEvents();
  }

  componentDidUpdate(prevProps) {
    let { hasInfiniteScroll, isReversed } = this.props;

    if (prevProps.hasInfiniteScroll === hasInfiniteScroll) {
      return;
    }
    if (hasInfiniteScroll) {
      if (isReversed) {
        this.disposeStartReachEvents();
        this.forceStop.start = false;
        this.setupStartReachEvents();
      } else {
        this.disposeEndReachEvents();
        this.forceStop.end = false;
        this.setupEndReachEvents();
      }
    } else if (isReversed) {
      this.forceStop.start = true;
      this.disposeStartReachEvents();
    } else {
      this.forceStop.end = true;
      this.disposeEndReachEvents();
    }
  }

  componentWillUnmount() {
    this.disposeScrollEvents();
  }

  getPosition = () => ({
    x: this.bScroll.x,
    y: this.bScroll.y,
    maxX: this.bScroll.maxScrollX,
    maxY: this.bScroll.maxScrollY,
  })

  private setupScrollEvents = () => {
    this.setupStartReachEvents();
    this.setupEndReachEvents();
  }

  private setupStartReachEvents = () => {
    const { onStartReach } = this.props;

    if (typeof onStartReach === 'function') {
      this.bScroll.on('scroll', this.checkStartReach);
      this.bScroll.on('touchEnd', this.checkStartReach);
    }
  }

  private setupEndReachEvents = () => {
    const { onEndReach } = this.props;

    if (typeof onEndReach === 'function') {
      this.bScroll.on('scroll', this.checkEndReach);
      this.bScroll.on('touchEnd', this.checkEndReach);
    }
  }

  private disposeScrollEvents = () => {
    this.disposeStartReachEvents();
    this.disposeEndReachEvents();
  }

  private disposeStartReachEvents = () => {
    this.bScroll.off('scroll', this.checkStartReach);
    this.bScroll.off('touchEnd', this.checkStartReach);
  }

  private disposeEndReachEvents = () => {
    this.bScroll.off('scroll', this.checkEndReach);
    this.bScroll.off('touchEnd', this.checkEndReach);
  }

  private checkEndReach = () => {
    let { onEndReach } = this.props;
    let { preloadDistance } = this.props;
    preloadDistance = preloadDistance || INFINITE_SCROLL_DISTANCE;

    if (
      onEndReach
      && this.bScroll.y - this.bScroll.maxScrollY < preloadDistance
    ) {
      this.bScroll.off('scroll', this.checkEndReach);
      onEndReach()
        .then(() => {
          this.bScroll.refresh();
          onEndReach = !this.forceStop.end && this.bScroll.on('scroll', this.checkEndReach);
        })
        .catch(() => this.bScroll.refresh());
    }
  }

  private checkStartReach = () => {
    let { onStartReach } = this.props;
    let { preloadDistance } = this.props;
    preloadDistance = preloadDistance || INFINITE_SCROLL_DISTANCE;

    if (
      onStartReach
      && -this.bScroll.y <= preloadDistance
      && -this.bScroll.maxScrollY > preloadDistance
    ) {
      let previousScrollHeight = Math.abs(this.bScroll.maxScrollY);
      this.bScroll.off('scroll', this.checkStartReach);
      onStartReach()
        .then(() => {
          this.bScroll.refresh();
          this.bScroll.scrollTo(
            0,
            -Math.abs(this.bScroll.maxScrollY)
              + this.bScroll.y
              + previousScrollHeight,
          );
          onStartReach = !this.forceStop.start
            && this.bScroll.on('scroll', this.checkStartReach);
        })
        .catch(() => this.bScroll.refresh());
    }
  }

  refresh = () => {
    this.bScroll.refresh();
  }

  scrollBottom = () => {
    let { onEndReach, onStartReach } = this.props;

    this.bScroll.scrollTo(0, this.bScroll.maxScrollY);
    if (!this.bScroll.maxScrollY) {
      this.bScroll.maxScollY = onEndReach && onEndReach();
      this.bScroll.maxScrollY = onStartReach && onStartReach();
    }
  }

  render() {
    const { className, children } = this.props;

    const propsClassName = className
      ? ` ${className}`
      : '';
    return (
      <div
        className={`${styles[`${propsClassName}`]} scroll-wrapper bg-white`}
        style={{ overflow: 'hidden' }}
        ref={this.scrollRef}
      >
        {children}
      </div>
    );
  }
}
export default Scroll;
