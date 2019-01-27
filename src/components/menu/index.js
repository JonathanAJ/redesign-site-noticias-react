import React, { Component } from 'react'

import './style.scss'

export default class Menu extends Component {
  render() {
    return (
      <nav className="main-menu">
        <ul>
            <li><a className="main-menu-active" href="#">HOME</a></li>
            <li><a href="#">POLICIAL</a></li>
            <li><a href="#">POLÍTICA</a></li>
            <li><a href="#">COMÉRCIO</a></li>
            <li><a href="#">CULTURA</a></li>
            <li><a href="#">ESPORTE</a></li>
            <li><a href="#">CIDADANIA</a></li>
        </ul>
      </nav>
    )
  }
}
