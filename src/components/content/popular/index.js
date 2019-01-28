import React, { Component } from 'react'

import './style.scss';
import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentPopular extends Component {

  content = {
    one: {
      type: 'image',
      img: require('../../../img/photos/agua.jpeg'),
      tag: "Capital e RMF",
      txt: "Distribuição de água será dividida em microssetores"
    },
    two: {
      type: 'image',
      img: require('../../../img/photos/futebol.jpeg'),
      tag: "Campeonato cearense",
      txt: "Ferroviário vence Floresta, mas perde vaga na Copa do Brasil"
    },
    three: {
      type: 'image',
      img: require('../../../img/photos/enel.jpeg'),
      tag: "Ataques no CE",
      txt: "Caminhão da Enel é incendiado no bairro Canindezinho"
    }
  }

  render() {
    return (
      <Row xs={12} className="current-wrap">
        <Col xs={12} sm={4}>
          <Card {...this.content.one}/>
        </Col>
        <Col xs={12} sm={4}>
          <Card {...this.content.two}/>
        </Col>
        <Col xs={12} sm={4}>
          <Card {...this.content.three}/>
        </Col>
      </Row>
    )
  }
}
