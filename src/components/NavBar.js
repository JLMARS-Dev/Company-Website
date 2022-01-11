import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	const [button, setButton] = useState(true)
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false)
		} else {
			setButton(true)
		}
	}
	useEffect(() => {
		showButton()
	}, [])
	window.addEventListener('resize', showButton)

	return (
		<header>
			<nav className='navbar'>
				<div className='navbarContainer'>
					<Link to='/' className='navbarLogo' onClick={closeMobileMenu}>
						JLMARS <i className='fas fa-globe-europe'></i>
					</Link>
					<div className='menuIcon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'navMenu active' : 'navMenu'}>
						<li className={'navItem'}>
							<Link to='/' className='navLinks' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className={'navItem'}>
							<Link to='/form' className='navLinks' onClick={closeMobileMenu}>
								Form
							</Link>
						</li>
						<li className={'navItem'}>
							<Link to='/About' className='navLinks' onClick={closeMobileMenu}>
								About Us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default NavBar
