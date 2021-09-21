import React from 'react'
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import PostItem from './PostItem'

export default function PostList({posts, title, remove}) {

	if (!posts.length) {
		return ( 
		<h1 style={{textAlign: 'center'}}>
			Посты не найдены!
	  	</h1> 
		)
	}
	
	return (
		<div>
			<h1 style={{textAlign: 'center'}}>
				{title}
			</h1>
			<TransitionGroup>
			{posts.reverse().map((post, index)  => 
			<CSSTransition key={post.id} timeout={500} classNames="post">
        		<PostItem remove = {remove} post = {post} number = {index + 1}/>
			</CSSTransition>
     	 	)}
			</TransitionGroup>
		</div>
	)
}
