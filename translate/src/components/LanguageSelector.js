import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    const { onLanguageChange } = this.context;
    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => onLanguageChange("english")} />
        <i className="flag nl" onClick={() => onLanguageChange("dutch")} />
      </div>
    );
  }
}

export default LanguageSelector;
