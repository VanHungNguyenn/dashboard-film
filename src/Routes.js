import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Feedback from './pages/Feedback'
import Image from './pages/Image'
import Language from './pages/Language'
import Overview from './pages/Overview'
import Page from './pages/Page'
import NotFound from './pages/NotFound'
// film
import List from './pages/film/List'
import Actor from './pages/film/Actor'
import Category from './pages/film/Category'
import Country from './pages/film/Country'
// article

// admin

// setting

const Routes = () => {
	return (
		<Switch>
			<Route path='/overview/' exact component={Overview} />
			{/* film */}
			<Route path='/film/list' exact component={List} />
			<Route path='/film/actor' exact component={Actor} />
			<Route path='/film/category' exact component={Category} />
			<Route path='/film/country' exact component={Country} />
			{/* article */}
			{/* <Route path='/article' component={Article} /> */}
			<Route path='/page' component={Page} />
			<Route path='/image' component={Image} />
			<Route path='/feedback' component={Feedback} />
			<Route path='/language' component={Language} />
			{/* admin */}
			{/* <Route path='/admin' component={Admin} /> */}
			{/* setting */}
			{/* <Route path='/setting' component={Setting} /> */}
			<Route path='/' exact>
				<Redirect to='/overview' />
			</Route>
			<Route component={NotFound} />
		</Switch>
	)
}

export default Routes
