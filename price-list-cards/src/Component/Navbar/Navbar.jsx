
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Blog', path: '/blog' },
        { id: 5, name: 'Portfolio', path: '/portfolio' },
      ];
      
    return (
       
        <nav className='m-10 bg-purple-500 mt-4 '>
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
              <span>{open===true ? <Bars3Icon className="h-6 w-6 text-purple-700" />
              :<XMarkIcon className="h-6 w-6 text-purple-700" />}
              </span>  
            
            
            </div>
                {/* 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                */}
                <ul className={` bg-purple-400 md:flex absolute md:static pl-8 pb-4 duration-500 ${open ? 'top-20' : '-top-48'}`}>
                    {routes.map(route=> <Link key={route.id} route={route} ></Link> )}
                    </ul>
        </nav>   
                
        
    );
};

export default Navbar;