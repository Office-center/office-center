
import React from "react";
import { ImOffice } from 'react-icons/im';
import { MdLocalPostOffice } from 'react-icons/md';


const Specialites = () => {
    return (
        <div className="h-auto px-4 text-black sm:py-28 flex justify-center items-center mt-[-13rem] overflow-hidden" id="specialites">
            <div className="h-auto bg-white grid md:grid-cols-3 rounded-[30px] drop-shadow-xl w-3/4">
                <div className="border-gray-300 md:border-r-2 md:items-center md:justify-center flex -flex-col p-8">
                    <h1 className="text-sm text-center font-bold text-secondaire">NOS SPÉCIALITÉS</h1>
                </div>
                <div className="md:border-r-2  border-gray-300 bg-white">
                    <div className="flex flex-row h-auto w-auto justify-around p-4 items-start">
                        <div className="flex flex-col h-auto justify-start p-4"> <ImOffice size={45} style={{color: "#5FAEC4"}} /> </div>
                        <div className="flex flex-col p-4">
                            <h1 className="text-sm font-bold pb-4 text-center">LOCATION DE BUREAUX ET SALLES DE REUNION </h1>
                            <p className="text-xs text-center" style={{color: "#9FA4AD"}}>Besoin de locaux pour un séminaire, une campagne de recrutement ou des réunions en tout type ? Avec Office Center, louez des espaces de travail au cœur de Lille accessibles à tous les budgets !</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-auto w-auto justify-around p-4 items-start">
                    <div className="flex flex-col h-auto justify-start p-4"> <MdLocalPostOffice size={45} style={{color: "#5FAEC4"}}/> </div>
                    <div className="flex flex-col p-4" id="vision">
                        <h1 className="text-sm font-bold pb-4 text-center">DOMICILIATION SOCIALE ET COMMERCIALE​</h1>
                        <p className="text-xs text-center" style={{color: "#9FA4AD"}}>Situé à deux pas de la gare Lille Flandres et de la Grand Place de Lille, offrez à votre entreprise une adresse exceptionnelle !</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialites;
