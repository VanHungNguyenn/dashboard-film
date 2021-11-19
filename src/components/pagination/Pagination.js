import React from 'react'
import './pagination.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ReactPaginate from 'react-paginate'

const items = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22,
	22,
]

const Items = ({ currentItems }) => {
	return (
		<>
			{currentItems &&
				currentItems.map((item, i) => {
					return (
						<div key={i}>
							<h3>Item #${item}</h3>
						</div>
					)
				})}
		</>
	)
}

const PaginatedItems = ({ itemsPerPage }) => {}

const Pagination = () => {
	return (
		<>
			<Breadcrumb>
				<Breadcrumb.Item href='/overview'>Home</Breadcrumb.Item>
				<Breadcrumb.Item href='//page' active>
					Page
				</Breadcrumb.Item>
			</Breadcrumb>
			<Items currentItems={items} />
		</>
	)
}

export default Pagination
