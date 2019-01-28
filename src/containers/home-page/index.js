import React from 'react';

import { Grid, Col, Row } from 'react-flexbox-grid';

import Header from '../../components/header';

import './style.scss';
import ContentMain from '../../components/content/main';
import ContentSubMain from '../../components/content/sub-main';
import ContentCurrent from '../../components/content/current';
import ContentPopular from '../../components/content/popular';
import Divider from '../../components/divider';
import ContentPopularSecond from '../../components/content/popular-second';
import ContentNetwork from '../../components/content/network';
import Menu from '../../components/menu';

export default class HomePage extends React.Component {

    render() {
        return (
          <Grid fluid className="app-home">
            <Header />

            <ContentMain />
            <ContentSubMain />

            <Divider name="Notícias atuais" />
            <ContentCurrent />

            <Divider name="Notícias Pop" />
            <ContentPopular />

            <Divider name="Notícias Pop" />
            <ContentPopularSecond />

            <Divider name="Redes sociais" />
            <ContentNetwork />

            <Divider basic />
            <Row center="xs" middle="xs">
              <Menu inverted />
            </Row>
            
          </Grid>
        );
    };
}