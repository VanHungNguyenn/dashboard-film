import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import statusCards from '../assets/jsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Breadcrumb1 from '../components/Breadcrumb/Breadcrumb'
const Overview = () => {
	return (
		<>
			{/* <Breadcrumb>
				<Breadcrumb.Item href='/overview'>Home</Breadcrumb.Item>
				<Breadcrumb.Item href='/overview' active>
					Overview
				</Breadcrumb.Item>
			</Breadcrumb> */}
			<Breadcrumb1 mang={['Home', 'Overview', 'Hello']} />
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
