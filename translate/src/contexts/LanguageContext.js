import React, { Component } from "react";
//Sempre que se cria um "componente" em react, deve-se utilizar letra maiuscula para utiliza-lo como variavel
const Context = React.createContext(); //criando valor default (opcional)

export class LanguageStore extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
