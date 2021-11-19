import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import statusCards from '../assets/jsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'

const Overview = () => {
	return (
		<>
			<Breadcrumb>
				<Breadcrumb.Item href='/overview'>Home</Breadcrumb.Item>
				<Breadcrumb.Item href='/overview' active>
					Overview
				</Breadcrumb.Item>
			</Breadcrumb>
			<div className='row'>
				<div className='col-12'>
					<div className='row'>
						{statusCards.map((item, i) => {
							const { icon, count, title } = item

							return (
								<div
									key={i}
									className='col-3 col-xl-4 col-lg-6 col-md-12'
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
