import React, { Component } from 'react'

import './style.scss';
import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentPopular extends Component {

  content = {
    one: {
      type: 'image',
      img: require('../../../img/photos/3.png'),
      tag: "fevereiro",
      txt: "Requalificação do Polo da Varjota deve começar"
    }
  }

  render() {
    return (
      <Row xs={12} className="current-wrap">
        <Col xs={12} sm={4}>
          <Card {...this.content.one}/>
        </Col>
        <Col xs={12} sm={4}>
          <Card {...this.content.one}/>
        </Col>
        <Col xs={12} sm={4}>
          <Card {...this.content.one}/>
        </Col>
      </Row>
    )
  }
}
