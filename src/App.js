import { Routes, Route } from 'react-router-dom'
import Form from './pages/Form'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' exact element={<LandingPage />} />
				<Route path='/form' element={<Form />} />
				<Route path='/About' element={<AboutUs />} />
			</Routes>
		</div>
	)
}

export default App
