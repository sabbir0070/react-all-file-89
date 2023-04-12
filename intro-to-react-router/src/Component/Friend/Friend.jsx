import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
  const {name,id,phone,username,email,address}=friend;
    // console.log(friend)
    return (
        <div className='friend'>
          <h2>Name:{name}</h2>
          <p>User name:{username} </p>
          <h4>City:{address.city}</h4>
          <p>Phone:{phone} </p>
          <p>Email:{email} </p>
          <p> <Link to={`/friend/${id}`}>Show more details</Link> </p>
        </div>
    );
};

export default Friend;