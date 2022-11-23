import Header from "./Header";
import Footer from "./Footer";
import { useRef, useEffect } from "react";
import error from "../assets/error.png";

const Error = () => {
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
    <>
      <Header myRef={headerRef} />
      <main
        ref={mainRef}
        className="grid grid-cols-2 flex text-center justify-center items-center"
      >
        <div>
          <img
            src={error}
            alt="Etoile noir de la saga star wars pour représenté une erreur sur la page"
            className=""
          />
        </div>
        <div>
          <p className="text-[18px]">
            Aïe, il semblerait que la force ait quitté cette page
          </p>
          <a href="/">
            <button className="p-[6px] italic text-[16px] hover:text-white btn-error">
              Retour du côté lumineux de la force ...
            </button>
          </a>
        </div>
      </main>
      <Footer myRef={footerRef} />
    </>
  );
};

export default Error;
