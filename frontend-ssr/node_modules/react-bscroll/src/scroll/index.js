import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BScroll from 'better-scroll'
import Loading from '../loading/loading'
import Bubble from '../bubble/bubble'

import './betterScroll.css'

let defaultPullDownRefresh = {
  threshold: 100,
  stop: 50,
  stopTime: 600,
  txt: {
    success: '刷新成功',
  },
}

let defaultPullUpLoad = {
  threshold: 0,
  txt: {
    more: '加载更多',
    nomore: '我是有底线的',
  },
}

class Scroll extends Component {

  static defaultProps = {
    probeType: 3,
    click: false, // https://ustbhuangyi.github.io/better-scroll/doc/options.html#tap
    startY: 0,
    scrollY: true,
    scrollX: false,
    freeScroll: true,
    scrollbar: true,
    pullDownRefresh: false,
    pullUpLoad: false,
    bounce: true,
    preventDefaultException: {
      className: /(^|\s)originEvent(\s|$)/,
      tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|TABLE)$/,
    },
    eventPassthrough: '',
    isPullUpTipHide: true,
    disabled: false,
    stopPropagation: true,
  }

  static propTypes = {
    children: PropTypes.any,
    probeType: PropTypes.number,
    startY: PropTypes.number,
    click: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    scrollY: PropTypes.bool,
    scrollX: PropTypes.bool,
    freeScroll: PropTypes.bool,
    scrollbar: PropTypes.bool,
    pullDownRefresh: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    pullUpLoad: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    pullUpLoadMoreData: PropTypes.func,
    canRenderPullUpTip: PropTypes.bool,
    doPullDownFresh: PropTypes.func,
    doScroll: PropTypes.func,
    doScrollStart: PropTypes.func,
    doScrollEnd: PropTypes.func,

    preventDefaultException: PropTypes.object,
    eventPassthrough: PropTypes.string,
    isPullUpTipHide: PropTypes.bool,
    bounce: PropTypes.bool,
    disabled: PropTypes.bool,
    stopPropagation: PropTypes.bool,
  }

  constructor(props, context) {
    super(props, context)

    this.scroll = null // scroll 实例

    this.isRebounding = false
    this.pulling = false

    this.pullDownInitTop = -50
    
    this.state = {
      isPullUpLoad: false,
      beforePullDown: true,
      pulling: false,
      pullDownStyle: {
        top: `${this.pullDownInitTop}px`,
      },
      bubbleY: 0,
    }

  }
  createScrollId() {
    return Math.random().toString(36).substr(3, 10);
  }
  componentDidMount() {
    this.initScroll()
  }

  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      if (!this.state.pulling) {
        this.scroll.refresh()
      }
      if (prevProps.disabled !== this.props.disabled) {
        this.props.disabled ? this.scroll.disable() : this.scroll.enable();
      }
    }
  }

  componentWillUnmount() {
    this.scroll.stop()
    this.scroll.destroy()
    this.scroll = null;
    clearTimeout(this.TimerA)
    clearTimeout(this.TimerB)
  }

  initScroll() {
    let { probeType, click, startY, scrollY, scrollX, freeScroll, scrollbar, pullDownRefresh, pullUpLoad, preventDefaultException, eventPassthrough, bounce,stopPropagation } = this.props
    let _pullDownRefresh = typeof pullDownRefresh === 'object' ? {
      ...defaultPullDownRefresh,
      ...pullDownRefresh
    } : (pullDownRefresh ? defaultPullDownRefresh : false)

    let _pullUpLoad = typeof pullUpLoad === 'object' ? {
      ...defaultPullUpLoad,
      ...pullUpLoad
    } : (pullUpLoad ? defaultPullUpLoad : false)

    this.options = {
      probeType,
      click,
      startY,
      scrollY,
      freeScroll,
      scrollX,
      scrollbar,
      pullDownRefresh: _pullDownRefresh,
      pullUpLoad: _pullUpLoad,
      preventDefaultException,
      eventPassthrough,
      bounce: bounce,
      stopPropagation:stopPropagation,
    }
    let wrapper = this.refs.$dom
    this.scroll = new BScroll(wrapper, this.options)
    this.initEvents()
  }

  initEvents() {
    if (this.options.pullUpLoad) {
      this._initPullUpLoad()
    }
    if (this.options.pullDownRefresh) {
      this._initPullDownRefresh()
    }
    if (this.props.doScrollStart) {
      this.scroll.on('scrollStart', (pos) => {
        this.props.doScrollStart(pos)
      })
    }
    if (this.props.doScroll) {
      this.scroll.on('scroll', (pos) => {
        this.props.doScroll(pos)
      })
    }
    if (this.props.doScrollEnd) {
      this.scroll.on('scrollEnd', (pos) => {
        this.props.doScrollEnd(pos)
      })
    }
    if (this.props.disabled) {
      this.scroll.disable()
    }
  }


  getScrollObj = () => {
    return this.scroll
  }

  _initPullDownRefresh() {
    this.scroll.on('pullingDown', () => {
      this.setState({
        beforePullDown: false,
        pulling: true,
      })

      this.props.doPullDownFresh()
        .then(() => {
          if (!this.scroll) { return }
          this.setState({
            pulling: false,
          })
          this._reboundPullDown()
            .then(() => {
              this._afterPullDown()
            })
        })
    })

    this.scroll.on('scroll', (pos) => {
      const { beforePullDown } = this.state

      if (pos.y < 0) {
        return
      }

      if (beforePullDown) {
        this.setState({
          bubbleY: Math.max(0, pos.y + this.pullDownInitTop),
          pullDownStyle: {
            top: `${Math.min(pos.y + this.pullDownInitTop, 10)}px`,
          },
        })
      } else {
        this.setState({
          bubbleY: 0,
        })
      }

      if (this.isRebounding) {
        this.setState({
          pullDownStyle: {
            top: `${10 - (defaultPullDownRefresh.stop - pos.y)}px`,
          },
        })
      }
    })
  }

  _reboundPullDown = () => {
    let { stopTime = 600 } = this.options.pullDownRefresh

    return new Promise((resolve) => {
      this.TimerA = setTimeout(() => {
        this.isRebounding = true
        this.scroll.finishPullDown()
        resolve()
      }, stopTime)
    })
  }

  _afterPullDown() {
    this.TimerB = setTimeout(() => {
      this.setState({
        beforePullDown: true,
        pullDownStyle: {
          top: `${this.pullDownInitTop}px`,
        },
      })
      this.isRebounding = false
      this.scroll.refresh()
    }, this.scroll.options.bounceTime)
  }

  _initPullUpLoad = () => {
    this.scroll.on('pullingUp', () => {
      this.setState({
        isPullUpLoad: true,
      })

      this.props.pullUpLoadMoreData().then(() => {
        if (!this.scroll) { return }
        this.setState({
          isPullUpLoad: false,
        })
        this.scroll.finishPullUp()
        this.scroll.refresh()
      })
    })
  }

  renderPullUpLoad() {
    let { pullUpLoad, isPullUpTipHide } = this.props

    if (pullUpLoad && isPullUpTipHide) {
      return (
        <div className="b-pullup-wrapper">
          <div className="after-trigger" style={{ lineHeight: '.32rem' }}>
            <span style={{ color: '#999999', fontSize: '.28rem' }}>{''}</span>
          </div>
        </div>
      )
    }

    if (pullUpLoad && this.state.isPullUpLoad) {
      return (
        <div className="b-pullup-wrapper">
          <div className="after-trigger" style={{ lineHeight: '.32rem' }}>
            <i className="loading-icon"></i>
            <span style={{ color: '#999999', fontSize: '.28rem' }}>{typeof pullUpLoad === 'object' ? pullUpLoad.txt.more : '加载中...'}</span>
          </div>
        </div>
      )
    }
    if (pullUpLoad && !this.state.isPullUpLoad) {
      return (
        <div className="b-pullup-wrapper">
          <div className="before-trigger">
            <span style={{ color: '#999999', fontSize: '.28rem' }}>{typeof pullUpLoad === 'object' ? pullUpLoad.txt.nomore : '加载完成'}</span>
          </div>
        </div>
      )

    }
  }

  renderPullUpDown() {
    let { pullDownRefresh } = this.props
    let { beforePullDown, pulling, pullDownStyle } = this.state

    if (pullDownRefresh && beforePullDown) {
      return (
        <div className="b-pulldown-wrapper" style={pullDownStyle} >
          <div className="before-trigger">
            <Bubble y={this.state.bubbleY}></Bubble>
          </div>
        </div>

      )
    }

    if (pullDownRefresh && !beforePullDown && pulling) {
      return (
        <div className="b-pulldown-wrapper" style={pullDownStyle}>
          <div className="after-trigger">
            <div className="loading">
              <Loading></Loading>
            </div>
          </div>
        </div>
      )
    }

    if (pullDownRefresh && !beforePullDown && !pulling) {
      return (
        <div className="b-pulldown-wrapper" style={pullDownStyle}>
          <div className="after-trigger">
            <div><span
              style={{ fontSize: '.18rem' }}>{typeof this.options.pullDownRefresh === 'object' ? this.options.pullDownRefresh.txt.success : '刷新完成'}</span>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="b-wrapper" ref="$dom">
        <div className="b-scroll-content">
          {this.props.children}
          {this.renderPullUpLoad()}
        </div>
        {this.renderPullUpDown()}
      </div>
    )
  }
}

export default Scroll
