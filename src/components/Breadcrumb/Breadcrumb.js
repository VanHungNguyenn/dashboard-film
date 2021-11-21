import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Breadcrumb1 = ({ mang }) => {
	console.log(mang)

	return (
		<>
			<Breadcrumb>
				{mang.map((item, i) => {
					return (
						<Breadcrumb.Item href={`/${item}`}>
							{item}
						</Breadcrumb.Item>
					)
				})}
				{/* <Breadcrumb.Item href='/overview'>Home</Breadcrumb.Item>
				<Breadcrumb.Item href='/overview' active>
					Overview
				</Breadcrumb.Item> */}
			</Breadcrumb>
		</>
	)
}

export default Breadcrumb1
