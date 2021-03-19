import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
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

export default connect(mapStateToProps)(UserHeader);
