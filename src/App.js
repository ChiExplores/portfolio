import React, { useState } from 'react';
import Projects from './Project';
import About from './About';
import Twentyfortyeight from './2048';
import AStardustTruce from './AStardustTruce';
import DTR from './Dtr.jsx';
import FlightLogger from './FlightLogger.jsx';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import Contact from  './Contact.jsx';
import { Container, Row, Col } from 'react-bootstrap';

import './App.scss';

function App() {
  const [projectNum, setProjectNum] = useState(0);
  const onClick = (e) => {
    setProjectNum(parseInt(e.target.id));
  }

  let main =
    (projectNum === 0) ?
      <FlightLogger /> :
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
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          <Header className="header" />
          <Navigation />
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <div className='main-body'>
      <Row>
        <Col xs={6} md={6}>
          <aside>
            <About />
          </aside>
        </Col>
        <Col xs={6} md={6}>
          <Contact/>
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={12}>
          <Projects onClick={onClick} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={true}>
          {main}
        </Col>
      </Row>
      </div>
    </Container>
  );
}




export default App;
