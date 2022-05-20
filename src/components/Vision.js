import React from "react";
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'


//md:grid-cols-3 sm:py-12

const Vision = () => {
    return (
        <div className="flex flex-col justify-center items-center py-12">
            <h1 className="bg-black-500 pb-4 text-center font-bold text-3xl">Quelle est notre Vision ?</h1>
            <p className="pb-10 w-auto text-black text-center px-28 text-sm">
                Office Center est une société nouvelle qui développe un concept original de centre d’affaires associant la domiciliation d’entreprise, la location de bureaux et le coworking dans un cadre de partage d’expérience et avec un rapport coût/service lowcost.
                Office Center a pour objectif d’accompagner l’entreprise à sa création et durant les différentes étapes de son développement .
            </p>
            <h1 className="text-secondaire pb-12 text-center text-base">Les moyens OFFICE CENTER mis à la disposition de ses adhérents sont les suivants :</h1>

            <div class="grid md:grid-cols-3 gap-10  p-4">
                <div class="max-w-sm overflow-hidden shadow-lg shadow-slate-400 rounded-[16px]">
                    <img className="object-contain h-48 w-96 bg-principal" src={image1} />
                    <div class="px-6 py-4">
                        <div class="font-bold text-base mb-2">
                            Un emplacement exceptionnel au cœur de Lille :
                        </div>
                        <ul className="list-disc text-sm">
                            <li>250 mètres de la gare Lille Flandres, du métro et des bus</li>
                            <li>600 mètres de la gare Lille Europe</li>
                            <li>30 minutes maximum de tous les centres économiques de l’Agglomération lilloise</li>
                            <li>35 minutes de Bruxelles</li>
                            <li>45 minutes Aéroport Paris Roissy-CDG</li>
                            <li>1h10 de Paris</li>
                            <li>1h30 de Londres</li>
                        </ul>
                    </div>
                </div>
                <div class="max-w-sm overflow-hidden shadow-lg shadow-slate-400 rounded-[16px]">
                    <img className="object-contain h-48 w-96 bg-principal" src={image2} />
                    <div class="px-6 py-4">
                        <div class="font-bold text-base mb-2">
                            400 M2 de bureaux comprenant :
                        </div>
                        <ul className="list-disc text-sm">
                            <li>12 bureaux de 6 à 15M2</li>
                            <li>2 salles de réunion</li>
                            <li>Un open space convivial de coworking</li>
                            <li>Un équipement Internet fibre et WIFI</li>
                            <li>Un espace convivialité avec salon, tables et chaises , équipement cuisine pour petite restauration , machine à café</li>
                        </ul>
                    </div>
                </div>
                <div class="max-w-sm overflow-hidden shadow-lg shadow-slate-400 rounded-[16px]">
                    <img className="object-contain h-48 w-96 bg-principal" src={image3} />
                    <div class="px-6 py-4">
                        <div class="font-bold text-base mb-2">
                            Une équipe à votre disposition comprenant :
                        </div>
                        <ul className="list-disc text-sm">
                            <li>Un Manager de centre</li>
                            <li>Une Assistante pouvant assurer toute votre charge administrative et commerciale</li>
                            <li>Un Assistant Web Marketing pouvant vous accompagner dans toute votre approche informatique et web.</li>
                            <li>Des traductions anglais</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision;