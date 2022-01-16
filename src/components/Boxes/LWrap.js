import Box from './Box'
import './Boxes.css'

function LBoxWrap(props) {
	return (
		<div className='boxes'>
			<h1>{props.wrapperText}</h1>
			<div className='boxContainer'>
				<div className='boxWrapper'>
					<ul className='boxItem'>
						<Box src='images/MA.jpeg' to={{ pathname: '//github.com/MahmoudAoude' }} name='Mahmoud Aoude' label='Front&Back-End Dev' />
						<Box src='images/Ryan.jpg' to={{ pathname: '//github.com/rd2004-boop' }} name='Ryan Denny' label='Back-End Dev' />
						<Box src='images/Jishnu.jpeg' to={{ pathname: '//github.com/jishnu3000' }} name='Jishnu P. Jayaraj' label='Front-End Dev' />
						<Box
							src='images/MS.jpeg'
							to={{ pathname: '//github.com/msadiq10' }}
							name='Mohammed Sadiq Bagalkot '
							label='Front&Back-End Dev'
						/>
					</ul>

					<ul className='boxItem'>
						<Box src='images/Areesha.jpeg' to={{ pathname: '//github.com/ara114' }} name='Areesha Arain' label='Back-End Dev' />
						<Box src='images/p6.jpg' to={{ pathname: '//github.com/sherica123' }} name='Lucky Charm' label='Back-End Dev' />
						<Box src='images/p7.jpg' to={{ pathname: '//github.com/MahmoudAoude' }} name='Snickers' label='Reporter' />
						<Box src='images/p8.jpg' to={{ pathname: '//github.com/MahmoudAoude' }} name='Twix' label='Whatever' />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default LBoxWrap
