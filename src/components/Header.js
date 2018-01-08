import React from 'react';
import Search from './Search';
import logo from '../logo.svg';
import '../App.css';
import { Navbar, Image } from 'react-bootstrap';

class Header extends React.Component {
  state = {
    search: ''
  }

  render() {
    return(
      <Navbar>
        <Navbar.Header>
        <a href="/">
          <Image 
              src={logo}
              className="App-logo" 
              alt="logo"
          />
        </a>
        </Navbar.Header>
        <Search onSearch={ this.props.onSearch } />
      </Navbar>
    );
  }
}

export default Header;