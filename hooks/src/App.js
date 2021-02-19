import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">

          <h1>Counter</h1>
    <Counter initialValue={7} />
    </div>
  );
}

export default App;
