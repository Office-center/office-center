import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Accueil from './components/Accueil';
import logo from './assets/terre.jpg';
import Specialites from './components/Specialites';
import Vision from './components/Vision';
import Tarif from './components/Tarif';
import Contact from './components/Contact';
import { MetaTags } from 'react-meta-tags';

function App() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  window.addEventListener('mouseup', function (e) {
    var box = document.getElementById('sidebar');
    if (nav == true && e.target != box && e.target.parentNode != box) {
      setNav(false);
    }
  });

  return (
    <BrowserRouter>
      <div>
        <header aria-label='barre de navigation' className='z-50 w-full py-2 flex justify-between fixed bg-principal h-auto p-8 md:px-44'>

          <div class="flex justify-start items-center">
            <Link to="/" className="pr-4">
              <img src={logo} alt="cette image représente le logo de l'agence WorkUnion" className="sm:mr-12 md:mr-2 h-24 w-24 rounded-full" />
            </Link>
            <h4 className='text-white text-2xl'>Work Union</h4>
          </div>

          <ul className='hidden md:flex items-center'>
            <Link to="#accueil" className='p-4 font-light cursor-pointer hover:text-secondaire duration-300 text-white' smooth>Accueil</Link>
            <Link to="#specialites" className='p-4 font-light cursor-pointer hover:text-secondaire duration-300 text-white' smooth>Spécialités</Link>
            <Link to="#vision" className='p-4 font-light cursor-pointer hover:text-secondaire duration-300 text-white' smooth>Vision</Link>
            <Link to="#tarif" className='p-4 font-light cursor-pointer hover:text-secondaire duration-300 text-white' smooth>Tarifs</Link>
            <Link to="#contact" className='p-4 font-light cursor-pointer hover:text-secondaire duration-300 text-white' smooth>Contact</Link>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer p-4 flex flex-row items-center justify-end'>
              {nav ? <AiOutlineClose size={20}  className="text-white"/> : <AiOutlineMenu size={20} className="text-white"/>}
          </div>
          <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bor der-r-gray-100 bg-white ease-in-out duration-300' : 'ease-in-out duration-300 fixed left-[-100%] top-[-10%]'} id="sidebar">
            <div className='flex flex-col'>
              <Link to="#accueil" className='p-4 border-b border-gray-300 cursor-pointer hover:text-secondaire duration-300' smooth>Accueil</Link>
              <Link to="#specialites" className='p-4 border-b border-gray-300 cursor-pointer hover:text-secondaire duration-300' smooth>Spécialités</Link>
              <Link to="#vision" className='p-4 border-b border-gray-300 cursor-pointer hover:text-secondaire duration-300' smooth>Vision</Link>
              <Link to="#tarif" className='p-4 border-b border-gray-300 cursor-pointer hover:text-secondaire duration-300' smooth>Tarifs</Link>
              <Link to="#contact" className='p-4 border-b border-gray-300 cursor-pointer hover:text-secondaire duration-300' smooth>Contact</Link> 
            </div>
          </ul>
        </header>
        <Accueil />
        <Specialites />
        <Vision />
        <Tarif />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;