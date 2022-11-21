import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from './assets/terre.jpg';
import Specialites from './components/Specialites';
import Vision from './components/Vision';
import Tarif from './components/Tarif';
import Contact from './components/Contact';
import video from './assets/back.mp4';
import Footer from './components/Footer';
import Promo from './components/Promo';

function App() {

  /* 0F4F49
     63D471
     4E7D55 */
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

   window.addEventListener('mouseup', function (e) {
     var box = document.getElementById('sidebar');
     if (nav === true && e.target !== box && e.target.parentNode !== box) {
       setNav(false);
     }
   });

  const handleResize = () => {
    if (window.innerWidth < 1050) return
    setNav(false);

    // else here
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <header aria-label='barre de navigation' className='z-50 w-full py-2 flex justify-between fixed h-auto p-8 md:px-44 bg-secondairecard/75'>

          <div className="flex justify-start items-center">
            <Link to="/" className="pr-4">
              <img src={logo} alt="représentation du logo de l'agence WorkUnion" className="sm:h-10 sm:w-10 md:h-[70px] md:w-[70px] rounded-full" />
            </Link>
          </div>

          <ul className='hidden md:flex items-center text-[16px]'>
            <Link to="#accueil" className='p-4 font-light cursor-pointer hover:text-secondaire duration-300 text-black' smooth>Accueil</Link>
            <Link to="#vision" className='p-4 font-light cursor-pointer hover:text-secondaire duration-300 text-black' smooth>Vision</Link>
            <Link to="#tarif" className='p-4 font-light cursor-pointer hover:text-secondaire duration-300 text-black' smooth>Tarifs</Link>
            <Link to="#contact" className='p-4 font-light cursor-pointer hover:text-secondaire duration-300 text-black' smooth>Contact</Link>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer p-4 flex flex-row items-center justify-end'>
              {nav ? <AiOutlineClose size={20}  className="text-white"/> : <AiOutlineMenu size={20} className="text-white"/>}
          </div>
          <div className={nav ? 'fixed left-0 top-[68px] w-[100%] h-full der-r-gray-100 ease-in-out duration-300' : 'ease-in-out duration-300 fixed left-[-100%] top-[68px]'} id="sidebar">
            <div className='flex flex-col text-[16px] bg-secondairecard/75'>
              <Link to="#accueil" className='p-4 border-b border-gray-300 cursor-pointer hover:text-secondaire duration-300 text-black' smooth>Accueil</Link>
              <Link to="#vision" className='p-4 border-b border-gray-300 cursor-pointer hover:text-secondaire duration-300 text-black' smooth>Vision</Link>
              <Link to="#tarif" className='p-4 border-b border-gray-300 cursor-pointer hover:text-secondaire duration-300 text-black' smooth>Tarifs</Link>
              <Link to="#contact" className='p-4 border-b border-gray-300 cursor-pointer hover:text-secondaire duration-300 text-black' smooth>Contact</Link> 
            </div>
          </div>
        </header>
        <div className='main'>
          <div className='flex justify-center items-center'>
            <video alt="Gare Lille Flandres, Grand Place de Lille" src={video} autoPlay loop muted className="w-[100vw] h-auto max-h-[75vh] min-h-[400px] object-cover blur-[0.2rem]" id='accueil' />
            <h1 className="bg-secondairecard/70 absolute text-sm text-black text-center flex flex-col gap-y-[16px] p-4 rounded-md"><span className="text-[30px] title-bold">WORKUNION</span> <span>COWORKING - DOMICILIATION - LOCATION</span></h1>
          </div>
          <Specialites />
          <Vision />
          <Tarif />
          <Promo />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;