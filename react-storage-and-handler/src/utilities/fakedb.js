// use localStorage to manage cart data?
const addTodb = id =>{
  let shoppingCart = {};
  const storedcart= localStorage.getItem('shopping-cart');
  if(storedcart){
  shoppingCart = JSON.parse(storedcart);

  }
  else{
    shoppingCart={};
  }
// add quantity
  const quantity = shoppingCart[id];
  if(quantity){
     const newquantity = quantity+1;
      shoppingCart[id]=newquantity;
  }
else{
shoppingCart[id]=1;
}
localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}

const removeFromdb = (id)=>{
const storedcart = localStorage.getItem('shopping-cart')
if(storedcart){
  const shoppingCart = JSON.parse(storedcart);
  if(id in shoppingCart){
  delete shoppingCart[id];
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}
  }
}


export {addTodb,removeFromdb};


