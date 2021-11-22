import React from 'react'
import './404.css'
import { Link } from 'react-router-dom'

const Page404 = () => {
	return (
		<>
			<div className='row justify-content-md-center'>
				<div className='col-4'>
					<div className='heading-404'>404</div>
					<div className='noti-404'>Page not Found</div>
					<div className='button-404'>
						<Link to='/'>
							<button type='button' class='btn-lg btn-primary'>
								Home
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Page404
