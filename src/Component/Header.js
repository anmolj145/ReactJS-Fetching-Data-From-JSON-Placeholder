import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  isLog = () => {
    var path;
    this.props.location.pathname === '/data' ?  path = true : path = false
    return path;
  }

  deleteStorage = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  }

  componentWillMount() {
    if (this.isLog() && (window.location.href === `http://localhost:3000/`)) {
      localStorage.clear();
    }
  }

  render() {

    let navigation;

    if (this.isLog()) {
      navigation = (<div className="pg">
        <a href="#about">About</a>
        <a href="#dashboard">Dashboard</a>
        <a href="/" onClick={this.deleteStorage}>Log Out</a>
      </div>);

    }
    else {
      navigation = (<div className="pg">
        <a href="#about">About</a>
      </div>);

    }

    return (
      <div className="App-header" >
        <div >
          <h2 className="logo">Brand</h2>
          {navigation}
        </div>
      </div>
    );
  }
}
export default withRouter(Header);