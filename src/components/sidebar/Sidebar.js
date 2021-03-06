import React from 'react'
import './sidebar.css'
import sidebarData from '../../assets/data/sidebarData'
import SubMenu from './submenu/SubMenu'

const Sidebar = ({ hideSidebar }) => {
	return (
		<div className={`sidebar ${hideSidebar ? 'hide' : ''}`}>
			<div className='sidebar__search'>
				<input type='text' placeholder='Search here...' />
				<i className='bx bx-search'></i>
			</div>

			<div className='sidebar__navigation'>
				{sidebarData.map((item, i) => {
					return <SubMenu item={item} key={i} />
				})}
			</div>
		</div>
	)
}

export default Sidebar
