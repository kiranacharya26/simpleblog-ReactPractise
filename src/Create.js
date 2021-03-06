import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';

const Create = () => {
    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')
    const[author,setAuthor] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const changeTitle = (e) =>{
        setTitle(e.target.value)
    }
    const changeBody = (e) =>{
        setBody(e.target.value)
    }
    const selectForm = (e) =>{
        e.preventDefault()

        const blog = {body,author,title}
        setLoading(true)

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>console.log('new blog added'))
        // history.go(-1)
        history.push('/')
        setLoading(false)

    }
    return (
        <div className="create-div">
            <h1>Add New Blog</h1>
            <form onSubmit={selectForm}>
            <label htmlFor="">Blog: title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={changeTitle}
                />
                <label>Blog Body</label>
                <textarea 
                required
                value={body}
                onChange={changeBody}
                >

                </textarea>
                <label htmlFor="">Blog: author</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="ad">ad</option>
                    <option value="ada">ada</option>
                </select>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding ...</button>}
                
            </form>
        </div>
    )
}

export default Create
