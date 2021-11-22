import React from 'react'
import { Form } from 'react-bootstrap'

import './dropdown.css'

const Dropdown = ({ dropdownOptions }) => {
	const { name, options } = dropdownOptions

	return (
		<>
			<Form.Select size='sm'>
				<option>{name}</option>
				{options.map((item, i) => {
					return (
						<option key={i} value={item}>
							{item}
						</option>
					)
				})}
			</Form.Select>
		</>
	)
}

export default Dropdown
