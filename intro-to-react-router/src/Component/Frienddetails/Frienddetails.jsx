import React from 'react';
import Friend from '../Friend/Friend';
import { useLoaderData } from 'react-router-dom';

const Frienddetails = () => {
    const friend = useLoaderData();
    // console.log(friend)
    return (
        <div>
           <h2>Everythin this friend person</h2> 
           <h4>Name:{friend.id}</h4>
           <p>Phone:{friend.phone}</p>
        </div>
    );
};

export default Frienddetails;