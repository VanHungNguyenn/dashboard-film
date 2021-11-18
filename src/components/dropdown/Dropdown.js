import React, { useRef } from 'react'
import './dropdown.css'

const clickOutsideRef = (contentRef, toggleRef) => {
	document.addEventListener('mousedown', (e) => {
		// use click toggle
		if (toggleRef.current && toggleRef.current.contains(e.target)) {
			contentRef.current.classList.toggle('active')
		} else {
			// use click outside toggle and content
			if (contentRef.current && !contentRef.current.contains(e.target)) {
				contentRef.current.classList.remove('active')
			}
		}
	})
}

const Dropdown = (props) => {
	const { icon, customToggle, contentData, renderItems, renderFooter } = props

	const dropdownContent = useRef(null)
	const dropdownToggle = useRef(null)

	clickOutsideRef(dropdownContent, dropdownToggle)

	return (
		<div className='dropdown'>
			<button className='dropdown__toggle' ref={dropdownToggle}>
				{icon ? icon : ''}
				{customToggle ? customToggle() : ''}
			</button>
			<div className='dropdown__content' ref={dropdownContent}>
				{contentData && renderItems
					? contentData.map((item, i) => {
							return renderItems(item, i)
					  })
					: ''}
				{renderFooter ? (
					<div className='dropdown__footer'>{renderFooter()}</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default Dropdown
