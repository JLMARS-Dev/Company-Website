import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar'
import InputForm from '../components/Form/InputForm'
function Form() {
	const navigate = useNavigate()
	function handleInput(userInput) {
		fetch('https://react-learning-2500e-default-rtdb.asia-southeast1.firebasedatabase.app/form.json', {
			method: 'POST',
			body: JSON.stringify(userInput),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			navigate('/', { replace: true })
		})
	}
	return (
		<div>
			<NavBar />
			{/* <h1>New Form Page!</h1> */}
			<InputForm onRequest={handleInput} />
			<Footer />
		</div>
	)
}

export default Form
