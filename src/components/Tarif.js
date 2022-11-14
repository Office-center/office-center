import React, { useState } from "react";
import {AiOutlineArrowDown} from "react-icons/ai"
import TarifList from "./TarifList";

const allData = [
    {
        title: "Domiciliation simple",
        subtitle: "Le service de domiciliation simple que nous proposons comprends:",
        list: ["Une adresse en plein centre de Lille (rue Faidherbe)", "Une boite aux lettres", "La mise à disposition du courrier"],
        prix: "Le tout pour 25€ HT/mois",
    },
    {
        title: "Domiciliation avec réexpédition",
        subtitle: "En choisissant le service de domiciliation avec réexpédition, vous obtenez: ",
        list: ["Une adresse en plein centre de Lille (rue Faidherbe)", "Une boite aux lettres", "La réexpédition hebdomadaire du courrier par voie postale"],
        prix: "Forfait à 30€ HT/mois",
    },
    {
        title: "Domiciliation avec retranscription",
        subtitle: "Avec ce forfait sont compris les services suivants :",
        list: ["Une adresse en plein centre de Lille (rue Faidherbe)", "Une boite aux lettres", "La retranscription par mail à réception du courrier"],
        prix: "Prix 35€ HT/mois",
    },
    {
        title: "",
        subtitle: "",
        list: [],
        prix: "",
    },
];

const Tarif = () => {

    const [data, setData] = useState({
        title: "Domiciliation",
        subtitle: "Le service de domiciliation simple que nous proposons comprends:",
        list: ["Une adresse en plein centre de Lille (rue Faidherbe)", "Une boite aux lettres", "La mise à disposition du courrier"],
        prix: "25€ HT/mois",
    })

    const [active, setActive] = useState("1");

    const list = (index) => {
        setData(allData[index])
    }

    const handleClick = (event) => {
        setActive(event.currentTarget.id);
    }

    return (
        <div className='flex items-center py-10 flex-col mt-12'>
            <h2 className="pb-4 text-center font-bold text-3xl text-gray-900">Nos tarifs</h2>
            <div className="grid md:grid-cols-2 gap-10 py-12 rounded-xl justify-center items-center">
                <div className="flex flex-col justify-center items-center w-12/12">
                    <button onClick={function(event){ handleClick(event); list(0);}} key={1} id="1" className={active === "1" ? "flex w-11/12 px-7 py-4 bg-secondaire text-white rounded-xl mb-2" : "flex w-11/12 px-7 py-4 bg-white text-secondaire rounded-xl hover:bg-secondaire hover:text-white mb-2"}>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="text-left">Domiciliation simple</h3>
                            <h3>35€ HT /mois</h3>
                        </div>
                    </button>

                    <button onClick={function(event){ handleClick(event); list(1);}} key={2} id="2" className={active === "2" ? "flex w-11/12 px-7 py-4 bg-secondaire text-white rounded-xl mb-2" : "flex w-11/12 px-7 py-4 bg-white text-secondaire rounded-xl hover:bg-secondaire hover:text-white mb-2"}>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="text-left">Domiciliation avec réexpédition</h3>
                            <h3>40€ HT /mois</h3>
                        </div>
                    </button>

                    <button onClick={function(event){ handleClick(event); list(2);}} key={3} id="3" className={active === "3" ? "flex w-11/12 px-7 py-4 bg-secondaire text-white rounded-xl mb-2" : "flex w-11/12 px-7 py-4 bg-white text-secondaire rounded-xl hover:bg-secondaire hover:text-white mb-2"}>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="text-left">Domiciliation avec retranscription</h3>
                            <h3>45€ HT /mois</h3>
                        </div>
                    </button>

                    <button onClick={function(event){ handleClick(event); list(3);}} key={4} id="4" className={active === "4" ? "flex w-11/12 px-7 py-4 bg-secondaire text-white rounded-xl" : "flex w-11/12 px-7 py-4 bg-white text-secondaire rounded-xl hover:bg-secondaire hover:text-white"}>
                        <div className="flex flex-row justify-between w-full">
                            <h3 className="text-left">Option</h3>
                            <h3>7.99€ HT /mois</h3>
                        </div>
                    </button>
                </div>
                <TarifList data={data} />
            </div>
            <div className="flex justify-center flex-col text-white p-4 rounded-xl items-center animate-bounce">
                <a href="#contact" className="flex items-center flex-col">
                <h4 className="text-principal">Contactez-nous</h4>
                <AiOutlineArrowDown size={20} className="text-principal"/>
                </a>
            </div>
        </div>
    );
}
export default Tarif;