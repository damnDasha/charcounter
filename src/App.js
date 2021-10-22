import React, { Component } from "react";
import "./App.css";
import CharacterCounter from "react-character-counter";

class App extends Component {
  state = {
    name: "",
  };

  render() {
    // value: String;
    // wrapperStyle: Object;
    // characterCounterStyle: Object;
    // overrideStyle: true;

    return (
      <div className="app">
        <form className="charCount">
          <h1>character counter</h1>
          <textarea></textarea>
          <CharacterCounter
            value={this.state.name}
            wrapperStyle={{ position: "relative" }}
            characterCounterStyle={{
              position: "absolute",
              fontSize: "12px",
              fontWeight: "600",
              top: "14px",
              right: "0px",
            }}
          >
            <input type="text" value={this.state.name} />
          </CharacterCounter>
          <p>characters</p>
        </form>
      </div>
    );
  }
}

export default App;
