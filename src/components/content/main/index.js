import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

import './style.scss';

export default class ContentMain extends Component {
  render() {
    return (
        <Row xs={12}>
            <article className="article-main">
                <div class="image-main-parent">
                    <img className="image-main" src={require("../../../img/photos/1.png")} />
                </div>
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
        </Row>
    )
  }
}
