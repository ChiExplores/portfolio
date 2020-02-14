import React, { Component } from 'react';
import './Navigation.scss'


class Navigation extends Component {
  render() {
    const sections = ['Home', 'Github', 'Medium'];
    const links = {
      'Home': '/portfolio' ,
      'Github': 'https://github.com/chiexplores',
      'Medium': 'https://medium.com/@chi.huynh'
    }
    const navLinks = sections.map((section, idx) => {
      return (
        <>
          <li><a href={links[section]} key={idx}>{section}</a></li>
        </>
      )
    });

    return (
      <>
        <nav>
          <h2 className="logo">{this.props.logoTitle}</h2>
          <ul>
            {navLinks} 
          </ul>
        </nav>
      </>
    )
  }
}

export default Navigation


