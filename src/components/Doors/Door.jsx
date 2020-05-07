import React from "react";
import { Link } from 'react-router-dom'
import {
  Button,
  Grid,
  Image,
  Header,
  List
} from "semantic-ui-react";

export default class Door extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const images = require.context('../../images', true);
    const image = images('./' + this.props.image);
    
    return (
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <Image rounded size="large" src={image} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h4" style={{ fontSize: "1.35em" }}>
                {this.props.name}
              </Header>
              <p style={{ fontSize: "1.2em" }}>
                <List as='ul'>
                {this.props.about.map(item => (
                  <List.Item key={item}as='li'>{item}</List.Item>
                ))}
                </List>
              </p>
              <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as="h4" style={{ fontSize: "1.3em" }}>
                      {this.props.stock}
                    </Header>
                  </Grid.Column>
                  <Grid.Column floated="right" width={6}>
                    <Link to='/contacts'>
                      <Button size="huge">от {this.props.price}</Button>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
