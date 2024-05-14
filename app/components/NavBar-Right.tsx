import React from 'react'
import Link from 'next/link';
export default function NavBar_Right() {
    const pages = [
        { name: "about",herf:'#' },
        { name: "Referenc",herf:'#' },
        { name: "Docs" ,herf:"#"}
    ];
  return (
    <div className='nav-bar-rigth'>
      <nav className=" border-r  w-1/4 bg-transparent flex 
      j flex-col  h-500">
      
        {pages.map(_item=><Link
         href={'#'} 
         key={_item.name}
         className="text-zinc-400 hover:text-zinc-950  mb-3 "
         >
            
        {_item.name}
        </Link>)}
        
      
      </nav>
    </div>
  );
}

const NavLink =()=>{}