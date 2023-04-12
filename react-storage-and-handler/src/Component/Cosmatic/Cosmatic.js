import React, { useEffect, useState } from 'react';
import Showdisplay from '../Showdisplay/Showdisplay';



const Cosmatic = () => {
    // Reducer array
const [cosmatics, setCosmatics] = useState([]);
const sumReducer = (previous,current)=>previous+current.price;
const totalprice =cosmatics.reduce(sumReducer,0);

useEffect(
  ()=>{
   fetch('data.json') 
   .then (res=>res.json())
   .then (data=>setCosmatics(data))
  }  
    ,[])

    return (
        <div>
            <h1>Welcome to my cosmatic store</h1>
            <h2>Total Price:{totalprice} Taka</h2>
         
         {
            cosmatics.map(cosmatic=>
                
                <Showdisplay key={cosmatic.id} cosmatic={cosmatic} ></Showdisplay>
            )
         }
        </div>
    );
};

export default Cosmatic;