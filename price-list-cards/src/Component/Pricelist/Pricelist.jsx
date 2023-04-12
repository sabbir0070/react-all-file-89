import React, { useEffect, useState } from 'react';
import Pricecart from '../Pricecart/Pricecart';

const Pricelist = () => {
    const [prices, setPrices] =useState([])
    
    useEffect(()=>{
        fetch('pricelist.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])
    
    return (
        <div className='m-10' >
            <h1 className='text-3xl p-5 font-bold bg-purple-500 text-center'>Awsome affordable prices</h1>
       <div className=' mt-3 grid md:grid-cols-3 gap-4 border'>
       {
        prices.map(price=><Pricecart key={price.id} price={price}></Pricecart>)
       }
       </div>
        </div>
    );
};

export default Pricelist;