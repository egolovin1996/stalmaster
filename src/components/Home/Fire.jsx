import React from "react";
import { Button, Grid, Image, Header, Segment } from "semantic-ui-react";
import fireDoors from "./Images/fireDoors.png";

export default class Fire extends React.Component {
  render() {
    return (
      <Segment style={{ padding: "3em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Противопожарные двери EI 60
              </Header>
              <p style={{ fontSize: "1.35em" }}>
                <b>Класс EI 60</b> обеспечивает защиту от огня, продуктов
                горения и высокой температуры. При установки двери данного
                класса обеспечивается наивысшая защита в течении <b>60 минут</b>
                .
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Дымогазонепроницаемые двери EIS 60
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <b>Класс EIS 60</b> добавляет защиту от дыма и газа к обычным
                противопожарным дверям класса <b>EI 60</b>. При установки двери
                данного класса обеспечивается защита в течении <b>60 минут</b>.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image rounded size="large" src={fireDoors} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Узнать больше</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
