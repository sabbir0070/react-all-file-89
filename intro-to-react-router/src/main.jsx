import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import First from './Component/First/First';
import Friends from './Component/Friends/Friends';
import Frienddetails from './Component/Frienddetails/Frienddetails';
import Posts from './Component/Posts/Posts';
import Postdetails from './Component/Postdetails/Postdetails';



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>,   
//   },
//    {
//     path:'/About',
//     element:<About></About>
//    },
//    {
//     path:'/Contact',
//     element:<Contact></Contact>
//    },
//    {
//     path:'/',
//     errorElement:<Error></Error>
//    }
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
      path:'friends',
      element:<Friends></Friends>,
      loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
      path:'friend/:friendId',
      element:<Frienddetails></Frienddetails>,
      loader : ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`),
      },
      {
      path:'posts',
      element:<Posts></Posts>,
      loader : ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      },
      {
        path:'post/:postId',
        element:<Postdetails></Postdetails>,
        loader : ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
     
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'*',
        element:<div style={{backgroundColor:'yellow',marginTop:'20px',padding:'20px',color:'red',fontSize:'30px'}}>Not found page 404</div>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>,
)
