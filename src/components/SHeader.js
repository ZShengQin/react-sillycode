import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/compoents/SHeader.css'

const { Item: MenuItem, SubMenu, ItemGroup: MenuItemGroup } = Menu;

class SHeader extends Component{
  state = {
    current: 'home'
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
            <MenuItem key="show:0"><Link to='/show/0/0'>全部</Link></MenuItem>
            <MenuItem key="show:01"><Link to='/show/0/1'>咖啡</Link></MenuItem>
            <MenuItem key="show:02"><Link to='/show/0/2'>星冰乐</Link></MenuItem>
            <MenuItem key="show:03"><Link to='/show/0/3'>其他</Link></MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="一点点">
            <MenuItem key="show:1"><Link to='/show/1/0'>全部</Link></MenuItem>
            <MenuItem key="show:11"><Link to='/show/1/1'>找奶茶</Link></MenuItem>
            <MenuItem key="show:12"><Link to='/show/1/2'>找好茶</Link></MenuItem>
            <MenuItem key="show:13"><Link to='/show/1/3'>找新鲜</Link></MenuItem>
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