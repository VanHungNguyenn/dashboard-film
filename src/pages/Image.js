import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import DropdownOption from '../components/dropdownOption/Dropdown'
import dropdownCountry from '../assets/data/dropdownCountry'

const breadcrumb = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Image',
		path: '/image',
	},
]

const Image = () => {
	return (
		<>
			<Breadcrumb breadcrumb={breadcrumb} />
			<DropdownOption dropdownOptions={dropdownCountry} />
		</>
	)
}

export default Image
