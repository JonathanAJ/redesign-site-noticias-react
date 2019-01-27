import React, { Component } from 'react'
import { Row } from 'react-flexbox-grid';

import './style.css';
import Menu from '../menu';
import SearchBar from '../search';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Row className="header-top">
          <SearchBar />
        </Row>
        <Row center="xs" middle="xs" className="header-bottom">
          <Menu />
        </Row>
      </div>
    )
  }
}
