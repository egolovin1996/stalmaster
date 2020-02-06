import React from 'react';
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Header
} from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png';


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

export default class DesktopContainer extends React.Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            inverted
            style={{ minHeight: 76 }}
            vertical
          >
            <Menu
              fixed='top'
              inverted
              borderless
              pointing
              secondary
              style={{ minHeight: 70, padding: '1em 0em'}}
              size='large'
            >
              <Container>
                <Menu.Item><FontAwesomeIcon icon={faDoorOpen} size="lg"/></Menu.Item>
                <Menu.Item header>СТАЛЬМАСТЕР</Menu.Item>
                <Menu.Menu position='right'>
                {this.props.menuItems.map(
                  (item) => (
                    <Menu.Item
                      as='a'
                      key={item.name}
                      name={item.name}
                      active={this.props.activeItem === item.name}
                      onClick={this.props.handleItemClick}
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </Menu.Item>
                  )
                )}
                </Menu.Menu>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}