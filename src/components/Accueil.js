import React from "react";
import Lille from '../assets/city.png'

const Accueil = () => {
    return (
        <div className="h-screen mx-auto px-12 text-white sm:py-28 bg-principal" id="accueil">
            <div className="max-w-[1040px] h-full grid md:grid-cols-2 gap-x-5 w-full mx-auto content-center">
                <div className="bg-transparent flex flex-col justify-center md:items-start items-center">
                    <h1 className="text-secondaire pb-4">Rejoignez nous !</h1>
                    <h1 className="font-bold text-5xl pb-10 text-white text-justify">Office center      </h1>
                    <p className="pb-10 w-full text-white">
                        Eiusmod magna labore elit nisi fugiat sunt duis tempor incididunt mollit pariatur ad. Fugiat aliquip in velit cillum quis irure ex consectetur labore. Ex ipsum consectetur excepteur cillum laborum qui sit qui ea non cupidatat esse. Duis voluptate non nisi fugiat magna labore eiusmod veniam. Duis nisi proident velit ut magna ea do excepteur ex ex ad quis exercitation laborum.
                    </p>
                </div>
                <div className="flex md:justify-end sm:justify-center sm:py">
                    <img className="object-contain w-3/4" src={Lille} />
                </div>
            </div>
        </div>
    )
}

export default Accueil;