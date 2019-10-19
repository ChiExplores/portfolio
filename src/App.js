import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Chi Huynh</code>
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
      <div className='main-container'>
 
        <main>main</main>
        <aside>
          menu
          <button></button>
          <button></button>
          <button></button>
        </aside>
      </div>
    </div>
  );
}

export default App;
