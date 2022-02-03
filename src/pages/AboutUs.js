import NavBar from '../components/Navbar/NavBar'
import Background from '../components/Background/Background'
import './LandingPage.css'
import Footer from '../components/Footer/Footer'
import LBoxWrap from '../components/Boxes/LWrap'
function AboutUs() {
	return (
		<div>
			<NavBar />
			<Background>
				<div className='text'>
					<h1>WHO WE ARE</h1>
					<p>
						Our mission is to help our customers bring their visions to reality, be it anything from an online multiplayer web game to a
						real-time collaborative platform. We help you achieve value in your ideas, assisting you in every part of the way to determine
						the most proper solution to your problems.
					</p>
				</div>
			</Background>
			<LBoxWrap wrapperText='Core Team' />
			<Footer />
		</div>
	)
}

export default AboutUs
