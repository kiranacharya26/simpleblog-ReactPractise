import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'
import {useHistory} from 'react-router-dom';

const Blogdetails = () => {
    const history = useHistory()
    const {id} = useParams()
    const {data:blog,loading,error} = 
    useFetch(`http://localhost:8000/blogs/${id}`)

    const handleDelete = () =>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    
    return (
        <div className="">
            <h2>read {id}</h2>
            {loading && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div> {blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    )
}

export default Blogdetails
