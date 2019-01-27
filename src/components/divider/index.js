import React, { Component } from 'react'

import './style.scss';

export default class Divider extends Component {
  render() {
    return (
        <div className="divider">
            <h4 className="divider-section">
                {this.props.name}
            </h4>
            <a href="#" className="divider-link">
                Ver Tudo
            </a>
            <hr className="divider-line" />
        </div>
    )
  }
}
