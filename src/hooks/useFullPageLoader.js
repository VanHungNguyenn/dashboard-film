import React, { useState } from 'react'
import FullPageLoader from '../components/fullPageLoader/FullPageLoader'

const Usefullpageloader = () => {
	const [loading, setLoading] = useState(false)

	return [
		loading ? <FullPageLoader /> : null,
		() => setLoading(true), // show loader
		() => setLoading(false), // hide loader
	]
}

export default Usefullpageloader
