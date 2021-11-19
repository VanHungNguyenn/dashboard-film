import React, { useState, useEffect } from 'react'
import './pagination.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ReactPaginate from 'react-paginate'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

const items = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
	22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
	41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
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

function PaginatedItems({ itemsPerPage }) {
	// We start with an empty list of items.
	const [currentItems, setCurrentItems] = useState(null)
	const [pageCount, setPageCount] = useState(0)
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		// Fetch items from another resources.
		const endOffset = itemOffset + itemsPerPage
		console.log(`Loading items from ${itemOffset} to ${endOffset}`)
		setCurrentItems(items.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(items.length / itemsPerPage))
	}, [itemOffset, itemsPerPage])

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		)
		setItemOffset(newOffset)
	}

	return (
		<>
			<Items currentItems={currentItems} />
			<ReactPaginate
				className='pagination'
				breakLabel='...'
				nextLabel={<FiChevronsRight />}
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				pageCount={pageCount}
				previousLabel={<FiChevronsLeft />}
				renderOnZeroPageCount={null}
			/>
		</>
	)
}

const Pagination = () => {
	return (
		<>
			<Breadcrumb>
				<Breadcrumb.Item href='/overview'>Home</Breadcrumb.Item>
				<Breadcrumb.Item href='/page' active>
					Page
				</Breadcrumb.Item>
			</Breadcrumb>
			<PaginatedItems itemsPerPage={10} />
		</>
	)
}

export default Pagination
