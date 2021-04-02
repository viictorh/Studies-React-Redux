import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  renderButton(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>{this.renderButton}</LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
