import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'
import Background from '../components/Background/Background'
import './LandingPage.css'
import ABWrap from '../components/Boxes/AWrap'

function LandingPage() {
	return (
		<div>
			<NavBar />
			<Background>
				<div className='text'>
					<h1>Welcome To JLMARS</h1>
					<p>
						This website is the offical company website where you can find our various projects, meet our team and contact us for any
						inquiries.
					</p>
				</div>
			</Background>
			<ABWrap wrapperText="Projects We've Worked On" />
			<Footer />
		</div>
	)
}

export default LandingPage
