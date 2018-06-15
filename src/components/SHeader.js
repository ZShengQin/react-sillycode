import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/compoents/SHeader.css'

const { Item: MenuItem, SubMenu, ItemGroup: MenuItemGroup } = Menu;

class SHeader extends Component{
  state = {
    current: 'mail'
  }

  handleClick = e => {
    this.setState({
      current: e.key
    })
  }

  render(){
    return(
      <Menu className='header-menu' onClick={ this.handleClick } selectedKeys={ [this.state.current] } mode="horizontal">
        <MenuItem key='home'>
          <Link to='/'><Icon type='home' />Home</Link>
        </MenuItem>
        <SubMenu title={<span><Icon type="appstore" />Show</span>}>
          <MenuItemGroup title="Starbucks">
            <MenuItem key="show:1"><Link to='/show'>咖啡</Link></MenuItem>
            <MenuItem key="show:2"><Link to='/show'>星冰乐</Link></MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="MenuItem 2">
            <MenuItem key="show:3"><Link to='/show'>Option 1</Link></MenuItem>
            <MenuItem key="show:4"><Link to='/show'>Option 1</Link></MenuItem>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem key="git">
          <a href="https://github.com/ZShengQin" target="_blank" rel="noopener noreferrer"><Icon type="github" />GitHub</a>
        </MenuItem>
      </Menu> 
    )
  }
}

export default SHeader;