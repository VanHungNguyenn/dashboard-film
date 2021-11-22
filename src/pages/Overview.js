import React from 'react'

import statusCards from '../assets/jsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const breadcrumb = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Overview',
		path: '/overview',
		active: true,
	},
]

const Overview = () => {
	return (
		<>
			<Breadcrumb breadcrumb={breadcrumb} />
			<div className='row'>
				<div className='col-12'>
					<div className='row'>
						{statusCards.map((item, i) => {
							const { icon, count, title } = item

							return (
								<div
									key={i}
									className='col-6 col-lg-4 col-xl-3'
								>
									{/* status card here */}
									<StatusCard
										icon={icon}
										count={count}
										title={title}
									/>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Overview
