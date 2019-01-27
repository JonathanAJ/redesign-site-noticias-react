import React, { Component } from 'react'

import './style.scss';
import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentSubMain extends Component {
  render() {
    return (
      <Row xs={12} className="sub-main-wrap">
        <Col xs={12} sm={6} lg={3} className="sub-main-card">
          <Card  />
        </Col>
        <Col xs={12} sm={6} lg={3} className="sub-main-card">        
          <Card />
        </Col>
        <Col xs={12} sm={6} lg={3} className="sub-main-card">        
          <Card />
        </Col>
        <Col xs={12} sm={6} lg={3} className="sub-main-card">        
          <Card />
        </Col>
      </Row>
    )
  }
}
