import React from 'react';
import { Link,useNavigation } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Book = ({book}) => {
    // Spinner component
    const navigation = useNavigation();
    if(navigation.state ==='loading'){
        return<Loader></Loader>
    }
    console.log(book)
    const {image,isbn13,price,subtitle,title,url} =book;
    
    return (
        <Link to={`/book/${isbn13}`}>
        <div className=''>
            <div className='relative transition duration-500 transform hover:-translate-y-2 rounded  shadow-lg  hover:shadow-2xl '>
            <img src={image} alt="" className='object-cover w-full h-56 md:h-64 xl:h-80' />
            <div className='bg-black inset-0 transition-opacity duration-300 hover:opacity-100  absolute bg-opacity-75 opacity-0 pt-12 text-gray-300 flex flex-col'>
            <p>Title: {title}</p>
            <br />
            <p> id: {isbn13}</p>
            <br />
            <p>Subtitle: {subtitle.substring(0,45)}...</p>
            <br />
            <p className='mt-auto pb-2'> Price: {price} </p>
            </div>
            </div>
        </div>
        </Link>
      
    );
};

export default Book;