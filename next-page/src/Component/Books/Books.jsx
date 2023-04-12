import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import Loader from '../Loader/Loader';

const Books = () => {
    // Spinner component
    const navigation = useNavigation();
    if(navigation.state ==='loading'){
        return<Loader></Loader>
    }

    const {books}= useLoaderData();
    return (
                
      <div className=' grid gap-6 md:grid-cols-2  lg:grid-cols-4 sm:grid-cols-1'>
      {
            books.map((book)=> <Book key={book.isbn13} book={book} ></Book> )
        }
      </div>
     
    );
};

export default Books;