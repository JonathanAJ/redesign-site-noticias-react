import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export default class Card extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="card-default">
        <h2>
            AV. PONTES VIEIRA
        </h2>
        <p>
            Mercado das Flores é aberto com 39 lojas e preços baixos
        </p>
        <span>
            Por Jonathan Alves
        </span>
      </div>
    )
  }
}
