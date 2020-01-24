import React from 'react';
import project1 from './2048.ico';
import dtr from './dtr.ico';
import stardust from './favicon-4.ico';
import flightlogger from './flight-logger.ico';
import logo from './logo.ico'
import './Project.scss'



const Project = (props) => {
	return (
		<div className='project-menu'>
			<div className='about-icon'>
				<button className='about' onClick={props.onClick} >
					<img src={logo} className="about-logo" alt="about" id='0' />
				</button>About
			</div>
			<div className='project-icon'>
				<button className='flight-logger' onClick={props.onClick} >
					<img src={flightlogger} className="flight-logger-logo" alt="flight-logger" id='1' />
				</button>	Flight Logger
			</div>

			<div className='project-icon'>
				<button className='dtr' onClick={props.onClick} >
					<img src={dtr} className="Dtr-logo" alt="dtr" id='2' />
				</button>
				DTR
			</div>
			<div className='project-icon'>
				<button className='2048' onClick={props.onClick}>
					<img src={project1} className="2048-logo" alt="2048" id='3' />
				</button>
				2048
		</div>
			<div className='project-icon'>
				<button className='stardust-truce' onClick={props.onClick}>
					<img src={stardust} className="stardust-truce-logo" alt="stardust-truce" id='4' />
				</button>
				Stardust Truce
		</div>
		</div>
	);
}

export default Project;