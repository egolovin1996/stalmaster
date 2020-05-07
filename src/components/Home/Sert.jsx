import React from 'react';
import {
  Grid,
  Image,
  Segment,
  Header
} from 'semantic-ui-react';

import sert from '../../home/sert.jpg';

export default class Sert extends React.Component {
    render() {
        return(
          <Segment style={{ padding: '3em' }} vertical>
            <Grid centered columns='equal'>
              <Grid.Row textAlign='center'>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Сертификат соответсвия
                </Header>
              </Grid.Row>
              <Grid.Row textAlign='center'>
                <Image centered rounded size="huge" src={sert} />
              </Grid.Row>
            </Grid>
          </Segment>
        )
    }
}