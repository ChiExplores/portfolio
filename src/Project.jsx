import React from 'react';
import project1 from './2048.ico';
import dtr from './dtr.ico';
import stardust from './favicon-4.ico';



const Project = (props) => {
	return (
		<>
			<div className='project-icon'>
				<button className='dtr' onClick={props.onClick} >
					<a href='https://ga-dtr.herokuapp.com/login' target="_blank">
						<img src={dtr} className="Dtr-logo" alt="dtr" />
					</a>
				</button>
				DTR
	</div>
			<div className='project-icon'>
				<button className='dtr'>
					<a href='https://ga-dtr.herokuapp.com/login' target="_blank">
						<img src={project1} className="2048-logo" alt="2048" />
					</a>
				</button>
				2048
	</div>
			<div className='project-icon'>
				<button className='dtr'>
					<a href='https://ga-dtr.herokuapp.com/login' target="_blank">
						<img src={stardust} />
					</a>
				</button>
				Stardust Truce
	</div>
		</>
	);
}

export default Project;