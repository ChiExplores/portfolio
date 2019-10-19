import React from 'react';
import logo from './favicon-2.ico';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hey, it's Chi 
        </a>
      </header>
      <div className='main-container'>
 
        <main>main</main>
        <aside>
          menu
          <button href='https://ga-dtr.herokuapp.com/login'><img src={logo}  alt="logo" /></button>
          <button></button>
          <button></button>
        </aside>
      </div>
    </div>
  );
}

export default App;
