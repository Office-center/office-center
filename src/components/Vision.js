import React from "react";
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'

const Vision = () => {

    const cards = [
        {
            id : 0,
            imgSrc: image1,
            imgAlt: "Grand place de Lille",
            title : "Un emplacement au cœur de Lille",
            list: [
                "16-18 rue Faidherbe - 59000 LILLE",
                "250 mètres de la gare Lille Flandres, du métro et des bus",
                "600 mètres de la gare Lille Europe",
                "30 minutes approximatives de tous les centres économiques de l'Agglomération lilloise"
            ]
        },
        {
            id : 1,
            imgSrc: image2,
            imgAlt: "Thématique bureaux",
            title : "400 M² de bureaux comprenant :",
            list: [
                "12 bureaux de 6 à 15M²",
                "2 salles de réunion",
                "Un open space de coworking",
                "Une salle de visio conférence toute équipée",
                "Un équipement Internet fibre",
                "A votre disposition, boissons fraîches et machine à café"
            ]
        },
        {
            id : 2,
            imgSrc: image3,
            imgAlt: "Groupe durant un moment de coworking",
            title : "Une équipe à votre disposition comprenant :",
            list: [
                "Un manager de centre",
                "Un(e) assistant(e) à l'écoute de vos besoins",
                "Un(e) assistant(e) Web Marketing pouvant vous accompagner dans toutes vos approches informatiques et web."
            ]
        }
    ]

    return (
        <section aria-label="section comprenant différents tarifs liés à la domiciliation" className="flex flex-col justify-center items-center bg-secondaire py-12">
            <h2 className="bg-black-500 pb-4 text-center font-bold text-3xl text-white">Quelle est notre vision chez WorkUnion?</h2>
            <p className="max-w-[800px] pb-10 w-auto text-white text-center sm:px-5 text-sm">
                WorkUnion est une société nouvelle qui développe un concept original de centre d'affaires associant la domiciliation d'entreprise, la location de bureaux et le coworking dans un cadre de partage d'expérience et avec un rapport coût/service lowcost.
                WorkUnion a pour objectif d'accompagner l'entreprise à sa création et durant les différentes étapes de son développement .
            </p>
            <h3 className="text-secondaire pb-12 text-center text-principal px-[10px]">Les moyens WorkUnion mis à la disposition de ses adhérents sont les suivants :</h3>

            <div className="grid md:grid-cols-3 gap-10  p-4">
                {cards.map(({id, imgSrc, imgAlt, title, list })=>
                <div className="max-w-sm overflow-hidden shadow-lg shadow-slate-400 shadow-principal rounded-[10px] bg-white" key={id}>
                    <img className="object-cover h-48 w-96 bg-principal" src={imgSrc} alt={imgAlt} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-base mb-2 text-center">
                            {title}
                        </div>
                        <ul className="list-disc text-sm list-outside text-left">
                            {list.map((item, index) => 
                            <li key={index} className="">{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
                )}
            </div>
        </section>
    )
}

export default Vision;