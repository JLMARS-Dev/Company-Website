import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Scroll from './components/Scroll'

ReactDOM.render(
	<BrowserRouter>
		<Scroll />
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)
