import {useMemo} from 'react'

export const useSortedPosts = (posts, sort) => {	
	const sortedPosts = useMemo(() => {
		if (sort) {
		  return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return posts 
	  }, [sort, posts])

	  return sortedPosts;
	
}

export const useSorts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort)
	const searchAndSortedPosts = useMemo(() => {
		return sortedPosts.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
	  }
	  , [query, sortedPosts])

	  return searchAndSortedPosts;
}

	