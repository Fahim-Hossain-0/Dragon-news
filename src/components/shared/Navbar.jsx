import Link from 'next/link';
import React from 'react';
import userImage from "../../../public/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
const Navbar = () => {
    const links=<>
    <li><NavLink href={'/'}>Home</NavLink></li>
    <li><NavLink href={'/about'}>About</NavLink></li>
    <li><NavLink href={'/career'}>Career</NavLink></li>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    
  </div>
  <div className="navbar-center">
   <ul
        tabIndex={-1}
        className="flex gap-4 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-red-400">
        {links}
      </ul>
  </div>
  <div className="navbar-end">
     <div className="">
    
    <div className="flex gap-2">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         <Image src={userImage}
         width={200}
         height={200}></Image>
        </div>
      </div>
     <button>Login</button>
    </div>
  </div>
  </div>
</div>
    );
};

export default Navbar;