import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, classProps) => {
  const user = state.users.find((u) => u.id === classProps.userId);
  return { user: user };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
