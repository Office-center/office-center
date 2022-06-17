import React from "react";
import Lille from '../assets/city.png'
import Carousel from "./Carousel";

const Accueil = () => {
    return (
        <div className="w-screen bg-accueil">
            <div className="h-auto mx-auto px-12 text-white sm:pt-28 justify-center items-center max-w-[1500px]" id="accueil">
                {/* <div className="max-w-[1040px] h-full grid md:grid-cols-2 gap-x-5 w-full mx-auto content-center"> */}
                {/* <div className="max-w-[1040px] h-full grid md:grid-cols-2 gap-x-5 w-full mx-auto content-center">
                    <div className="bg-transparent flex flex-col justify-center md:items-start items-center">
                        <h1 className="text-secondaire pb-4">Rejoignez nous !</h1>
                        <h1 className="font-bold text-5xl pb-10 text-white text-justify">Office center</h1>
                        <p className="pb-10 w-full text-white">
                            Eiusmod magna labore elit nisi fugiat sunt duis tempor incididunt mollit pariatur ad. Fugiat aliquip in velit cillum quis irure ex consectetur labore. Ex ipsum consectetur excepteur cillum laborum qui sit qui ea non cupidatat esse. Duis voluptate non nisi fugiat magna labore eiusmod veniam. Duis nisi proident velit ut magna ea do excepteur ex ex ad quis exercitation laborum.
                        </p>
                    </div>
                    <div className="flex md:justify-end sm:justify-center sm:py">
                        <img className="object-contain w-3/4" src={Lille} />
                    </div>
                </div> */}

                {/* <div className="max-w-[1040px] h-full w-full mx-auto content-center">
                    <div className="bg-transparent flex flex-col justify-center items-center">
                        <h1 className="text-secondaire pb-4">Rejoignez nous !</h1>
                        <h1 className="font-bold text-5xl pb-10 text-white text-justify">Office center</h1>
                        <p className="pb-10 w-full text-white">
                            Eiusmod magna labore elit nisi fugiat sunt duis tempor incididunt mollit pariatur ad. Fugiat aliquip in velit cillum quis irure ex consectetur labore. Ex ipsum consectetur excepteur cillum laborum qui sit qui ea non cupidatat esse. Duis voluptate non nisi fugiat magna labore eiusmod veniam. Duis nisi proident velit ut magna ea do excepteur ex ex ad quis exercitation laborum.
                        </p>
                    </div> */}
                <div className="flex flex-col justify-center rounded-lg p-10">
                    <div className="flex justify-center flex-col items-center">
                        <h1 className="text-secondaire pb-4">Rejoignez nous !</h1>
                        <h1 className="font-bold text-5xl pb-10 text-gray-900 text-center">Office center</h1>
                    </div>
                    {/* <div className="flex flex-row justify-center items-center md:max-w-[600px] sm:pb-10"> */}
                    <div className="flex flex-col justify-start items-start w-full sm:pb-10">
                        <div className="md:w-6/12 md:z-10">
                            <p className="p-10 w-full text-white text-center bg-office rounded-lg z-10">
                                Eiusmod magna labore elit nisi fugiat sunt duis tempor incididunt mollit pariatur ad. Fugiat aliquip in velit cillum quis irure ex consectetur labore. Ex ipsum consectetur excepteur cillum laborum qui sit qui ea non cupidatat esse. Duis voluptate non nisi fugiat magna labore eiusmod veniam. Duis nisi proident velit ut magna ea do excepteur ex ex ad quis exercitation laborum.
                            </p>
                            {/* <p className="p-10 w-full text-secondaire text-center bg-white rounded-lg z-10">
                                Eiusmod magna labore elit nisi fugiat sunt duis tempor incididunt mollit pariatur ad. Fugiat aliquip in velit cillum quis irure ex consectetur labore. Ex ipsum consectetur excepteur cillum laborum qui sit qui ea non cupidatat esse. Duis voluptate non nisi fugiat magna labore eiusmod veniam. Duis nisi proident velit ut magna ea do excepteur ex ex ad quis exercitation laborum.
                            </p> */}
                        </div>
                    </div>
                    <div className="flex justify-end md:mt-[-12rem]">
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accueil;