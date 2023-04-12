import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friend)
    return (
        <div>
           <h2>we are my friends:{friends.length}</h2> 
        {
            friends.map((friend,idx)=><Friend key={idx} friend={friend} ></Friend> )
        }
        </div>
    );
};

export default Friends;