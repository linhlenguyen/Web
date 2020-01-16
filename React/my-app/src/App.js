import React from 'react';
import MyHeader from './MyHeader';
import logo from './logo.svg';
import './App.css';

function App() {
  var generateText = function(){
      return ["Hello","World","!", "ASD", "A"].map(i => {
        return <MyHeader displayText= {i}/>
      });
  };
  return (
    <div className="App">
      {generateText()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
