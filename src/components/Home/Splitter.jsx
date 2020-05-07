import React from 'react';
import { Link } from 'react-router-dom'
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
                  <Header as='h3' style={{ fontSize: '1.5em' }}>
                    Противопожарные двери EI60/EIS60
                  </Header>
                  <Image centered rounded size="medium" src={doors} />
                  <p style={{ fontSize: '1.2em' }}>
                    <Link to='/doors'>
                      <Button size='huge'>от 8 900 руб</Button>
                    </Link>
                  </p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '1.5em' }}>
                    Противопожарные люки
                  </Header>
                  <Image centered rounded size="medium" src={hatches} />
                  <p style={{ fontSize: '1.2em' }}>
                    <Link to='/hatches'>
                      <Button size='huge'>от 7 500 руб</Button>
                    </Link>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )
    }
}