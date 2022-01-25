import Box from './Box'
import './Boxes.css'

function ABWrap(props) {
	return (
		<div className='boxes'>
			<h1>{props.wrapperText}</h1>
			<div className='boxContainer'>
				<div className='boxWrapper'>
					<ul className='boxItem'>
						<Box src='/images/FancySnake.png' to={{pathname:'//github.com/Naughty-Gamer/Fancy-Snake#readme'}} name='Snake Game' label='Dec,2021' />
						<Box src='images/Pacman.png' to={{pathname:'//github.com/F28WP-Dubai-WPGame/PacMan_Rush#readme'}} name='Pacman' label='Dec,2021' />
						<Box src='images/p5.jpg' to={{pathname:'//github.com/F28WP-DUBAI-TASKS/Pirate-Lagoon#readme'}} name='Pirate-Lagoon' label='Dec,2021' />
						<Box src='images/p6.jpg' to='/About' name='Project 4' label='Back-End Dev' />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ABWrap
