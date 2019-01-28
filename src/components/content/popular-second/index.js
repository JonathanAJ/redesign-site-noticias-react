import React, { Component } from 'react'

import './style.scss';
import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentPopularSecond extends Component {

  content = {
    one: {
      type: 'image',
      img: require('../../../img/photos/csa.jpeg'),
      tag: "Copa do Nordeste",
      txt: "Após adiamento, Fortaleza enfrenta o CSA nesta segunda"
    },
    two: {
      type: 'image',
      img: require('../../../img/photos/caca.jpeg'),
      tag: "Interior do CE",
      txt: "Caça predatória põe em risco reprodução de aves silvestres"
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
        <Col xs={12} lg={6}>
          <Card  {...this.content.one} />
        </Col>
        <Col xs={12} lg={6}>
          <Card  {...this.content.two} />
        </Col>
        <Col className="popular-second" style={{marginTop: 30}}>
          <article className="article-main">
                <div class="image-main-parent">
                    <img className="image-main" src={require("../../../img/photos/hidrica.jpeg")} />
                </div>
                
                <img className="perfil-main " src={require('../../../img/photos/eu.jpeg')} />
                
                <div className="wrap-main">
                    <span className="tag-main">
                      Negócios
                    </span>                
                    <p className="title-main">
                      Mesmo com crise hídrica, Ceará lidera exportações no agronegócio
                    </p>
                    <span className="by-main">
                        Por Jonathan Alves
                    </span>
                </div>
            </article>
        </Col>
      </Row>
    )
  }
}
