import React from 'react';
import Feature from '../Feature/Feature';

const Pricecart = ({price}) => {
    console.log(price)
    return (
        <div className='bg-indigo-800 p-4 flex flex-col'>
            <h2 >
            <span className='text-3xl font-extrabold p-4 text-green-400 '>{price.price}</span>
            <span className='text-lg text-yellow-500'>/month</span>
            </h2>
           <h2 className='text-3xl text-red-500 p-4'>{price.name}</h2> 
           <p className='text-sky-200 underline font-bold'>Feature:</p>
           {
            price.features.map((feature,idx)=> <Feature key={idx} feature={feature}></Feature>)
           }
           <button className='w-full mt-auto hover:bg-yellow-200 duration-1f000 bg-green-600 rounded-md p-2 mb-o text-white'>Buy Now</button>
        </div>
    );
};

export default Pricecart;