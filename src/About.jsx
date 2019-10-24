import React from 'react';
import './About.scss'

const About = (props) => {
	return (
		<>
			<div className='introduction' id='about'>
				<p>About Me:</p>
				<p>
					Knowedge is power, but sharing knowledge is progress.
					My interest in computers deepened when I learned about the history of Smalltalk-80, a language created by the Xerox Research Group.
					I became inspired and gave two tech talks in the last two years about Pharo, a Smalltalk language. I also voluteered at a European Smalltalk User Group event and learend a lot from the mentors I found there.
					
					Now, I am looking for companies focused on e-learning because I believe that people could start learning by using computers as a medium to understand anything from arts and sciences.
				</p>
			</div>

			<div className='introduction' id='contacts'>
				<p>Contact:</p>
				<p>Email: contact[at]chihuynh[dot]me</p>
				<p>LinkedIn: <a href='https://github.com/Chiexplores'>Link</a></p>
				<p>Github: <a href='http://www.linkedin.com/chihuynh7/'>Link</a></p>
				<a href='chi-resume.pdf' download>download resume</a>
			</div>

		</>
	);
}

export default About; 