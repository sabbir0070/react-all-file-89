import React from 'react';
import './Showdisplay.css'
import { addTodb, removeFromdb } from '../../utilities/fakedb';

const Showdisplay = (props) => {
    const {id,name,price} = props.cosmatic;
    const addTocard = (id)=>{
  addTodb(id)
  
    }
    const removeFromCart = id =>{
      removeFromdb(id)
    }
    // const addTocardWithparameter = ()=> addTocard(id);
    return (
        <div className='product' >
        <h1>id:{id}</h1> 
        <h2>Name: {name} </h2>
        <h3>Price: {price} </h3>
        <button onClick={()=> addTocard(id)} >Add to cart short cart</button>
        <button onClick={()=>removeFromCart(id)} >Remove</button>
        
        </div>
    );
};

export default Showdisplay;