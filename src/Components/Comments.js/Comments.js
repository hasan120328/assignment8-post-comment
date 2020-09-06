import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {userId}=useParams();
    const [comment,setComment]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/photos/${userId}`
           fetch(url)
          .then(res=>res.json())
          .then(data=>setComment(data))
    },[])
    const {title,thumbnailUrl} =comment;
      console.log(comment);
    return (
        <div>
            <h1>title: {title} </h1>
            
            <img src={thumbnailUrl} alt="" />

        </div>
    );
};

export default Comments;
