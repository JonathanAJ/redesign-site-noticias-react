import React, { Component } from 'react'

import './style.scss';
import { Row, Col } from 'react-flexbox-grid';
import Card from '../../card';

export default class ContentPopularSecond extends Component {

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
        <Col xs={12} lg={6}>
          <Card  {...this.content.one} />
        </Col>
        <Col xs={12} lg={6}>
          <Card  {...this.content.one} />
        </Col>
        <Col className="popular-second">
          <article className="article-main">
                <div class="image-main-parent">
                    <img className="image-main" src={require("../../../img/photos/1.png")} />
                </div>
                
                <img className="perfil-main " src={require('../../../img/photos/eu.jpeg')} />
                
                <div className="wrap-main">
                    <span className="tag-main">
                        BRUMADINHO
                    </span>                
                    <p className="title-main">
                        Rio São Francisco pode ser atingido por lama de barragem rompida
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
