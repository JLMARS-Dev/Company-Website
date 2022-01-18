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
						<Box src='images/Sherica.jpeg' to={{ pathname: '//github.com/sherica123' }} name='Sherica De Souza' label='Front-End Dev' />
						<Box src='images/Svedha.jpg' to={{ pathname: '//github.com/svedha0103' }} name='Svedha Ashok' label='Back-End Dev' />
						<Box src='images/Lahen.jpeg' to={{ pathname: '//github.com/lks2000' }} name='Lahenshah K.S' label='Front-End Dev' />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default LBoxWrap
