import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<div className='footerContainer'>
			{/* <section className='footerSub'>
				<p className='footerSubHead'>Blah blah blah blah blah</p>
				<p className='footerSubText'>DODODODDO</p>
			</section> */}
			<div className='footerLinks'>
				<div className='footerLinkWrapper'>
					<div className='footerlinkItems'>
						<h2>Find Us</h2>
						<h4>JLMARS@hotmail.com</h4>
						<h4>JLMARS@gmail.com</h4>
						<h4>0555555523</h4>
						<Link to={{ pathname: '//github.com/JLMARS-Dev' }} target='_blank'>
							GitHub
						</Link>
					</div>
					{/* This adds a space between the two coulmns */}
					<div className='footerlinkItems'></div>
				</div>
				<div className='footerlinkWrapper'>
					<div className='footerlinkItems'>
						<h2>Legal</h2>
						<Link to='/'>Terms</Link>
						<Link to='/'>Privacy</Link>
					</div>
				</div>
			</div>
			<section className='socialMedia'>
				<div className='socialWrap'>
					<Link to='/' className='socialLogo'>
						JLMARS <i className='fas fa-globe-europe'></i>
					</Link>

					<small className='websiteRights'>JLMARS © 2022 </small>

					<Link className='socialGithub' to={{ pathname: '//github.com/JLMARS-Dev' }} target='_blank' aria-label='Github'>
						<i className='fab fa-github' />
					</Link>
				</div>
			</section>
		</div>
	)
}

export default Footer
