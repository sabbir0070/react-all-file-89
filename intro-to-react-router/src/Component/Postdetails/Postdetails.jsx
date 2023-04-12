import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {
    const post = useLoaderData();
    console.log(post)
   const navigate = useNavigate();

    const goBackHandler = ()=>{
       navigate(-1)
    }
    return (
        <div style={{backgroundColor:'yellow',padding:'5px',margin:'10px',border:'2px solid green'}}>
         <h2>hello future developers id: {post.id} </h2> 
         <p>{post.body}</p>
         <button onClick={goBackHandler}>Go Back</button>
        </div>
    );
};

export default Postdetails;