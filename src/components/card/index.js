import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export default class Card extends Component {
  
  static propTypes = {
    prop: PropTypes,
    type: PropTypes.oneOf('default', 'image').isRequired,
    img: PropTypes.object,
    tag: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired
  }

  static defaultProps = {
    type: 'default'
  }

  render() {
    switch(this.props.type) {
      case 'default':
        return <CardDefault tag={this.props.tag} txt={this.props.txt} />;
      case 'image':
        return <CardImage img={this.props.img} tag={this.props.tag} txt={this.props.txt} />
    }
  }
}

const CardDefault = (props) => {
  return(
    <div className="card-default">
      <h2>
          {props.tag}
      </h2>
      <p>
          {props.txt}
      </p>
      <span>
          Por Jonathan Alves
      </span>
    </div>
  )
}

const CardImage = (props) => {
  
  const img = props.img ?  <img src={props.img} /> : null;
  
  return(
    <div className="card-image">
      { img }
      <h2>
          {props.tag}
      </h2>
      <p>
          {props.txt}
      </p>
      <span>
          Por Jonathan Alves
      </span>
    </div>
  )
}