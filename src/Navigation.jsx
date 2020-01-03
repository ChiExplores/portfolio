import React, { Component } from 'react';
import './Navigation.scss'

class Navigation extends Component {
	render() {
		return (
			<>
				<nav>
					<h2 className='logo'>Chi's Portfolio Logo</h2>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Projects</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">About</a></li>
					</ul>
				</nav>
				<div id='test'>
					LOGO. omg hello hi thus us me de not working
			</div>
			</>
		)
	}
}

export default Navigation