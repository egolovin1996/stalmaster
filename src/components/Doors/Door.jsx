import React from "react";
import {
  Button,
  Grid,
  Image,
  Header,
  List
  
} from "semantic-ui-react";

export default class Door extends React.Component {
  render() {
    return (
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <Image rounded size="large" src={this.props.image} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                {this.props.name}
              </Header>
              <p style={{ fontSize: "1.35em" }}>
                <List as='ul'>
                {this.props.about.map(item => (
                  <List.Item as='li'>{item}</List.Item>
                ))}
                </List>
              </p>
              <Button size="huge">от {this.props.price}</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
