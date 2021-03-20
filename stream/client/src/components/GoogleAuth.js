import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const CLIENT_ID =
  "838192777535-htjfd15a0m6p7umkm6dhe3805t4ntboc.apps.googleusercontent.com";

class GoogleAuth extends Component {
  componentDidMount() {
    //carregando a biblioteca relacionada ao oauth2 do google
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId: CLIENT_ID,
        scope: "email",
      });

      this.auth = window.gapi.auth2.getAuthInstance();
      this.onAuthChange(this.auth.isSignedIn.get());
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    const { isSignedIn } = this.props;
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
