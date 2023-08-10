import { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-scroll';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');

  const activeStateHandler = (link) => {
    setActive(link);
  };

  return (
    <nav className='flex justify-between  w-full py-2 bg-cyan-blue fixed px-2 z-10'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <img src={logo} alt='logo' className='object-contain' />

        <ul className='list-non hidden sm:flex flex-row gap-10 text-2xl h-full items-center'>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset based on your design
              duration={500} // Scroll duration in milliseconds
              className={`${
                active === link.title ? 'text-teal' : 'text-aqua'
              } h-full flex items-center border-b-2 border-transparent hover:border-teal hover:text-teal hover:animate-bounce  hover:transition-all ease-in-out cursor-pointer`}
              onClick={() => activeStateHandler(link.title)}
            >
              {link.title}
            </Link>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-turquoise`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4 '>
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this offset based on your design
                  duration={500} // Scroll duration in milliseconds
                  className={`${
                    active === link.title ? 'text-pink' : 'text-aqua'
                  } h-full flex items-center border-b-2 border-transparent `}
                  onClick={() => {
                    setToggle(!toggle);
                    activeStateHandler(link.title);
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
