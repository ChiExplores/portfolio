import React from 'react';

const FlightLogger = (props) => {
	return (
		<>
			<h1>About Project</h1>
			<p className = 'about'>I am a student pilot and as a pilot, you get a physical flight logger for instructors to sign you off when you take lessons. I decided I could make my own logger where you can input the date, description, plane, and instructor you were with for each lesson.</p>
			<h2>Tech Stack</h2>
			<p>
				- Javascript
				- Express
				- NodeJS
				- HTML
				- CSS
				</p>

			<a href='https://github.com/ChiExplores/flight-log-book/blob/master/README.md' target="_blank" rel="noopener noreferrer"><h4>README and Github</h4></a>
			<a href='http://sei-flight-logger.herokuapp.com/students' target="_blank" rel="noopener noreferrer">Link to Project</a>
		</>
	);
}

export default FlightLogger;