import React, { Component } from 'react'

import './style.scss';
import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentCurrent extends Component {

  content = {
    one: {
      type: 'image',
      img: require('../../../img/photos/2.png'),
      tag: "Brumadinho",
      txt: "Bombeiros confirmam nove mortos e mais de 300 pessoas desaparecidas na lama"
    },
    two: {
      type: 'image',
      img: require('../../../img/photos/3.png'),
      tag: "fevereiro",
      txt: "Requalificação do Polo da Varjota deve começar"
    },
    three: {
      type: 'image',
      tag: "Garulhos fechado",
      txt: "Chuva forte em SP cancela seis voos para Fortaleza"
    }
  }

  render() {
    return (
      <Row xs={12} className="current-wrap">
        <Col xs={12} lg={8} className="current-card">
          <Card  {...this.content.one} />
        </Col>
        <Col xs={12} lg={4} className="current-card">
            <div>
                <Card  {...this.content.two} />
            </div>
            <Card  {...this.content.three} />
        </Col>
      </Row>
    )
  }
}
