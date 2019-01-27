import React from 'react';

import { Grid, Col, Row } from 'react-flexbox-grid';

import Header from '../../components/header';

import './style.scss';
import ContentMain from '../../components/content/main';
import ContentSubMain from '../../components/content/sub-main';

export default class HomePage extends React.Component {

    render() {
        return (
          <Grid fluid className="app-home">
            <Header />
            <ContentMain />
            <ContentSubMain />
          </Grid>
        );
    };

}