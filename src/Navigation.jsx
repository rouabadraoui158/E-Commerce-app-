import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navigation(){
    const[isShown,setisShown]=useState(false)
    const Showfunction = ()=>{setisShown(!isShown) }
    return(
     <div className="min-h-full">
      <nav className="bg-white-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img className="h-25 w-30" src="data:image/png;base64,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" alt="logo-img"/>
                </div>
                
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</Link>
              <Link to="/about" class="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">About Us</Link>
              <Link to="/MenProduct" class="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">Men</Link>
              <Link to="/WomenProduct" class="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">Women</Link>
                    </div>
                </div>
                
                </div>
                
            </div>

        </div>
        <div className="absolute right-0 top-1 mt-1 w-54 origin-top-right">
        <div>
        <button type="button" onClick={Showfunction} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" >
            <img className="h-20 w-20  rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7b3ArkB7Oocsco2nxglnEoCAupiepqWfpmQ&s" alt=""/>
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open user menu</span>
        </button>
        </div>
        {isShown && (
             <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
           </div>
        )}
       
        </div>
        
        
        
     </nav>
     </div>
     
    )
}
export default Navigation