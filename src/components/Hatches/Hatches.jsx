import React from "react";
import Door from "../Doors/Door";
import { Container, Divider, Segment } from "semantic-ui-react";
import hatches from "../../hatches.json"

export default class Hatches extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Segment style={{ padding: "3em 0em" }} vertical>
        {hatches.map((item, index) => (
          <Container key={item.name}>
            <Door
              key={item.name}
              name={item.name}
              about={item.about}
              price={item.price}
              stock={item.stock}
              image={item.image}
            />
            {index < hatches.length - 1 && (
              <Divider key={item.name} style={{ margin: "3em 0em" }} />
            )}
          </Container>
        ))}
      </Segment>
    );
  }
}
