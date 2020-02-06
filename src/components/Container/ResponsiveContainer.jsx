import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

export default class ResponsiveContainer extends React.Component {
  menuItems = [
    {name: "О нас", link: "/"},
    {name: "Сейф двери", link: "/safe"},
    {name: "Противопожарные двери", link: "/fire"},
    {name: "Галерея", link: "/gallery"},
    {name: "Контакты", link: "/contacts"},
  ]

  state = { activeItem: 'О нас' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    return(
      <div>
        <DesktopContainer
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}
          menuItems={this.menuItems}
        >
          {this.props.children}
        </DesktopContainer>

        <MobileContainer
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}
          menuItems={this.menuItems}
        >
          {this.props.children}
        </MobileContainer>
      </div>
    )
  }
}
