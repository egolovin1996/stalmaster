import React from 'react';
import {
  Button,
  Grid,
  Image,
  Segment,
  Header
} from 'semantic-ui-react';
import doors from '../../home/doors.png';
import hatches from '../../home/hatches.png';

export default class Splitter extends React.Component {
    render() {
        return(
          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Противопожарные двери EI60/EIS60
                  </Header>
                  <Image centered rounded size="large" src={doors} />
                  <p style={{ fontSize: '1.33em' }}>
                    <Button size='huge'>от 8 900 руб</Button>
                  </p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Противопожарные люки
                  </Header>
                  <Image centered rounded size="large" src={hatches} />
                  <p style={{ fontSize: '1.33em' }}>
                    <Button size='huge'>от 7 500 руб</Button>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )
    }
}