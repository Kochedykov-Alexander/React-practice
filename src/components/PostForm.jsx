import React, {useState} from 'react';
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/button/MyInput';

function PostForm({create}) {

	const [post, setPost] = useState({body: '', title: ''})
	
	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post, 
			id: Date.now()
		}
		setPost({body: '', title: ''})
		create(newPost)
	}

	return (
		<div>
			<form>
         		<MyInput type="text" placeholder='название поста' onChange = {(e) => {setPost({...post, title: e.target.value})}} />
        	 	<MyInput type="text" placeholder='описание поста' onChange = {(e) => {setPost({...post, body: e.target.value})}} />
         		<MyButton onClick = {addNewPost}  style={{background: "#f8ffe8"}}>Создать</MyButton>
       		</form>
		</div>
	)
}

export default PostForm
//style={{background: "linear-gradient(to right, #24c6dc, #514a9d)"}}