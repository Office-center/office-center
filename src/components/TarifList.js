import React, { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import Slider from "./Slider";

const TarifList = ({ data }) => {

    console.log(data.title)

    return (
        <div className="md:divide-x-2 text-center border-solid border-2 border-cardcolor rounded-2xl py-4 ">
            <h2 className="pb-8 text-secondaire">En choisissant ce service vous obtenez:</h2>
            <h3 className="mb-10 font-bold text-lg">{data.title}</h3>
            {data.list.length === 0 ?
                <p className="">Pour 5€ HT/mois, en complément d'une des formules de domiciliation présentées ci-dessus, obtenez 1/2 journée par mois de mise à disposition d'un bureau équipé spécialisé (sur prise de rendez-vous).</p>
                :
                <ul className="list-disc text-base list-inside text-left text-grey-900 p-4">
                    <li className="pb-4">{data.list[0]}</li>
                    <li className="pb-4">{data.list[1]}</li>
                    <li className="pb-4">{data.list[2]}</li>
                </ul>
            }
        </div>
    )
}

export default TarifList;