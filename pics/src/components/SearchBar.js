import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    event.target.value;
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
            {/*             
            O item abaixo é equivalente a chamar uma função diretamente, como acima.
            <input type="text" onChange={e => console.log(e.target.value)}/>
             */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
