import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { BsFillEnvelopeFill, BsCalculatorFill } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";

const Specialites = () => {
  const cards = [
    {
      id: 0,
      icon: <RiTeamFill size={45} />,
      title: "ESPACE DE COWORKING",
      text: "Situé à deux pas de la gare Lille Flandres et de la Grand Place de Lille, vous pourrez travailler ensemble sur des projets communs",
    },
    {
      id: 1,
      icon: <BiBuildingHouse size={45} />,
      title: "MISE À DISPOSITION DE BUREAUX",
      text: "Situé à deux pas de la gare Lille Flandres et de la Grand Place de Lille, offrez à votre entreprise une adresse exceptionnelle",
    },
    {
      id: 2,
      icon: <BsFillEnvelopeFill size={45} />,
      title: "DOMICILIATION SOCIALE ET COMMERCIALE",
      text: "Offrez à votre entreprise une adresse exceptionnelle à laquelle faire parvenir votre courrier",
    },
    {
      id: 3,
      icon: <BsCalculatorFill size={45} />,
      title: "OFFRE DE GESTION D'ENTREPRISE POUR TIERS",
      text: "Nous vous proposons de gérer toute la partie backoffice administrative et/ou commerciale des entreprises",
    },
  ];

  return (
    <div
      className="h-auto px-4 text-black sm:py-12 flex justify-center items-center overflow-hidden"
      id="specialites"
    >
      <div className="h-auto bg-white grid md:grid-cols-4 rounded-[10px] drop-shadow-xl ms:w-9/10 w-full overflow-hidden">
        {cards.map(({ id, icon, title, text }) => (
          <div
            key={id}
            className="flex flex-row h-auto w-auto p-4 items-start md:border-r-2 border-gray-300 bg-white card-item"
          >
            <div className="flex flex-col h-auto justify-start p-2 card-spe">
              {icon}
            </div>
            <div className="flex flex-col p-4 text-left">
              <h2 className="text-sm pb-4 text-secondaire">{title}</h2>
              <p className="text-xs text-secondairecard">{text}</p>
            </div>
          </div>
        ))}
        <p id="vision"></p>
      </div>
    </div>
  );
};

export default Specialites;
