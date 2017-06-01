import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Header extends Component {
  __renderButton() {
    if (this.props.authenticated) {
      return (
        <button onClick={() => {this.props.authenticate(false)}}>Sign Out</button>
      );
    }
    return (
      <button onClick={() => {this.props.authenticate(true)}}>Sign in</button>
    );
  }

  render() {
    return (
      <nav className='navbar navbar-default'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'><Link to='/'>Home</Link></li>
          <li className='nav-item'><Link to='/resources'>resources</Link></li>
          <li className='nav-item'>{ this.__renderButton() }</li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);