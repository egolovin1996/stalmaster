import React from 'react';
import {
  Container,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'

export default function Footer() {
  return(
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={13}>
            <Header inverted as='h4' content='Контакты' />
              <p>
                г. Екатеринбург ул. Восточная, 46, тел. +7 (343) 350–60–56
              </p> 
              <p>
                г. Екатеринбург ул. Сурикова, 31, тел. +7 (343) 251–02–95
              </p> 
              <p>
                г. Среднеуральск ул. Полевой проезд, 5, тел. +7 (912) 615–76–71
              </p> 
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h4' inverted>
                © СТАЛЬМАСТЕР
              </Header>
              <p>
                Все права защищены
              </p>
              <p>
                1994 - 2020
              </p> 
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}