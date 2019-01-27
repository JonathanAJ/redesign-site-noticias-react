import React from 'react';

import { Grid, Col, Row } from 'react-flexbox-grid';

import Header from '../../components/header';

import './style.scss';

export default class HomePage extends React.Component {

    render() {
        return (
          <Grid fluid className="app-home">
            <Header />
          </Grid>
        );
    };

}