import Box from './Box'
import './Boxes.css'

function ABWrap(props) {
	return (
		<div className='boxes'>
			<h1>{props.wrapperText}</h1>
			<div className='boxContainer'>
				<div className='boxWrapper'>
					<ul className='boxItem'>
						<Box src='images/p4.jpg' to='/About' name='Project 1' label='Lead Devleoper' />
						<Box src='images/p5.jpg' to='/About' name='Project 2' label='Manager' />
					</ul>

					<ul className='boxItem'>
						<Box src='images/p5.jpg' to='/About' name='Project 3' label='Back-End Dev' />
						<Box src='images/p6.jpg' to='/About' name='Project 4' label='Back-End Dev' />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ABWrap
