import React, {useState} from 'react';
import '../styles/PostItem.css'
import MyButton from '../UI/button/MyButton'


const PostItem = (props) => {
    

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
            <MyButton>
                    Открыть
                </MyButton>
                <MyButton onClick = {() => props.remove(props.post)} style={{background: 'red', color: 'white'}}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;