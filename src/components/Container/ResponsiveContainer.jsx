import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import Footer from './Footer';

export default class ResponsiveContainer extends React.Component {
  menuItems = [
    {name: "О нас", link: "/"},
    {name: "Сейф двери", link: "/safe"},
    {name: "Противопожарные двери", link: "/fire"},
    {name: "Галерея", link: "/gallery"},
    {name: "Контакты", link: "/contacts"},
  ]

  constructor(props){
    super(props);
    
    var activeItem = this.menuItems.filter(item => item.link === window.location.pathname)[0];
    this.state = {activeItem: activeItem.name};
  }

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
          <Footer/>
        </DesktopContainer>

        <MobileContainer
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}
          menuItems={this.menuItems}
        >
          {this.props.children}
          <Footer/>
        </MobileContainer>
      </div>
    )
  }
}
