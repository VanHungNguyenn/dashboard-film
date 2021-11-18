import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Article from './pages/Article'
import Decentralization from './pages/Decentralization'
import Feedback from './pages/Feedback'
import Film from './pages/Film'
import Image from './pages/Image'
import Language from './pages/Language'
import Overview from './pages/Overview'
import Page from './pages/Page'
import Setting from './pages/Setting'

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact component={Overview} />
			<Route path='/film' component={Film} />
			<Route path='/article' component={Article} />
			<Route path='/page' component={Page} />
			<Route path='/image' component={Image} />
			<Route path='/feedback' component={Feedback} />
			<Route path='/language' component={Language} />
			<Route path='/decentralization' component={Decentralization} />
			<Route path='/setting' component={Setting} />
		</Switch>
	)
}

export default Routes
