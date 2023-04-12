import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon,Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [isopen, setIsopen] = useState(false);
    return (
        <div className= ' bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12' >
        <div className='relative flex items-center justify-between'>
            {/* logo section */}
            <Link to='/' className='inline-flex items-center '>
                <span> <BoltIcon className='h-8 w-8  text-blue-500'></BoltIcon> </span>
                <span className=' ml-2 text-2xl font-bold tracking-wide text-gray-500'>NextPage</span>
            </Link>

            {/* Nav Item section */}

            <ul className='items-center hidden space-x-3 lg:flex mr-5'>
            <li><NavLink to="/" className={({isActive})=>isActive ? 'text-blue-500':''}>Home</NavLink></li>
            <li><NavLink to="/books" className={({isActive})=>isActive ? 'text-blue-500':''}>Books</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=>isActive ? 'text-blue-500':''}>About</NavLink></li>
            </ul>
            
        {/* mobile Navbar section */}
            <div className='lg:hidden'>
            <button
            area-aria-label='Open Menu'
            title='Open Menu'
            onClick={()=>setIsopen(true)}
            > <Bars3Icon className='h-6 w-6 text-gray-600'></Bars3Icon> </button>
            { isopen && (
                <div className= 'absolute top-0 left-0 w-full z-10 ' >
               <div className='p-5 bg-white border rounded shadow-sm'>
            {/* logo section */}
               <div className=' p-5  items-center justify-between' >
           <div>
           <Link to='/' className='inline-flex items-center '>
                <span> <BoltIcon className='h-8 w-8 text-blue-500'></BoltIcon> </span>
                <span className=' ml-2 text-2xl font-bold tracking-wide text-gray-500'>NextPage</span>
            </Link>
           </div>
           {/* Dropdown colsed button */}
            <div>
              <button
              area-aria-label='Close button'
              title="Close button"
              onClick={()=>setIsopen(false)}
              >
               <XMarkIcon className='w-6 h-6 text-gray-600'></XMarkIcon>
              </button>
            </div>
            {/* Nav Item section */}

            <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
            </div>
               </div>
                </div>
            )

            }
            </div>
        </div>
       </div>
    );
};

export default Header;