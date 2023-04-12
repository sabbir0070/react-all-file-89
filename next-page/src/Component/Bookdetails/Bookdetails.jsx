import React, { useState } from 'react';
import { useLoaderData,useNavigation } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Bookdetails = () => {
    const navigation = useNavigation();
    // console.log(navigation.state)
    if(navigation.state ==='loading'){
        return<Loader></Loader>
    }
    const book = useLoaderData();
    const {image,language,year,rating, pages,price,publisher,title,authors,desc,url} =book;
    // console.log(book)
    const [fold, setFold] = useState(true)
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 border mt-5 rounded shadow-lg hover:shadow-xl'>
           <div className='mx-auto'>
            <img src={image} alt="" className='object-cover w-full sm:h-52 md:h-96' />
            </div> 
            <div className='text-gray-700 p-5 mx-auto'>
                <h2 className='text-2xl'>Title: {title} </h2>
                
                <p>Language: {language} </p>
                <p>Page: {pages} </p>
                <p> Publish: {publisher} </p>
                <p> Year: {year} </p>
                <p> Rating: {rating} </p>
                <p> Price: {price} </p>
                <h4 className='font-bold text-2xl text-gray-500'>Author: {authors} </h4>
                {
                     fold ? (
                        <>
                        <p className=''>Desc: {desc.substring(0,45)}... </p>
                        <span className=' cursor-pointer mb-5 underline text-pink-500  font-bold' onClick={()=>setFold(false)}>Read More</span>
                        </>
                    ):(
                        <>
                        <p className='text-purple-700 mb-5 underline '>Desc: {desc} </p>
                        <span className='text-red-500 underline font-bold mb-5  ' onClick={()=>setFold(true)}>Read Less</span>
                        </>
                    )
                }
                
            </div>
        </div>
    );
};

export default Bookdetails;