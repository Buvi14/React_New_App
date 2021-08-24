import axios from 'axios';
import React,{useState,useEffect} from 'react'
import A from './A';
import post_data_context from './Context';



export default function Post() {
    const [Post, setPost] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            setPost(res.data);
        })
    }, []);
    return (
        <div>
            <post_data_context.Provider value={Post}>
            <A />
            </post_data_context.Provider>
            
        </div>
    )
}
