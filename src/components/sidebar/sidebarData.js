import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

const Sidebardata = [
	{
		title: 'Overview',
		path: '/',
		icon: <FaIcons.FaRegListAlt />,
	},
	{
		title: 'Film',
		path: '/film',
		icon: <AiIcons.AiFillHome />,
		iconClosed: <AiIcons.AiFillCaretLeft />,
		iconOpened: <AiIcons.AiFillCaretDown />,
		subnav: [
			{
				title: 'List',
				path: '/film/list',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Category',
				path: '/film/category',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Country',
				path: '/film/contry',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Actor',
				path: '/film/actor',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Director',
				path: '/film/director',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Tags',
				path: '/film/tags',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Server',
				path: '/film/server',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Serial',
				path: '/film/serial',
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: 'Article',
		path: '/article',
		icon: <AiIcons.AiFillHome />,
		iconClosed: <AiIcons.AiFillCaretLeft />,
		iconOpened: <AiIcons.AiFillCaretDown />,
		subnav: [
			{
				title: 'List',
				path: '/article/list',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Category',
				path: '/article/category',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Tags',
				path: '/article/tags',
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: 'Page',
		path: '/page',
		icon: <FaIcons.FaRegListAlt />,
	},
	{
		title: 'Image',
		path: '/image',
		icon: <FaIcons.FaRegListAlt />,
	},
	{
		title: 'Feedback',
		path: '/feedback',
		icon: <FaIcons.FaRegListAlt />,
	},
	{
		title: 'Language',
		path: '/language',
		icon: <FaIcons.FaRegListAlt />,
	},
	{
		title: 'Admin',
		path: '/admin',
		icon: <AiIcons.AiFillHome />,
		iconClosed: <AiIcons.AiFillCaretLeft />,
		iconOpened: <AiIcons.AiFillCaretDown />,
		subnav: [
			{
				title: 'User',
				path: '/admin/user',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Role',
				path: '/admin/role',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Role Features',
				path: '/admin/rolefeatures',
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: 'Setting',
		path: '/setting',
		icon: <AiIcons.AiFillHome />,
		iconClosed: <AiIcons.AiFillCaretLeft />,
		iconOpened: <AiIcons.AiFillCaretDown />,
		subnav: [
			{
				title: 'Menu',
				path: '/setting/menu',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Type',
				path: '/admin/type',
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: 'Option',
				path: '/admin/option',
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
]

export default Sidebardata
