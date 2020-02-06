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
            inverted
            textAlign='center'
            style={{ minHeight: 90, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item>
                  <Button size='massive' as='a' inverted={!fixed}>
                    <FontAwesomeIcon icon={faDoorOpen}/> СТАЛЬМАСТЕР
                  </Button>
                </Menu.Item>
                <Menu.Menu position='right'>

                {this.props.menuItems.map(
                  (item) => (
                    <Menu.Item
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