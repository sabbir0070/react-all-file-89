import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import{createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Books from './Component/Books/Books';
import Bookdetails from './Component/Bookdetails/Bookdetails';
import Loader from './Component/Loader/Loader';
import ErrorWarning from './Component/ErrorWarning/ErrorWarning';
const router =createBrowserRouter ([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorWarning></ErrorWarning>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books',
        element: <Books></Books>,
        loader : () => fetch(`https://api.itbook.store/1.0/new`),
      },
      {
      path:'book/:id',
      element:<Bookdetails></Bookdetails>,
      loader: ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'loader',
        element:<Loader></Loader>,
      }
    ],
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
