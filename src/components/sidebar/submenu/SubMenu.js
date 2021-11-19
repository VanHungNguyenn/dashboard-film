import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './submenu.css'

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false)

	const showSubnav = () => setSubnav(!subnav)

	return (
		<>
			<Link
				to={item.path}
				className='sidebar__link'
				onClick={item.subnav && showSubnav}
			>
				<div className='sidebar__item'>
					{item.icon}
					<div className='sidebar__label'>{item.title}</div>
				</div>
				<div className='sidebar__subnav'>
					{subnav && item.subnav
						? item.iconOpened
						: item.subnav
						? item.iconClosed
						: null}
				</div>
			</Link>
			{subnav &&
				item.subnav.map((item, i) => {
					return (
						<Link
							to={item.path}
							key={i}
							className='sidebar__dropdown__link'
						>
							<div className='sidebar__dropdown__item'>
								{item.icon}
								<div className='sidebar__dropdown__label'>
									{item.title}
								</div>
							</div>
						</Link>
					)
				})}
		</>
	)
}

export default SubMenu
