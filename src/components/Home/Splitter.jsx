import React from 'react';
import {
  Button,
  Grid,
  Image,
  Segment,
  Header
} from 'semantic-ui-react';
import oneDoor from './Images/oneDoor.png';
import twoDoor from './Images/twoDoor.png';

export default class Splitter extends React.Component {
    render() {
        return(
          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Однопльные двери
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    <Button size='huge'>от 8900 руб</Button>
                  </p>
                </Grid.Column>
                <Grid.Column floated='right' style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Двупольные двери
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    <Button size='huge'>от 14500 руб</Button>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )
    }
}