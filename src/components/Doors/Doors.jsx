import React from "react";
import Door from "./Door";
import { Container, Divider, Segment } from "semantic-ui-react";
import doors from "../../doors.json"



export default class Doors extends React.Component {
  render() {
    return (
      <Segment style={{ padding: "3em 0em" }} vertical>
        {doors.map((item, index) => (
          <Container key={item.name}>
            <Door
              key={item.name}
              name={item.name}
              about={item.about}
              price={item.price}
              stock={item.stock}
              image={item.image}
            />
            {index < doors.length - 1 && (
              <Divider style={{ margin: "3em 0em" }} />
            )}
          </Container>
        ))}
      </Segment>
    );
  }
}
