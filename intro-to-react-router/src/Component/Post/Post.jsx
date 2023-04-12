import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';
const Post = ({post}) => {
    const {userId,id,title,body}=post;
    const navigate = useNavigate();

    const handeNavigation = ()=>{
        navigate(`/post/${id}`)
    } 
    // console.log(post.userId)
    return (
        <div className='post-container'>
            <h2>Title:{title}</h2>
            <h3>UserId:{userId}</h3>
            <p>Body{body}</p>
          <p><Link to= {`/post/${id}`} >Show details me</Link></p>
          <Link to={`/post/${id}`}> <button>Show Post Details</button> </Link>
          <button onClick={handeNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;