import './InputForm.css'
import { useRef } from 'react'
import { Button } from '../Button'
import Background from '../Background'

function InputForm(props) {
	const subjectInputRef = useRef()
	const nameInputRef = useRef()
	const emailInputRef = useRef()
	const commentsInputRef = useRef()

	function submitHandler(event) {
		event.preventDefault()

		const enteredSubject = subjectInputRef.current.value
		const enteredName = nameInputRef.current.value
		const enteredEmail = emailInputRef.current.value
		const enteredComments = commentsInputRef.current.value

		const formData = {
			subject: enteredSubject,
			name: enteredName,
			email: enteredEmail,
			comments: enteredComments,
		}
		props.onRequest(formData)
	}

	return (
		<Background>
			<div className='card'>
				<form className='control' onSubmit={submitHandler}>
					<div className='control'>
						<div className='control'>
							<label htmlFor='subject'>Subject</label>
							<input type='text' required id='title' placeholder='Subject' ref={subjectInputRef} />
						</div>
						<label htmlFor='title'>Name</label>
						<input type='text' placeholder='Enter your name (optional)' ref={nameInputRef} />
					</div>
					<div className='control'>
						<label htmlFor='email'>Email</label>
						<input type='email' required id='title' placeholder='Enter your email' ref={emailInputRef} />
					</div>

					<div className='control'>
						<label htmlFor='comments'>Comments</label>
						<textarea id='comments' required rows='5' ref={commentsInputRef}></textarea>
					</div>
					<div className='controlBtn'>
						{/* <button>Meet Up</button> */}
						<Button>Submit</Button>
					</div>
				</form>
			</div>
		</Background>
	)
}

export default InputForm
