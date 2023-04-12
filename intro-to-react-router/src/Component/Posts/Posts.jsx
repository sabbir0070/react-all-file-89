import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            {
                posts.map((post,idx)=><Post key={idx} post={post}></Post>)
            }
            <h2>all posts load : {posts.length} </h2>
        </div>
    );
};

export default Posts;