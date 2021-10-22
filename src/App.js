import React, { useState } from "react";
import "./App.css";

function App() {
  const [charCount, setCharCount] = useState(0);

  return (
    <div className="app">
      <form className="charCount">
        <h1>character counter</h1>
        <textarea
          onChange={(e) => setCharCount(e.target.value.length)}
          placeholder="enter text here"
        ></textarea>

        <p>characters: {charCount}</p>
      </form>
    </div>
  );
}
export default App;
