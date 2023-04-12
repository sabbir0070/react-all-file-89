import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorWarning = () => {
    const Error = useRouteError();
    const {internal,status,statusText,} =Error;
    // console.log(Error)
    return (
        <div className='flex flex-col  justify-center items-center h-[100vh]'>
          <div className='w-70 h-40 bg-slate-200 items-center justify-center flex flex-col text-red-500 font-semibold text-2xl p-5'>
          <p>Status: {status}</p>
           <p>StatusText: {statusText} No route matches URL</p>
          </div>
        </div>
    );
};

export default ErrorWarning;