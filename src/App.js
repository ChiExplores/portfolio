import React, { useState } from 'react';
import logo from './logo.ico'
import Projects from './Project';
import About from './About';
import './App.scss';

function App() {

  const onClick = () => {
    alert('hello')
  }
  return (
    <div className="App">
      <div className='main-container'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="#"
            target="_blank"
          >
          </a>
        </header>
        <main>
          <About/>
        </main>
        <aside>
          Projects
          <Projects onClick={onClick} />
        </aside>
      </div>
    </div>
  );
}

export default App;
