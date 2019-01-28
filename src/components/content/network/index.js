import React, { Component } from 'react'

import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentNetwork extends Component {

  content = {
    one: {
      type: 'default',
      // tag: "instagram",
      // txt: ""
    }
  }

  render() {
    return (
      <Row xs={12} className="current-wrap">
        <Col xs={6} sm={3}>
          <Card {...this.content.one}/>
        </Col>
        <Col xs={6} sm={3}>
          <Card {...this.content.one}/>
        </Col>
        <Col xs={6} sm={3}>
          <Card {...this.content.one}/>
        </Col>
        <Col xs={6} sm={3}>
          <Card {...this.content.one}/>
        </Col>
      </Row>
    )
  }
}
