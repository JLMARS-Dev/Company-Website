import Box from './Box'
import './Boxes.css'

function ABWrap(props) {
	return (
		<div className='boxes'>
			<h1>{props.wrapperText}</h1>
			<div className='boxContainer'>
				<div className='boxWrapper'>
					<ul className='boxItem'>
						<Box
							src='/images/FancySnake.png'
							to={{ pathname: '//github.com/Naughty-Gamer/Fancy-Snake#readme' }}
							name='Snake Game'
							label='Dec,2020'
						/>
						<Box
							src='images/Pacman.png'
							to={{ pathname: '//github.com/F28WP-Dubai-WPGame/PacMan_Rush#readme' }}
							name='Pacman'
							label='Dec,2020'
						/>
						<Box
							src='images/pirate.jpg'
							to={{ pathname: '//github.com/F28WP-DUBAI-TASKS/Pirate-Lagoon#readme' }}
							name='Pirate-Lagoon'
							label='Dec,2020'
						/>
						<Box src='images/read-it.png' to={{ pathname: '//localhost:3000' }} name='Read-it' label='Oct,2021' />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ABWrap
