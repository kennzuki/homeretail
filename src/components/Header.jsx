import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }


  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About' },
    { path: '/properties', link: 'Properties' },
    { path: '/blogs', link: 'Blogs' },
    
    // Add more items as needed
  ];
 
  return (
    <header className='bg-orange-500 text-white'>
      <nav className='p-4 flex justify-between gap-6 place-items-center max-w-7xl mx-auto'>
        <a href='' className='text-3xl text-white font-bold uppercase'>
          Kenki Estate
        </a>
        {/* nav links */}
        <ul className='md:flex place-items-center gap-12 text-lg hidden'>
                  {navItems.map(({ path, link }) => (
                      <li className="text-white" key={path}>
                          
              {link}
            
              </li>
            
                  ))}
                  {/* button */}
          <button className="border-2 border-white py-2 px-4 rounded-xl flex gap-2 place-items-center">Contacts <FaArrowRight /></button>
         
              </ul>
              {/* small screen */}
              <div className="">
          <button onClick={toggleMenu} className="cursor-pointer md:hidden">
            {isOpen ? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5"/> }
           </button>
        </div>
        
      </nav>
      {/* mobile menu */}
      <div className="text-black">
          <ul className={`md:hidden block text-lg space-y-4 px-4 py-6 mt-14 bg-white ${isOpen?'fixed top-0 left-0 w-full transition-all ease-out duration-100':'hidden'}`}>
          {navItems.map(({ path, link }) => (
                      <li className="text-black" key={path}>
                          
              {link}
          
              </li>
            
          ))}
          </ul>
       
          </div>
          
    </header>
  );
};

export default Navbar;