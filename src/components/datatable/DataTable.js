import React, { useState, useEffect, useMemo } from 'react'

import TableHeader from './header/header'
import PaginationComponent from './pagination/Pagination'
import Search from './search/Search'
import useFullPageLoader from '../../hooks/useFullPageLoader'

import './datatable.css'

const DataTable = () => {
	const [comments, setComments] = useState([])
	const [loader, showLoader, hideLoader] = useFullPageLoader()
	const [totalItems, setTotalItems] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const ITEMS_PER_PAGE = 50
	const [search, setSearch] = useState('')
	const [sorting, setSorting] = useState({ field: '', order: '' })

	const headers = [
		{ name: 'No#', field: 'id', sortable: false },
		{ name: 'Name', field: 'name', sortable: true },
		{ name: 'Email', field: 'email', sortable: true },
		{ name: 'Comment', field: 'body', sortable: false },
	]

	useEffect(() => {
		const getData = () => {
			showLoader()
			fetch('https://jsonplaceholder.typicode.com/comments')
				.then((response) => response.json())
				.then((json) => {
					hideLoader()
					setComments(json)
				})
		}

		getData()
	}, [])

	const commentsData = useMemo(() => {
		let computedComments = comments

		if (search) {
			computedComments = computedComments.filter(
				(comment) =>
					comment.name.toLowerCase().includes(search.toLowerCase()) ||
					comment.email
						.toLowerCase()
						.includes(search.toLowerCase()) ||
					comment.body.toLowerCase().includes(search.toLowerCase())
			)
		}

		setTotalItems(computedComments.length)
		// sorting comments
		if (sorting.field) {
			const reversed = sorting.order === 'asc' ? 1 : -1
			computedComments = computedComments.sort(
				(a, b) =>
					reversed * a[sorting.field].localeCompare(b[sorting.field])
			)
		}

		// current page slice
		return computedComments.slice(
			(currentPage - 1) * ITEMS_PER_PAGE,
			(currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
		)
	}, [comments, currentPage, search, sorting])

	const handleSorting = (field, order) => {
		setSorting({ field, order })
	}

	return (
		<>
			<div className='row w-100'>
				<div className='col mb-3 col-12 text-center'>
					<div className='row'>
						<div className='col-md-6'>
							{/* Pagination here */}
							<PaginationComponent
								total={totalItems}
								itemsPerPage={ITEMS_PER_PAGE}
								currentPage={currentPage}
								onPageChange={(page) => setCurrentPage(page)}
							/>
						</div>
						<div className='col-md-6 d-flex flex-row-reverse'>
							{/* Search here */}
							<Search
								onSearch={(value) => {
									setSearch(value)
									setCurrentPage(1)
								}}
							/>
						</div>
					</div>

					<table className='table table-striped'>
						<TableHeader
							headers={headers}
							onSorting={handleSorting}
						/>
						<tbody>
							{commentsData.map((comment) => {
								return (
									<tr key={comment.id}>
										<th scope='row'>{comment.id}</th>
										<td>{comment.name}</td>
										<td>{comment.email}</td>
										<td>{comment.body}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
			{loader}
		</>
	)
}

export default DataTable
