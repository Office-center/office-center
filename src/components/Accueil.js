import React from "react";
import Lille from '../assets/city.png'
import Carousel from "./Carousel";

const Accueil = () => {
    return (
        <div className="w-screen bg-accueil">
            <div className="h-auto mx-auto px-12 text-white sm:pt-28 justify-center items-center max-w-[1550px]" id="accueil">
                <div className="flex flex-col justify-center rounded-lg mt-40">
                    <div className="flex justify-end md:mt-[-9rem]">
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accueil;