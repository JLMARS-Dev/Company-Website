import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'
import LWrap from '../components/Boxes/LWrap'
import Background from '../components/Background/Background'
import './LandingPage.css'

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
			<LWrap wrapperText='Core Team' />
			<Footer />
		</div>
	)
}

export default LandingPage
