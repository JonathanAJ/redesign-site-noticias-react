import React, { Component } from 'react'

import './style.scss';

export default class Divider extends Component {
  render() {
    return (
        <div className={this.props.basic ? "divider-basic-wrap" : "divider-wrap"}>
            <h4 className="divider-section">
                {this.props.name}
            </h4>
            <a href="#" className="divider-link">
                {this.props.name ? 'Ver Tudo' : ''}
            </a>
            <hr className={this.props.basic ? "divider-basic" : "divider-line"} />
        </div>
    )
  }
}
