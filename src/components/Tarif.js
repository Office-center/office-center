import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const data = [
    {
        title: "Domiciliation simple",
        subtitle: "Le service de domiciliation simple que nous proposons comprends:",
        list: ["Une Adresse en plein centre de Lille (rue Faidherbe)", "Une boite aux lettres", "La mise à disposition du courrier"],
        prix: "Le tout pour 25€ HT/mois",
    },
    {
        title: "Domiciliation avec réexpédition",
        subtitle: "En choisissant le service de domiciliation avec réexpédition, vous obtenez: ",
        list: ["Une Adresse en plein centre de Lille (rue Faidherbe)", "Une boite aux lettres", "La réexpédition hebdomadaire du courrier par voie postale"],
        prix: "Forfait à 30€ HT/mois",
    },
    {
        title: "Domiciliation avec retranscription",
        subtitle: "Avec ce forfait sont compris les services suivants :",
        list: ["Une Adresse en plein centre de Lille (rue Faidherbe)", "Une boite aux lettres", "La retranscription par mail à réception du courrier"],
        prix: "Prix 35€ HT/mois",
    },
    {
        title: "Domiciliation simple",
        subtitle: "Le service de domiciliation simple que nous proposons comprends:",
        list: ["Une Adresse en plein centre de Lille (rue Faidherbe)", "Une boite aux lettres", "La mise à disposition du courrier"],
        prix: "Le tout pour 25€ HT/mois",
    },
];

const Tarif = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 575;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 575;
    };

    return (
        <div className='relative flex items-center py-20 scrollbar-hide bg-secondaire flex-col'>
            <h1 className="text-white text-2xl pb-4">Nos Tarifs</h1>
            <hr className="w-10 pb-12" />
            <div className="flex md:flex-row sm:flex-col items-center justify-center max-w-[740px]">
                <MdChevronLeft className='opacity-70 cursor-pointer hover:opacity-100 bg-principal rounded-full ml-12' onClick={slideLeft} size={40} style={{ color: "#ffffff" }} />
                <div id='slider' className='md:w-full md:h-full md:overflow-x-scroll sm:overflow-y-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {data.map((item) => (
                        <div className='w-full items-center justify-center inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 h-full'>
                            <h1 className="text-white text-center">{item.title}</h1>
                            <h1 className="text-white text-center pb-8">{item.subtitle}</h1>
                            <ul className='list-disc'>
                                <li className="text-white text-center">{item.list[0]}</li>
                                <li className="text-white text-center">{item.list[1]}</li>
                            </ul>
                            <p className="text-white text-center">{item.prix}</p>
                        </div>
                    ))}
                </div>
                <MdChevronRight className='opacity-70 cursor-pointer hover:opacity-100 bg-principal rounded-full mr-12' onClick={slideRight} size={40} style={{ color: "#ffffff" }} />
            </div>
        </div>
    );
}
export default Tarif;