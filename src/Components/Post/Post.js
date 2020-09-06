import React from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title,body,id,userId}=props.post;

    const postStyle={
        border:'1px solid tomato', 
        margin:'12px', 
        padding:'14px',
        borderRadius:'10px',

    }
    return (
        <div style={postStyle}>
            <h1>{title}</h1>
            <h2>{body}</h2>
            <h3>{id}</h3>
           
           <Button variant="contained" color="primary">
           <Link to={`/about/${id}`}  >See details</Link>
      </Button> 
        
        </div>
    );
};

export default Post;
//<Link to={`/about/${userId}`}  >See details</Link>