import '../App.css';
import React, {useState, useEffect} from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../UI/button/PostFilter';
import MyModal from '../UI/button/Modal/MyModal';
import MyButton from '../UI/button/MyButton';
import { useFetching } from '../hooks/useFetching';
import PostsService from '../API/PostsService';
import {useSorts} from '../hooks/useSorts';
import { getArrayOfPages, getCountsOfPages } from '../utils/pagination';


function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  
  const [fetchPosts, loading, errors] = useFetching(async () => {
    const postsApi = await PostsService.getPosts(limit, page)
    setPosts(postsApi.data)
    const total = postsApi.headers['x-total-count']
    setTotalPages(getCountsOfPages(total, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  
  const sortedPosts = useSorts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id != post.id))
  }

  let pagesArray = getArrayOfPages(totalPages);

  const changePage = (page) => {
      setPage(page)
     

  }


  return (
    <div className="App">
      <MyButton onClick = {() => setModal(true)}>Открыть модальное окно</MyButton>
      <MyModal visible = {modal} setVisible={setModal}>
        <PostForm create= {createPost}/>
      </MyModal>
       
        <PostFilter filter={filter} setFilter={setFilter}/>
        {errors && (
          <h1>Ошибка! ${errors}</h1> )
        }
       {loading ? 
       <h1>Загрузка...</h1> :
       <PostList remove = {removePost} posts={sortedPosts} title='Посты' /> 
       
      }

      <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                        {p}
                </span>
            )}
        </div>
    </div>
  );
}

export default Posts;