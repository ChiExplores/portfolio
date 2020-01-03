import React, { Component } from 'react';
import './Navigation.scss'
import logo from './logo.ico'
class Navigation extends Component {
	render() {
		const sections = ['Home', 'Projects', 'Contact', 'About', 'Medium'];
		const navLinks = sections.map(section => {
			return (
				<li><a href={"#" + section}>{section}</a></li>
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


