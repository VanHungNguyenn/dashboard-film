import React from 'react'
import Spinner from '../../assets/images/spinner-icon.jpg'
import './fullpageloader.css'

const Fullpageloader = () => {
	return (
		<div className='fp-container'>
			<img src={Spinner} className='fp-loader' alt='loading' />
		</div>
	)
}

export default Fullpageloader
