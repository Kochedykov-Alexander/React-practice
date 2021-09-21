import React from 'react'

export default function MySelect({values, defaultValue, value, onChange}) {
	return (
		<select value = {value} onChange={e => onChange(e.target.value)}>
			<option disabled = {true} value={defaultValue.value}>{defaultValue.name}</option>
			{values.map(item => 
				<option value= {item.value}>{item.name}</option>	
			)}
		</select>
	)
}
