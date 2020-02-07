import React from 'react';
import demo from './images/dtr-demo.png'

const DTR = (props) => {
	return (
		<>
			<h1>About Project</h1>
			<img src={demo}/>
			<p className = 'about'>DTR stands for Down the Rabbit hole, but also Define The Relationship between Wikimedia pages. I learned that when you webscrape, you have to really look into the site's html tree to understand where you want to scrape to look for the information you need. </p>
			<h2>Tech Stack</h2>
			<p>
				- React
				- Javascript
				- MongoDB
				- Express
				- NodeJS
				- HTML
				- SCSS
				</p>
			<a href='https://github.com/ChiExplores/dtr/blob/master/README.md' target="_blank" rel="noopener noreferrer"><h4>README HERE</h4></a>
			<a href='https://ga-dtr.herokuapp.com/login' target="_blank" rel="noopener noreferrer">Link to Project</a>
		</>
	);
}

export default DTR;