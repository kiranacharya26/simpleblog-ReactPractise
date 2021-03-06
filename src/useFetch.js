import { useEffect, useState } from 'react'

const useFetch = () => {
    const[data, setData] = useState(null)
    const [loading,setLoading] = useState(false )
    const [error, setError] = useState(null)


    useEffect (() => {
        
        
        const fetchHandler = async() =>{
            
            try {
               setLoading(true)
               const res = await fetch('http://localhost:8000/blogs')
               const data = await res.json()
               if(!res.ok){
                   throw Error('colud not fetch')
               }
               setData(data)
               setLoading(false)
               setError(null)
               console.log(data);
            } catch (error) {
                setLoading(false)
                setError(error.message);
            }
            
        }
        fetchHandler()
        
   },[])
   return {data,loading,error}
}

export default useFetch
