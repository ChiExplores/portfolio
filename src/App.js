import React, { useState, useEffect } from 'react';
import logo from './favicon-2.ico';
import project1 from './2048.ico';
import dtr from './dtr.ico';
import stardust from './favicon-4.ico';

import './App.scss';

function App() {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const onClick = () => {
    alert('hello')
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="#"
          target="_blank"
        >

        </a>
      </header>
      <div className='main-container'>

        <main>
          <div className='introduction' id='about'>
          About Me:
          <p>Knowedge is power, but sharing knowledge is progress.
          Influenced by my childhood. Ideas stem from Smalltalk. Improving how I think.</p>
          </div>
          <div className='introduction' id='contacts'>
            Contact:
            <p>Resume, Email</p>
          </div>
        </main>
        <aside>
          Projects
          <button className='dtr' 
          onClick={onClick}>
            <a href='https://ga-dtr.herokuapp.com/login'>
              <img src={dtr} className="Dtr-logo" alt="dtr" /></a></button>DTR
            <button className='dtr'><a href='https://ga-dtr.herokuapp.com/login'><img src={project1} className="2048-logo" alt="2048" /></a></button>2048
            <button className='dtr'><a href='https://ga-dtr.herokuapp.com/login'><img src={stardust} /></a></button>Stardust Truce
        </aside>
      </div>
      </div>
      );
    }
    
    export default App;
