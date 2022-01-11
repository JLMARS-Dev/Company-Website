import './Box.css'
import { Link } from 'react-router-dom'
function Box(props) {
	return (
		<>
			<li className='boxItem'>
				<Link className='boxLink' to={props.to}>
					<figure className='picWrap' data-category={props.label}>
						<img src={props.src} alt={props.alt} className='img' />
					</figure>
					<div className='boxInfo'>
						<h5 className='boxText'>{props.text}</h5>
					</div>
				</Link>
			</li>
		</>
	)
}

export default Box
