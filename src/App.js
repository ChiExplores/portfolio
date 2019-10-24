import React, { useState, useEffect } from 'react';
import logo from './logo.ico'
import Projects from './Project';
import About from './About';
import Twentyfortyeight from './2048';
import AStardustTruce from './AStardustTruce';

import './App.scss';

function App() {


  const [projectNum, setProjectNum] = useState(0);


  const onClick = (int) => {
    setProjectNum(parseInt(int.target.id));
  }

  // useEffect(() => {
  //   renderProject();
  // });

  // let renderProject = () => {
  //   console.log(projectNum)
  //   switch (projectNum) {
  //     case 0:
  //       return setProjectComp(<About />);
  //     case 1:
  //       return setProjectComp(<Twentyfortyeight />);
  //     default:
  //       return null;
  //   }
  // }
  let main =
    (projectNum === 0) ?
      <About /> :
      (projectNum === 1) ?
        <Twentyfortyeight /> :
        (projectNum === 2) ?
          <AStardustTruce /> :
          (projectNum === 3)




  return (
    <div className="App">
      <div className='main-container'>
        <header className="App-header">

        </header>
        <main>
          {main}
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
