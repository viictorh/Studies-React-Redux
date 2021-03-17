import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  state = {};
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(null, { fetchPosts })(PostList);
