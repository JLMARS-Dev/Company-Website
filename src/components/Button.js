import './Button.css'
import { Link } from 'react-router-dom'
import { Children } from 'react'

const STYLES = ['primaryBtn', 'secondaryBtn']

const SIZES = ['mediumBtn', 'largeBtn']
export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
	const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
	const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
	return (
		<button className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick} type={type}>
			{children}
		</button>
	)
}
