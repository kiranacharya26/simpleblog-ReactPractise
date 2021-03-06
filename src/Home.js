import React from 'react'
import Bloglist from './Bloglist'
import useFetch from './useFetch'

const Home = () => {
    const {data: blogs,loading,error} = useFetch()
    
    // const  handleDelete = (id) =>{
    //      const newBlogs = blogs.filter(blog => blog.id !== id)
    //      setBlogs(newBlogs)
    // }
     
    
    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {loading && <div className='loading'>Loading.. </div>}
            {blogs && <Bloglist blogs={blogs} title='All Blogs' 
            /*handleDelete={handleDelete}*/ />}
        </div>
    )
}

export default Home
