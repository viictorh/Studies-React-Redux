import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    //carregando a biblioteca relacionada ao oauth2 do google
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "838192777535-htjfd15a0m6p7umkm6dhe3805t4ntboc.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>Google auth</div>;
  }
}

export default GoogleAuth;
