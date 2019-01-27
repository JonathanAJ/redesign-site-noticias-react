import React, { Component } from 'react'

import './style.scss';
import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentCurrent extends Component {
  render() {
    return (
      <Row xs={12} className="current-wrap">
        <Col xs={12} sm={8} className="current-card">
          <Card type="image" />
        </Col>
        <Col xs={12} sm={4} className="current-card" style={{paddingLeft: '20px'}}>
            <div style={{paddingBottom: '26px'}}>
                <Card type="image" />
            </div>
            <Card type="image" />
        </Col>
      </Row>
    )
  }
}