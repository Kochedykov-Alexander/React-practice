export const getCountsOfPages = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}

export const getArrayOfPages = (totalPage) => {
	const arr = [];

	for(let i = 0; i < totalPage; i++) {
		arr.push(i + 1)
	}
	return arr
}