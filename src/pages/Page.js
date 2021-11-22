import React from 'react'
import DataTable from '../components/datatable/DataTable'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const breadcrumb = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Page',
		path: '/page',
	},
]
const Page = () => {
	return (
		<>
			<Breadcrumb breadcrumb={breadcrumb} />
			<DataTable />
		</>
	)
}

export default Page
