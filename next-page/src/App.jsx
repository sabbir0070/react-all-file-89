import React from 'react';
import './App.css'
import { Outlet,useNavigation } from 'react-router-dom';
import Header from './Component/Header/Header';
import Loader from './Component/Loader/Loader';
import Lottie from './Component/Lottie/Lottie';

function App() {
  // Spinner component
  const navigation = useNavigation();
  if(navigation.state ==='loading'){
      return<Loader></Loader>
  }
  return (
    <div className="App">
       <Header></Header>
       <div className='min-h[calc(100vh-136px)]'>
       <Outlet> </Outlet>
       
       </div>
       <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
      <div className='py-6 text-sm text-center text-gray-400'>
        © 2023 nextPage Inc. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default App
