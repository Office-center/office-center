import React from "react";
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'

const Vision = () => {
    return (
        <section aria-label="section comprenant différents tarifs liés à la domiciliation" className="flex flex-col justify-center items-center bg-accueil py-12">
            <h2 className="bg-black-500 pb-4 text-center font-bold text-3xl">Quelle est notre vision chez WorkUnion?</h2>
            <p className="max-w-[800px] pb-10 w-auto text-black text-center sm:px-5 text-sm">
                WorkUnion est une société nouvelle qui développe un concept original de centre d'affaires associant la domiciliation d'entreprise, la location de bureaux et le coworking dans un cadre de partage d'expérience et avec un rapport coût/service lowcost.
                WorkUnion a pour objectif d'accompagner l'entreprise à sa création et durant les différentes étapes de son développement .
            </p>
            <h3 className="text-secondaire pb-12 text-center text-base px-[10px]">Les moyens WorkUnion mis à la disposition de ses adhérents sont les suivants :</h3>

            <div className="grid md:grid-cols-3 gap-10  p-4">
                <div className="max-w-sm overflow-hidden shadow-lg shadow-slate-400 rounded-[10px] bg-white">
                    <img className="object-cover h-48 w-96 bg-principal" src={image1} alt="Grand Place de Lille" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-base mb-2 text-center">
                            Un emplacement au cœur de Lille :
                        </div>
                        <ul className="list-disc text-sm list-inside text-left">
                            <li>16-18 rue Faidherbe - 59000 LILLE</li>
                            <li>250 mètres de la gare Lille Flandres, du métro et des bus</li>
                            <li>600 mètres de la gare Lille Europe</li>
                            <li>30 minutes approximatives de tous les centres économiques de l'Agglomération lilloise</li>

                        </ul>
                    </div>
                </div>
                <div className="max-w-sm overflow-hidden shadow-lg shadow-slate-400 rounded-[10px] bg-white">
                    <img className="object-cover h-48 w-96 bg-principal" src={image2} alt="Thématique bureaux" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-base mb-2 text-center">
                            400 M² de bureaux comprenant :
                        </div>
                        <ul className="list-disc text-sm list-inside text-left">
                            <li>12 bureaux de 6 à 15M²</li>
                            <li>2 salles de réunion</li>
                            <li>Un open space de coworking</li>
                            <li>Une salle de visio conférence toute équipée</li>
                            <li>Un équipement Internet fibre</li>
                            <li>A votre disposition, boissons fraîches et machine à café</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-sm overflow-hidden shadow-lg shadow-slate-400 rounded-[10px] bg-white">
                    <img className="object-cover h-48 w-96 bg-principal" src={image3} alt="Groupe durant un moment de coworking" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-base mb-2 text-center">
                            Une équipe à votre disposition comprenant :
                        </div>
                        <ul className="list-disc text-sm list-inside text-left">
                            <li>Un manager de centre</li>
                            <li>Un(e) assistant(e) à l'écoute de vos besoins</li>
                            <li id="tarif">Un(e) assistant(e) Web Marketing pouvant vous accompagner dans toutes vos approches informatiques et web.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision;