import Specialites from "./components/racine/Specialites";
import Vision from "./components/racine/Vision";
import Tarif from "./components/racine/Tarif";
import Contact from "./components/racine/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promo from "./components/racine/Promo";
import VidPres from "./components/racine/vidPres";
import OtherEnt from "./components/racine/OtherEnt";

const one_page = () => {
  return (
    <>
      <Header />
      <main>
        <VidPres />
        <Specialites />
        <Vision />
        <Tarif />
        <OtherEnt />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default one_page;
