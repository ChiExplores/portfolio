import React from 'react';
import desktopImage from './images/cloud-background.jpg';
import './Header.scss';
import Nav from './Navigation'


const background = window.innerWidth >= 650 ? { backgroundImage: `url(${desktopImage})` } : null;
const nav = window.innerWidth < 650 ? <Nav /> : '';

function Header() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
      window.addEventListener('resize', handleResize)
      return _ => {
        window.removeEventListener('resize', handleResize)
      }
    }
  })
  return (
    <>
    {nav}
    <header style={background}>
      <div className="title-name">Chi</div>
      <div className="header-text">
        <p>A Little Serious.</p>
        <p>A Little Silly.</p>
        <p>Very Dedicated.</p>
      </div>
    </header>

  </>
  )
}

export default Header;

