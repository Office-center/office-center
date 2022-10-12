import React from "react";
import Lille from '../assets/city.png'
import Carousel from "./Carousel";

const Accueil = () => {
    return (
        <div className="w-screen bg-accueil">
            <div className="h-auto mx-auto px-12 text-white sm:pt-28 justify-center items-center max-w-[1500px]" id="accueil">
                <div className="flex flex-col justify-center rounded-lg p-10">
                    {/* <div className="flex justify-center flex-col items-center">
                        <h1 className="text-secondaire pb-4">Rejoignez nous !</h1>
                        <h1 className="font-bold text-5xl pb-10 text-gray-900 text-center">Office center</h1>
                    </div> */}
                    <div className="flex flex-col justify-start items-start w-full sm:pb-10">
                        {/* <div className="md:w-3/12 md:z-10 md:ml-[-8rem]"> */}
                        <div className="flex justify-center flex-col items-center md:z-10 bg-office p-4 rounded-2xl  md:ml-[-8rem]">
                            <h1 className="text-secondaire pb-4">Rejoignez nous !</h1>
                            <h1 className="font-bold text-5xl pb-10 text-white text-center">Work Union</h1>
                        </div>
                    </div>
                    <div className="flex justify-end md:mt-[-9rem]">
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accueil;