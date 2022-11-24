import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRef, useEffect } from "react";
import Accueil from "./components/reparation/AccueilPromo";

const Promo = () => {
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  const handleResize = () => {
    if (!headerRef.current || !mainRef.current || !footerRef.current) return;
    mainRef.current.style.minHeight = `${
      window.innerHeight -
      headerRef.current.offsetHeight -
      footerRef.current.offsetHeight
    }px`;
    mainRef.current.style.marginTop = `${headerRef.current.offsetHeight}px`;
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#717579]">
      <Header myRef={headerRef} bgDark />
      <main ref={mainRef}>
        <Accueil />
      </main>
      <Footer myRef={footerRef} bgDark />
    </div>
  );
};

export default Promo;
