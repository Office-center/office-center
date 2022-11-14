import React, { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import Slider from "./Slider";

const TarifList = ({ data }) => {

    console.log(data.title)

    return (
        <div className="text-center rounded-2xl py-4 max-w-md max-h-fit card-tarif min-h-[60px]">
            <h2 className="pb-8 text-white mt-2">En choisissant ce service vous obtenez:</h2>
            <h3 className="mb-6 font-bold text-lg text-[1.6rem] text-white">{data.title}</h3>
            {data.list.length === 0 ?
                <p className="text-white">Pour 7.99€ HT/mois, en complément d'une des formules de domiciliation présentées ci-dessus, obtenez 1/2 journée de mise à disposition d'un bureau équipé spécialisé (sur prise de rendez-vous).</p>
                :
                <ul className="list-disc text-base list-inside text-left text-white px-4 py-2">
                    <li className="pb-3">{data.list[0]}</li>
                    <li className="pb-3">{data.list[1]}</li>
                    <li className="pb-3">{data.list[2]}</li>
                </ul>
            }
        </div>
    )
}

export default TarifList;