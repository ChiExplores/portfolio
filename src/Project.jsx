import React from 'react';
import project1 from './2048.ico';
import dtr from './dtr.ico';
import stardust from './favicon-4.ico';
import flightlogger from './flight-logger.ico';
import './Project.scss'



const Project = (props) => {
	return (
		<>
			<div className='project-icon'>
				<button className='flight-logger' onClick={props.onClick} >
					<img src={flightlogger} className="flight-logger-logo" alt="flight-logger" id='1' />
				</button>	Flight Logger
		</div>

			<div className='project-icon'>
				<button className='dtr' onClick={props.onClick} >
					<a href='https://ga-dtr.herokuapp.com/login' target="_blank" rel="noopener noreferrer">
						<img src={dtr} className="Dtr-logo" alt="dtr" id='2' />
					</a>
				</button>
				DTR
			</div>
			<div className='project-icon'>
				<button className='2048'>
					<a href='https://ga-dtr.herokuapp.com/login' target="_blank" rel="noopener noreferrer">
						<img src={project1} className="2048-logo" alt="2048" id='3' />
					</a>
				</button>
				2048
		</div>
			<div className='project-icon'>
				<button className='stardust-truce'>
					<a href='https://astardusttruce.herokuapp.com/' target="_blank" rel="noopener noreferrer">
						<img src={stardust} className="stardust-truce-logo" alt="stardust-truce" id='4' />
					</a>
				</button>
				Stardust Truce
		</div>
		</>
	);
}

export default Project;