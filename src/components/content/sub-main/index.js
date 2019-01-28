import React, { Component } from 'react'

import './style.scss';
import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentSubMain extends Component {

  content = {
    one: {
      type: 'default',
      tag: "Av. Pontes Vieira",
      txt: "Mercado das Flores é aberto com 39 lojas e preços baixos"
    },
    two: {
      type: 'default',
      tag: "Negócio conjunto",
      txt: "Ceará e Fortaleza se unem por gestão da Arena Castelão"
    },
    three: {
      type: 'default',
      tag: "Cariri",
      txt: "Chuva deixa carros ilhados em estrada de Juazeiro do Norte"
    },
    four: {
      type: 'default',
      tag: "Dois presos",
      txt: "Grupo incendeia subestação da Cagece em Maracanaú"
    }
  }

  render() {
    return (
      <Row xs={12} className="sub-main-wrap">
        <Col xs={12} sm={6} lg={3} className="sub-main-card">
          <Card {...this.content.one} />
        </Col>
        <Col xs={12} sm={6} lg={3} className="sub-main-card">        
          <Card {...this.content.two} />
        </Col>
        <Col xs={12} sm={6} lg={3} className="sub-main-card">        
          <Card {...this.content.three} />
        </Col>
        <Col xs={12} sm={6} lg={3} className="sub-main-card">        
          <Card {...this.content.four} />
        </Col>
      </Row>
    )
  }
}
