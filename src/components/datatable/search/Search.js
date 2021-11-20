import React, { useState } from 'react'
import './search.css'

const Search = ({ onSearch }) => {
	const [search, setSearch] = useState('')

	const onInputChange = (value) => {
		setSearch(value)
		onSearch(value)
	}

	return (
		<input
			type='text'
			className='form-control'
			style={{ width: '200px', height: '40px' }}
			placeholder='Search...'
			onChange={(e) => onInputChange(e.target.value)}
			value={search}
		/>
	)
}

export default Search
