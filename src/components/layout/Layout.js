import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../../Routes'
import Sidebar from '../sidebar/Sidebar'
import Topnav from '../topnav/TopNav'

import './layout.css'

const Layout = () => {
	const [hideSidebar, setHideSidebar] = useState(false)

	return (
		<BrowserRouter>
			<Route
				render={(props) => {
					return (
						<div className='layout'>
							<Topnav
								setHideSidebar={(boolean) =>
									setHideSidebar(boolean)
								}
								hideSidebar={hideSidebar}
							/>
							<div className='layout__content'>
								<Sidebar hideSidebar={hideSidebar} />
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
