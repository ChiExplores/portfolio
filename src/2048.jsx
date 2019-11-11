import React from 'react';


const Twentyfourtyeight = () => {
	return (
		<>
			<h1>About Project</h1>
			<p className = 'about'>This was a simple 2048 game where you move the tiles with the arrow keys on your keyboard to match numbers to add up to 2048. I had fun learning how to rotate a matrix so that I can move the boxes left or right and decide whether or not to add the numbers if the adjacents ones match. </p>
			<h2>Tech Stack</h2>
			<p>
				-Vanilla JS
				- HTML
				- CSS
				</p>
			<a href='https://github.com/ChiExplores/2048/blob/master/README.md' target="_blank" rel="noopener noreferrer">	<h4>README HERE</h4></a>
			<a href='https://chiexplores.github.io/2048/' target="_blank" rel="noopener noreferrer">Play Game Here</a>

		</>
	);
}

export default Twentyfourtyeight;
