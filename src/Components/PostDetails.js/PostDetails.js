import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments.js/Comments';

const PostDetails = () => {
    const {userId}=useParams();
    const [posts,setPost]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments/${userId}`
        fetch(url);
        fetch(url)
          .then(res=>res.json())
          .then(data=>setPost(data))
    },[])
   
    return (
        <div>
           <h1>{posts.name}</h1>
           <h2>{posts.email}</h2>
           <h3> {posts.body} </h3>
           <Comments></Comments>

        </div>
    );
};
export default PostDetails;