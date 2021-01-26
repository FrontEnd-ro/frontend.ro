import React, { Component } from 'react'

import './loading.css'

const loadingImg = require('./loading.gif')

class Loading extends Component {
  
  render () {
    return (
      <div className="loading-container">
        <img src={loadingImg} alt="loading" />
      </div>
    )
  }
}

export default Loading
