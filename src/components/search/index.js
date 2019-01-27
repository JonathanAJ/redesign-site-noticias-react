import React, { Component } from 'react'

import './style.scss';

export default class SearchBar extends Component {

    constructor(){
        super();
        this.state = {
            isSearch: false
        };
    }

    toggleSearch = (e) => {
        e.preventDefault();
        console.log('click', this.state)
        this.setState({
            isSearch: !this.state.isSearch
        })
    }

    render() {
        if(this.state.isSearch){
            return(
                <div className="search-bar-on">
                    <input type="text" placeholder="Pesquise aqui..." name="search" />
                    <button onClick={this.toggleSearch} type="submit">
                        <img src={require("../../img/icons/search_on.png")} />
                    </button>
                </div>
            )
        }else{
            return (
                <div className="search-bar-off">
                    <img onClick={this.toggleSearch} src={require("../../img/icons/search_on.png")} />
                </div>
            )
        };
    }
}
