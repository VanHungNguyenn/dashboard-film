import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../../Routes'
import Sidebar from '../sidebar/Sidebar'
import Topnav from '../topnav/TopNav'

import './layout.css'

const Layout = () => {
	return (
		<BrowserRouter>
			<Route
				render={(props) => {
					return (
						<div className='layout'>
							<Topnav />
							<div className='layout__content'>
								<Sidebar />
								<div className='layout__content-main'>
									<Routes />
								</div>
							</div>
						</div>
					)
				}}
			></Route>
		</BrowserRouter>
	)
}

export default Layout
