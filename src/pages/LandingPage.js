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
						Our team design and build tailor-made web and mobile software solutions that helps your business grow to its full potential.
						The people here at JLMARS believe in the talents, ideas and skills of our employees and allow everyone to grow to their full
						potential successfully.
					</p>
				</div>
			</Background>
			<ABWrap wrapperText="Projects We've Worked On" />
			<Footer />
		</div>
	)
}

export default LandingPage
