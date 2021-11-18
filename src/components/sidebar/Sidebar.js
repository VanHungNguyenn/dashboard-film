import React from 'react'
import './sidebar.css'

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar__search'>
				<input type='text' placeholder='Search here...' />
				<i className='bx bx-search'></i>
			</div>
		</div>
	)
}

export default Sidebar
