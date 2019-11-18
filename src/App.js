import React, { useState } from 'react';
import Projects from './Project';
import About from './About';
import Twentyfortyeight from './2048';
import AStardustTruce from './AStardustTruce';
import DTR from './Dtr.jsx';
import FlightLogger from './FlightLogger.jsx';

import './App.scss';

function App() {


  const [projectNum, setProjectNum] = useState(0);


  const onClick = (e) => {
    setProjectNum(parseInt(e.target.id));
  }

  let main =
    (projectNum === 0) ?
      <About /> :
      (projectNum === 1) ?
        <FlightLogger /> :
        (projectNum === 2) ?
          <DTR /> :
          (projectNum === 3) ?
            <Twentyfortyeight /> :
            (projectNum === 4) ?
              <AStardustTruce /> :
              (projectNum === 0)



  return (
    <div className="App">
      <div className='main-container'>
        <header className="App-header">

        </header>
        <main>
          {main}
        </main>
        <aside>
          <h1>Projects</h1>

          <Projects onClick={onClick} />
        </aside>
      </div>
    </div>
  );
}

export default App;
