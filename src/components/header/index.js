import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';

import './style.scss';
import Menu from '../menu';
import SearchBar from '../search';
import ContentMain from '../content/main';
import Card from '../card';

export default class Header extends Component {
  render() {
    return (
        <Row className="header-top" middle="xs" xs={12}>

          <Col xs={12} md={4}>
            {/* Algo */}
          </Col>

          <Col xs={12} md={4}>
            <Row center="xs">
              <img onClick={this.toggleSearch} src={require("../../img/icons/logo.png")} />
            </Row>
          </Col>

          <Col className="background-dark" xs={12} md={4}>
            <Row center="xs" end="md">
              <SearchBar />
            </Row>
          </Col>

          <Col className="header-bottom" xs={12} md={12}>
            <Row center="xs" middle="xs">
              <Menu main />
            </Row>
          </Col>
          
        </Row>
    )
  }
}
