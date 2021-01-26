# react-bscroll
---

1. 本项目是[better-scroll](https://github.com/ustbhuangyi/better-scroll)在React中的一种实现。
2. 适用于移动端

## Example
1. [demo](https://soluteli.github.io/react-bscroll/)   
2. [源码](examples/pages)  

## Install
```
npm install react-bscroll -S
```
OR   
```
yarn add react-bscroll
```


## Usage
```react
// 根据文件相对路径引入
import Scroll from 'react-bscroll'
import 'react-bscroll/lib/react-scroll.css'
...

render () {
  return (
    <div className="container">
        <Scroll>
          ...list
        </Scroll>
      </div>
    </div>
  )
}
```


**Tips**   
1. `Scroll`的父容器必须要相对或者绝对定位，否则会导致滚动条位置出错
2. 点击事件要将`click`设置为`true`

## API
具体选项的含义请参考[Better-Scroll中文文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans)

### 选项 
| 属性 | 类型 | 默认值 | 说明 |   
| ---- | ---- | ---- | ---- |  
| probeType | Number | 3 | 我们需要知道滚动的位置， 当probeType为0：不派发滚动事件；为1：非实时（屏幕滑动超过一定时间后）派发scroll 事件； 为2：实时的派发 scroll 事件； 为 3 ：屏幕滑动的过程中和momentum 滚动动画运行过程中实时派发 scroll 事件 |
| click | Boolean | false| better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件。但是自定义的 click 事件会阻止一些原生组件的行为，如 checkbox 的选中等，所以一旦滚动列表中有一些原生表单组件，推荐的做法是监听 tap 事件（*暂未实现tap*）或者 在需要click的原生Dom添加`orginEvent`类名 |   
| scrollY | Boolean | true | 默认允许Y轴滚动 |
| scrollX | Boolean | false | 默认阻止X轴滚动 |
| bounce | Boolean | true | 是否开启回弹 |
| disabled | Boolean | false | 是否禁用 better-scroll |
| stopPropagation | Boolean | false | 默认不阻止事件冒泡 |
| scrollbar | Boolean | false | 默认显示滚动条，有fade消失的效果（默认值也可以设置为Obeject，*暂未实现*） |  
| pullDownRefresh | Boolean or Object | Object | 这个配置用于做下拉刷新功能，当设置 Object 的时，可以配置更多的具体细节。[demo](https://soluteli.github.io/react-bscroll/#/vertical-scroll)，无此需求时请设置为false | 
| pullUpLoad | Boolean or Object | Obejct | 这个配置用于做上拉加载功能，若为Object时可以配置一些具体的参数，[demo](https://soluteli.github.io/react-bscroll/#/vertical-scroll)，无此需求时请设置为false | 
| pullUpLoadMoreData | Function | null | 上拉加载时触发的异步加载数据的方法,需要返回一个resolved状态的Promise来刷新BetterScroll,[demo](https://soluteli.github.io/react-bscroll/#/vertical-scroll)| 
| doPullDownFresh | Function | null | 下拉加载时的回调函数,需要返回一个resolved状态的Promise来刷新BetterScroll。[demo](https://soluteli.github.io/react-bscroll/#/vertical-scroll)| 
| doScroll | Function | null | 滚动时的触发回调函数 | 
| doScrollStart | Function | null | 滚动开始时的触发事件 | 
| doScrollEnd | Function | null | 滚动结束时的操作 | 
| isPullUpTipHide | Boolean | true | 主要用于在上拉加载可用时，若列表数据不足一页，则要隐藏底部提示；若超过一页则显示。 | 

### 方法
`react-scroll`只提供了一个获取`better-scroll`实例的方法：`getScrollObj`   
通过该方法可以获取`better-scroll`实例，从而可以调用实例的方法。[具体方法API点击这里](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans)

```jsx
// 根据文件相对路径引入
import Scroll from 'react-bscroll'
import 'react-bscroll/lib/react-scroll.css'
...

compoentDidMount () {
  // 获取实例
  this.scrollObj = this.refs.scroll.getScrollObj()
}

render () {
  return (
    <div className="container">
        <Scroll ref='scroll'>
          ...list
        </Scroll>
      </div>
    </div>
  )
}
```
### 修复问题
同一页面多次引入调用`<Scroll></Scroll>`组件会有BUG，新增每个`<scroll></scroll>`初始化时唯一ID。

### 新增3个配置项
`bounce`,`disabled`,`stopPropagation`。具体用途看[选项](#api)。