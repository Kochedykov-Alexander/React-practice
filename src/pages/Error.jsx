import React from 'react'

export default function Error({children}) {
	return (
		<div style={{color: 'red', marginTop: '250px'}}>
			<h1>Извините, но эта страница вам недоступна{children}</h1>
		</div>
	)
}
