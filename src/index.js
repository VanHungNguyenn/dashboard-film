import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/css/grid.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/index.css'
import './assets/css/theme.css'
import Layout from './components/layout/Layout'

document.title = 'VanHung Dashboard'

ReactDOM.render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>,
	document.getElementById('root')
)
