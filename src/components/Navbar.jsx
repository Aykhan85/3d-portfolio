import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close, CV } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:44.625rem)');

    setIsHidden(mediaQuery.matches)

    const handleChange = (event) => {
      setIsHidden(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <nav
      className={
        `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`
      }
    >
      <div
        className='w-full flex justify-between items-center max-w-7xl mx-auto'
      >
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0)
          }} >
          <img src={logo} alt="logo"
            className='w-9 h-9 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer sm:block hidden'>Aykhan</p>
        </Link>
        <ul className={`list-none flex ${isHidden && 'hidden'} flex-row gap-10 items-center`}>
          <li><a download href={CV} className='w-max inline-block bg-[#915eff] text-[18px]  py-[0.4rem] font-medium rounded-lg px-[1rem]  border-[2px] border-solid hover:border-[#915eff] hover:bg-[white] hover:text-[#915eff]'>Download CV</a></li>
          {navLinks.map(link => (
            <li key={link.id}
              className={`${active === link.title
                ? 'text-white'
                : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)} >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className={` ${isHidden ? 'flex' : 'hidden'} flex-1 justify-end items-center`}>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[8.75rem] z-10 rounded-xl`}>
            <ul className='list-none flex  flex-col justify-end items-start gap-4'>
              <li>
                <a download href={CV} className='w-max inline-block font-poppins text-secondary  text-[1rem] font-medium cursor-pointer'>Download CV</a>
              </li>
              {navLinks.map(link => (
                <li key={link.id}
                  className={`${active === link.title
                    ? 'text-white'
                    : 'text-secondary'
                    } font-poppins text-[1rem] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar