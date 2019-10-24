import React from 'react';
import './About.scss'

const About = (props) => {
	return (
		<>
			<div className='introduction' id='about'>
				<p>About Me:</p>
				<p>
					Knowedge is power, but sharing knowledge is progress.
					Influenced by my childhood. Ideas stem from Smalltalk. Improving how I think.
				</p>
			</div>

			<div className='introduction' id='contacts'>
				<p>Contact:</p>
				<p>Email: contact[at]chihuynh[dot]me</p>
				<a href='chi-resume.pdf' download>download resume</a>
			</div>

		</>
	);
}

export default About; 