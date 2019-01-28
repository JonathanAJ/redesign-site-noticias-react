import React, { Component } from 'react'

import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentNetwork extends Component {

  content = {
    one: {
      type: 'basic',
      txt: "Facebook"
    },
    two: {
      type: 'basic',
      txt: "Instagram"
    },
    three: {
      type: 'basic',
      txt: "Twitter"
    },
    four: {
      type: 'basic',
      txt: "Youtube"
    }
  }

  render() {
    return (
      <Row xs={12} className="current-wrap">
        <Col xs={6} sm={3}>
          <Card {...this.content.one}/>
        </Col>
        <Col xs={6} sm={3}>
          <Card {...this.content.two}/>
        </Col>
        <Col xs={6} sm={3}>
          <Card {...this.content.three}/>
        </Col>
        <Col xs={6} sm={3}>
          <Card {...this.content.four}/>
        </Col>
      </Row>
    )
  }
}
