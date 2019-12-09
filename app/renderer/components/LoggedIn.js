import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart1 from './Chart1';

export default class LoggedIn extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    this.props.onLogout({
      username: '',
      loggedIn: false,
    });
  };

  render() {
    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
        <button onClick={this.handleLogout}>Logout</button>
        <Chart1 />
      </div>
    );
  }
}
