import Box from './Box'

function BoxWrap(props) {
	return (
		<div className='boxes'>
			<h1>{props.wrapperText}</h1>
			<div className='boxContainer'>
				<div className='boxWrapper'>
					<ul className='boxItem'>
						<Box src='images/p1.jpg' to='/About' text='Morgan Freeman' label='Lead Devleoper' />
						<Box src='images/p2.jpg' to='/About' text='Leonardo Dicaprio' label='Manager' />
					</ul>

					<ul className='boxItem'>
						<Box src='images/p5.jpg' to='/About' text='Tom Holland' label='Back-End Dev' />
						<Box src='images/p6.jpg' to='/About' text='Lucky Charm' label='Back-End Dev' />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default BoxWrap
