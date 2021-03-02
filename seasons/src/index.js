import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    //UNICO MOMENTO QUE SE FAZ A ATRIBUIÇÃO DIRETA DO VALOR NO THIS.STATE.
    //TODOS OS OUTROS CASOS DEVEM UTILIZAR O MÉTODO setState
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
