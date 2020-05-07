import React from 'react';
import {
  Icon,
  Grid,
  Segment,
  Header
} from 'semantic-ui-react';
import YMap from './YMap';

const mapStateOffice = {
  center: [56.8294345, 60.615059],
  zoom: 12
};

const mapStateManufacture = {
  center: [56.973767, 60.485176],
  zoom: 12
};

export default class Contacts extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
          <Segment style={{ padding: '3em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle' textAlign='center'>
              <Grid.Row>
                <Header as='h3' style={{ fontSize: '1.7em' }}>
                  Контакты
                </Header>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={4}>
                  <p style={{ fontSize: '1.35em' }}>
                    <Icon name='phone' />+ 7 (908) 908-53-37
                  </p>
                </Grid.Column>
                <Grid.Column width={4}>
                  <p style={{ fontSize: '1.35em' }}>
                    <Icon name='mail' />stalmaster2015@mail.ru
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <p style={{ fontSize: '1.35em' }}>
                  <Icon name='clock' />Время работы пн.-cб. с 9.00-18.00
                </p>
              </Grid.Row>

              <Grid.Row>
                <Header as='h3' style={{ fontSize: '1.7em' }}>
                  Офисы продаж
                </Header>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={6}>
                  <p style={{ fontSize: '1.35em' }}>
                    <Icon name='map marker alternate' />г. Екатеринбург ул. Восточная, 46
                  </p>
                </Grid.Column>
                <Grid.Column width={4}>
                  <p style={{ fontSize: '1.35em' }}>
                    <Icon name='phone' />+ 7 (343) 350–60–56
                  </p>
                </Grid.Column>
              </Grid.Row>
              
              <Grid.Row>
                <Grid.Column width={6}>
                  <p style={{ fontSize: '1.35em' }}>
                    <Icon name='map marker alternate' />г. Екатеринбург ул. Сурикова, 31
                  </p>
                </Grid.Column>
                <Grid.Column width={4}>
                  <p style={{ fontSize: '1.35em' }}>
                  <Icon name='phone' />+ 7 (343) 251–02–95
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  <YMap state={mapStateOffice} coordinates={[ [56.845031, 60.630191], [56.813838, 60.599927]]} />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Header as='h3' style={{ fontSize: '1.7em' }}>
                  Производство
                </Header>
              </Grid.Row>

              <Grid.Row>
                <p style={{ fontSize: '1.35em' }}>
                  <Icon name='map marker alternate' />г. Среднеуральск ул. Полевой проезд, 5
                </p>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  <YMap state={mapStateManufacture} coordinates={[mapStateManufacture.center]}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )
    }
}