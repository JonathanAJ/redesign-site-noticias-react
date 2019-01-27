import React, { Component } from 'react'

import './style.css'

export default class Menu extends Component {
  render() {
    return (
      <nav className="main-menu">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">POLICIAL</a></li>
            <li><a href="#">POLÍTICA</a></li>
            <li><a href="#">REGIÃO</a></li>
            <li><a href="#">CULTURA</a></li>
        </ul>
      </nav>
    )
  }
}
