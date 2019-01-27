import React, { Component } from 'react'

import './style.scss'

export default class Menu extends Component {
  render() {
    return (
      <nav className="main-menu">
        <ul>
            <li><a className="main-menu-active" href="#">HOME</a></li>
            <li><a href="#">EDITORIAL</a></li>
            <li><a href="#">COLUNISTAS</a></li>
            <li><a href="#">CLASSIFICADOS</a></li>
            <li><a href="#">SOBRE</a></li>
        </ul>
      </nav>
    )
  }
}
