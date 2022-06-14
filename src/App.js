import React, { Component } from "react";
import { connect } from "react-redux";

import HomePage from "./components/HomePage";
import { fetchUsers } from "./actions/userActions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchUsers(1);

    for (let pg = 2; pg <= this.props.pages; pg++) {
      this.props.onFetchUsers(pg);
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.error && <p>{this.props.error}</p>}
        {this.props.numUsers && <HomePage numUsers={this.props.numUsers} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    numUsers: state.numUsers,
    users: state.users,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { onFetchUsers: (pageNum) => dispatch(fetchUsers(pageNum)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
