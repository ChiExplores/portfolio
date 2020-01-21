import React, { Component } from 'react';
import desktopImage from './images/cloud-background.jpg';
import './Header.scss';
import Nav from './Navigation'


const background = window.innerWidth >= 650 ? { backgroundImage: `url(${desktopImage})`} : null;
const nav = window.innerWidth < 650 ? <Nav /> : '';

class Header extends Component {
  render() {
    return (
      <>
        <header style={ background }>

          --.--.
					....
				 ...

				 <div className="title-name">Chi</div>
          <div>
            A Little Serious.
						A Little Silly.
						Very Dedicated.
					</div>

        </header>

      </>
    )
  };
};


export default Header;



const App = () => {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : '';


  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
        <h1>Pineapples</h1>
        <p>They are good</p>
      </div>
    </div>
  );
};