import React from 'react';

import { Grid, Col, Row } from 'react-flexbox-grid';

import Header from '../../components/header';

import './style.scss';
import ContentMain from '../../components/content/main';
import ContentSubMain from '../../components/content/sub-main';
import ContentCurrent from '../../components/content/current';
import ContentPopular from '../../components/content/popular';
import Divider from '../../components/divider';

export default class HomePage extends React.Component {

    render() {
        return (
          <Grid fluid className="app-home">
            <Header />

            <ContentMain />
            <ContentSubMain />

            <Divider name="Notícias atuais" />
            <ContentCurrent />

            <Divider name="Os Populares" />
            <ContentPopular />

            <Divider name="Redes sociais" />
            <ContentPopular />
            
          </Grid>
        );
    };
}