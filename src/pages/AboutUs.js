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
						We are a Software Development Company that focuses on developing Web applications, which are compatible with both computers and
						mobile phones.{<br />} We consist of 8 people, which are divided to 2 groups. The Front End team which consists of Mahmoud, Mohammed Sadiq, Lahenshah, 
						Jishnu and Sherica, this team is always assigend with the design of the applications and the front end development of them. The Back End team consists of
						Mohammed Sadiq, Svedha, Aresha, Ryan and Mahmoud. They are always working on the backend aspect of the projects, which allows the projects to
						have functionalities.
					</p>
				</div>
			</Background>
			<LBoxWrap wrapperText='Core Team' />
			<Footer />
		</div>
	)
}

export default AboutUs
