import React from 'react'
import { Link } from 'react-router-dom'
import './topnav.css'
import logo from '../../assets/images/vanhunglogo.png'
import { AiOutlineMenu } from 'react-icons/ai'
import Dropdown from '../dropdown/Dropdown'
import { BsBellFill } from 'react-icons/bs'
import notification from '../../assets/jsonData/notification.json'
import userMenu from '../../assets/jsonData/user_menus.json'
import userImage from '../../assets/images/hung.jpg'

const curr_user = {
	display_name: 'VanHung',
	image: userImage,
}

const renderNotificationItem = (item, i) => {
	return (
		<div className='notification-item' key={i}>
			<i className={item.icon}></i>
			<span>{item.content}</span>
		</div>
	)
}

const renderUserToggle = (user) => {
	return (
		<div className='topnav__right-user'>
			<div className='topnav__right-user__name'>{user.display_name}</div>
			<div className='topnav__right-user__image'>
				<img src={user.image} alt='user' />
			</div>
		</div>
	)
}

const renderUserMenu = (item, i) => {
	return (
		<Link to='/' key={i}>
			<div className='notification-item'>
				<i className={item.icon}></i>
				<span>{item.content}</span>
			</div>
		</Link>
	)
}

const Topnav = () => {
	return (
		<div className='topnav'>
			<div className='topnav__left'>
				<div className='topnav__left__logo'>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</div>
				<div className='topnav__left__button'>
					<AiOutlineMenu />
				</div>
			</div>
			<div className='topnav__right'>
				<div className='topnav__right-item'>
					<Dropdown
						contentData={userMenu}
						renderItems={(item, i) => renderUserMenu(item, i)}
						customToggle={() => renderUserToggle(curr_user)}
					/>
				</div>
				<div className='topnav__right-item'>
					<Dropdown
						icon={<BsBellFill />}
						contentData={notification}
						renderItems={(item, i) =>
							renderNotificationItem(item, i)
						}
						renderFooter={() => <Link to='/'>View All</Link>}
					/>
				</div>
			</div>
		</div>
	)
}

export default Topnav
