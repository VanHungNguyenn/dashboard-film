import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const breadcrumb = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Language',
		path: '/language',
	},
]

const Language = () => {
	return (
		<>
			<Breadcrumb breadcrumb={breadcrumb} />
		</>
	)
}

export default Language
