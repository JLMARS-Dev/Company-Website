import { Link } from 'react-router-dom'
import './Boxes.css'

function Box(props) {
	return (
		<>
			<li className='boxItem'>
				<Link className='boxLink' to={props.to} target='_blank'>
					<figure className='picWrap' data-category={props.label}>
						<img src={props.src} alt={props.alt} className='img' />
					</figure>
					<div className='boxInfo'>
						<h5 className='boxName'>{props.name}</h5>
					</div>
				</Link>
			</li>
		</>
	)
}

export default Box
