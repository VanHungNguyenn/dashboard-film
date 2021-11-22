import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './breadcrumb.css'

const BreadcrumbComponent = ({ breadcrumb }) => {
	return (
		<>
			<Breadcrumb>
				{breadcrumb.map((item, i) => {
					return (
						<Breadcrumb.Item
							key={i}
							href={`${item.path}`}
							active={item.active ? true : false}
						>
							{item.name}
						</Breadcrumb.Item>
					)
				})}
			</Breadcrumb>
		</>
	)
}

export default BreadcrumbComponent
