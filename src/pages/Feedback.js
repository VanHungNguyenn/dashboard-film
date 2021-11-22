import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const breadcrumb = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Feedback',
		path: '/feedback',
	},
]

const Feedback = () => {
	return (
		<>
			<Breadcrumb breadcrumb={breadcrumb} />
		</>
	)
}

export default Feedback
