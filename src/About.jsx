import React from 'react';
import './About.scss'

const About = (props) => {
	return (
		<>
			<div className='introduction' id='about'>
				About Me:
				<p>
					Knowedge is power, but sharing knowledge is progress.
					Influenced by my childhood. Ideas stem from Smalltalk. Improving how I think.
				</p>
			</div>
			<div className='introduction' id='contacts'>
				Contact:
		<p>Resume, contact[at]chihuynh[dot]me</p>
			</div>
		</>
	);
}

export default About; 