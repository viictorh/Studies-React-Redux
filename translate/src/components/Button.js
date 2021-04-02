import React, { Component } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  renderButtonText({ language }) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {this.renderButtonText}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return <ColorContext.Consumer>{this.renderButton}</ColorContext.Consumer>;
  }
}

export default Button;
