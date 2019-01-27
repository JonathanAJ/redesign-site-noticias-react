import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export default class Card extends Component {
  
  static propTypes = {
    prop: PropTypes
  }

  static defaultProps = {
    type: 'default'
  }

  render() {
    switch(this.props.type) {
      case 'default':
        return <CardDefault />;
      case 'image':
        return <CardImage />
    }
  }
}

Card.propTypes = {
  type: PropTypes.oneOf('default', 'image').isRequired,
};

const CardDefault = () => {
  return(
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

const CardImage = () => {
  return(
    <div className="card-image">
      <img src={require('../../img/photos/1.png')} />
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