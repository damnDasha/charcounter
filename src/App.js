// function App() {
// const counts = {};

//   return (
//     <div className="app">
//       <form className="charCount">
//         <h1>character counter</h1>
//         <textarea
//         onChange={(e => text.split('').filter(e => e != ' ').map(e => counts[e] ? counts[e]++ : counts[e] = 1)

//         ></textarea>

//         <p>characters: {counts}</p>
//       </form>
//     </div>
//   );
// }
// export default App;

import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  props = {
    counts: [],
    text: [],
  };
  handleOnChange = (e) => {
    e.preventDefault();
    const counts = [];
    const text = [];

    text
      .split("")
      .filter((x) => x !== " ")
      .map((x) => (counts[x] ? counts[x]++ : (counts[x] = 1)));
  };
  render() {
    return (
      <div className="charCount">
        <form className="charCount">
          <h1>character counter</h1>
          <textarea onChange={this.handleOnChange}>{this.props.text}</textarea>
          <p>characters: {this.props.counts}</p>
        </form>
      </div>
    );
  }
}

export default App;
