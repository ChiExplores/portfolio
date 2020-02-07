import React from 'react';
import demo from './images/sdt-demo.gif'

const AStardustTruce = (props) => {
	return (
		<>
			<h1>About Project</h1>
			<img src={demo} className="demo-img" alt="stardust truce demo gif"/>
			<p className='about'>This is a fun project to help students learn how to implement different data structures. I worked with two other devs and was in charge of the git workflow. We worked on branch features (initials_feature) and pushed to dev when ready. My team did code reviews (you are not allow to approve ro review your own code) and when we were ready, we push code to master. </p>
			<h2>Tech Stack</h2>
			<p>
				- Django
				- Python3
				- PosgreSQL
				- HTML
				- SCSS
				</p>

			<a href='https://github.com/ChiExplores/a-stardust-truce/blob/dev/README.md' target="_blank" rel="noopener noreferrer"><h4>README HERE</h4></a>
			<a href='https://astardusttruce.herokuapp.com/' target="_blank" rel="noopener noreferrer">Check it out here!</a>
		</>
	);
}

export default AStardustTruce;