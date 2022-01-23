import NavBar from '../components/Navbar/NavBar'
import Background from '../components/Background/Background'
import './LandingPage.css'
import Footer from '../components/Footer/Footer'
import AWrap from '../components/Boxes/AWrap'
function AboutUs() {
	return (
		<div>
			<NavBar />
			<Background>
				<div className='text'>
					<h1>WHO WE ARE</h1>
					<p>
						We are a Software Development Company that focuses on developing Web applications, that is responsive for both computers and
						mobile phones.{<br />} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
						type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
						essentially unchanged. It was popularised.
					</p>
				</div>
			</Background>
			<AWrap wrapperText="Projects We've Worked On" />
			<Footer />
		</div>
	)
}

export default AboutUs
