import React from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
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
              inverted
              borderless
              pointing
              secondary
              size='large'
            >
              <Container>
                <Menu.Item><FontAwesomeIcon icon={faDoorOpen} size="lg"/></Menu.Item>
                <Menu.Item header>
                  <Link to='/'>СТАЛЬМАСТЕР</Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                {this.props.menuItems.map(
                  (item) => (
                    <Link 
                      key={item.link}
                      to={item.link} >
                      <Menu.Item
                        as='a'
                        key={item.link}
                        name={item.name}
                        active={this.props.activeItem === item.name}
                        onClick={this.props.handleItemClick}
                      >
                        {item.name}
                      </Menu.Item>
                    </Link>
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