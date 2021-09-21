import React from 'react'
import MySelect from './MySelect'
import MyInput from './MyInput';

export default function PostFilter({filter, setFilter}) {
	return (
		<div>
			<MySelect value = {filter.sort} onChange = {(selectedSort) => setFilter({...filter, sort: selectedSort})} values = {[{value: 'title', name: 'по названию'}, {value: 'body', name: 'по описанию'}]} defaultValue = {{value: 'default', name: 'сортировка по'}}/>
       		<MyInput value = {filter.query} onChange={e => setFilter({...filter, query: e.target.value})}/>
		</div>
	)
}
