import React from "react";
import Counter from "./counter/Counter";
import CounterNav from "./counter/CounterNav";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>React redux hooks</h1>
      <Counter />
      <CounterNav/>
    </div>
  );
}

export default App;
