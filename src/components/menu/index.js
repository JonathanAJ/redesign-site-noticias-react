import React, { Component } from 'react'

import './style.scss'

export default class Menu extends Component {

  content = {
    one: ["HOME", "EDITORIAL", "COLUNISTAS", "CLASSIFICADOS", "SOBRE"],
    two: ["AJUDA", "STATUS", "BLOG", "CARREIRAS", "PRIVACIDADE", "TERMOS"]
  }

  render() {
    const content = this.props.main ? this.content.one : this.content.two;
    const list = content.map((e, i) => {
      return(
        <li><a className={i == 0 && this.props.main ? 'main-menu-active':''} href="#">{e}</a></li>
      )
    });

    return (
      <nav className={'main-menu'}>
        <ul className={this.props.inverted ? 'inverted' : ''}>
            {
              list
            }
        </ul>
      </nav>
    )
  }
}
