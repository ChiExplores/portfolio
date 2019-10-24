import React from 'react';
import './About.scss'

const About = (props) => {
	return (
		<>
			<div className='introduction' id='about'>
				<p>Chi Huynh:</p>
				<p>
					Knowedge is power, but sharing knowledge is progress.
					My interest in computers deepened when I learned about the history of Smalltalk-80, a language created by the Xerox Research Group.
					I became inspired and gave two tech talks in the last two years about Pharo, a Smalltalk language. I also voluteered at a European Smalltalk User Group event and learned a lot from the mentors I got to know there.

					Now, I am looking for companies focused on e-learning because I believe that people could start learning by using computers as a medium to understand anything from arts and sciences.
				</p>
			</div>

			<div className='introduction' id='contacts'>
				<p>Contact:</p>
				<p>Email: contact[at]chihuynh[dot]me</p>
				<p>Github: <a href='https://github.com/Chiexplores' target="_blank" rel="noopener noreferrer">Link</a></p>
				<p>LinkedIn: <a href='https://www.linkedin.com/in/chihuynh7/' target="_blank" rel="noopener noreferrer">Link</a></p>
				<a href='chi-resume.pdf' download><h2>Download Resume</h2></a>
			</div>

		</>
	);
}

export default About; 