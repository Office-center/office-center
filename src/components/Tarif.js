import React, { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import {AiOutlineArrowDown} from "react-icons/ai"
import styled from "styled-components";
import TarifList from "./TarifList";

const allData = [
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
        list: ["Une Adresse en plein centre de Lille (rue Faidherbe)", "Une boite aux lettres", "La mise à disposition du courrier"],
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
        <div className='flex items-center py-10 flex-col mt-12' id='tarif'>
            <h1 className="bg-black-500 pb-4 text-center font-bold text-3xl text-gray-900">Nos tarifs</h1>
            <div className="grid md:grid-cols-2 gap-10 px-28 py-12 rounded-xl justify-center items-center">
                <div className="flex flex-col justify-center items-center w-12/12">
                    <button onClick={function(event){ handleClick(event); list(0);}} key={1} id="1" className={active === "1" ? "flex w-11/12 px-7 py-4 bg-secondaire text-white rounded-xl" : "flex w-11/12 px-7 py-4 bg-white text-secondaire rounded-xl hover:bg-secondaire hover:text-white"}>
                        <div className="flex flex-row justify-between w-full">
                            <h1 className="text-left">Domiciliation simple</h1>
                            <h1 className="text-grey-900">25€ HT /mois</h1>
                        </div>
                    </button>

                    <button onClick={function(event){ handleClick(event); list(1);}} key={2} id="2" className={active === "2" ? "flex w-11/12 px-7 py-4 bg-secondaire text-white rounded-xl" : "flex w-11/12 px-7 py-4 bg-white text-secondaire rounded-xl hover:bg-secondaire hover:text-white"}>
                        <div className="flex flex-row justify-between w-full">
                            <h1 className="text-left">Domiciliation avec réexpédition</h1>
                            <h1 className="text-grey-900">30€ HT /mois</h1>
                        </div>
                    </button>

                    <button onClick={function(event){ handleClick(event); list(2);}} key={3} id="3" className={active === "3" ? "flex w-11/12 px-7 py-4 bg-secondaire text-white rounded-xl" : "flex w-11/12 px-7 py-4 bg-white text-secondaire rounded-xl hover:bg-secondaire hover:text-white"}>
                        <div className="flex flex-row justify-between w-full">
                            <h1 className="text-left">Domiciliation avec retranscription</h1>
                            <h1 className="text-grey-900">35€ HT /mois</h1>
                        </div>
                    </button>

                    <button onClick={function(event){ handleClick(event); list(3);}} key={4} id="4" className={active === "4" ? "flex w-11/12 px-7 py-4 bg-secondaire text-white rounded-xl" : "flex w-11/12 px-7 py-4 bg-white text-secondaire rounded-xl hover:bg-secondaire hover:text-white"}>
                        <div className="flex flex-row justify-between w-full">
                            <h1 className="text-left">0ption</h1>
                            <h1 className="text-grey-900">5€ HT /mois</h1>
                        </div>
                    </button>
                </div>
                <TarifList data={data} />
            </div>
            <div className="flex justify-center flex-col text-white p-4 rounded-xl items-center">
                <h1 className="text-principal">Contactez-nous</h1>
                <AiOutlineArrowDown size={20} className="text-principal"/>
            </div>
        </div>
    );
}
export default Tarif;