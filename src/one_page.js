import Specialites from "./components/Specialites";
import Vision from "./components/Vision";
import Tarif from "./components/Tarif";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promo from "./components/Promo";
import VidPres from "./components/vidPres";

const one_page = () => {
  return (
    <>
      <Header />
      <main>
        <VidPres />
        <Specialites />
        <Vision />
        <Tarif />
        <Promo />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default one_page;
