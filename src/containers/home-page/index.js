import React from 'react';

import { Grid } from 'react-flexbox-grid';

import Header from '../../components/header';

import './style.css';

export default class HomePage extends React.Component {

    render() {
        return (
          <Grid fluid className="app-home">
            <Header />
          </Grid>
        );
    };

}