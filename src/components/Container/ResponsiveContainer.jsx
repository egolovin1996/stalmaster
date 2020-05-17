import React from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import Footer from "./Footer";
import { withRouter } from "react-router";

class ResponsiveContainer extends React.Component {
  menuItems = [
    { name: "О нас", link: "/" },
    { name: "Противопожарные двери", link: "/doors" },
    { name: "Противопожарные люки", link: "/hatches" },
    { name: "Галерея", link: "/gallery" },
    { name: "Контакты", link: "/contacts" },
  ];

  constructor(props) {
    super(props);

    var activeItem = this.menuItems.filter(
      (item) => item.link === window.location.hash.substr(1)
    )[0];
    this.state = { activeItem: activeItem.link };
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({activeItem: location.pathname});
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <DesktopContainer
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}
          menuItems={this.menuItems}
        >
          {this.props.children}
          <Footer />
        </DesktopContainer>

        <MobileContainer
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}
          menuItems={this.menuItems}
        >
          {this.props.children}
          <Footer />
        </MobileContainer>
      </div>
    );
  }
}

export default withRouter(ResponsiveContainer);
