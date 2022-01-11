import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BoxWrap from '../components/LandingBoxes/BoxWrap'
import Background from '../components/Background'
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
			<BoxWrap wrapperText='Core Team' />
			<Footer />
		</div>
	)
}

export default LandingPage
