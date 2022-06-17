import React from "react";

const Contact = () => {
    return (
        <div className="bg-accueil h-auto w-full py-12  bg-contact bg-cover bg-center" id="contact">
            <div className="grid md:grid-cols-2 gap-8 w-full mx-auto">
                <div className="flex justify-center items-center">
                    {/* <h1>Contact Office center</h1> */}
                </div>
                <div className="rounded-xl w-full flex justify-center mx-auto">
                    <form className="p-10 w-9/12 bg-white rounded-2xl shadow-lg">
                        <h1 className="font-bold text-3xl p-4 text-center text-gray-500">Envoyer un message</h1>
                        <div className="flex flex-col p-3">
                            <input className="h-10 p-4 text-sm font-light placeholder-gray-500 outline-none border-b-2 border-gray-200 focus:border-secondaire" placeholder="Nom" type="text" name="Prenom" />
                            {/* <p className="text-red-500 text-xs ml-4 mt-1">name</p> */}
                        </div>
                        <div className="flex flex-col p-3">
                            <input className="h-10 p-4 text-sm font-light placeholder-gray-500 outline-none border-b-2 border-gray-200 focus:border-secondaire" placeholder="Email" type="text" name="Nom" />
                            {/* <p className="text-red-500 text-xs ml-4 mt-1">name</p> */}
                        </div>
                        <div className="flex flex-col p-3">
                            <input className="h-10 p-4 text-sm font-light placeholder-gray-500 outline-none border-b-2 border-gray-200 focus:border-secondaire" placeholder="Sujet" type="text" name="Email" />
                            {/* <p className="text-red-500 text-xs  ml-4 mt-1">email</p> */}
                        </div>
                        <div className="w-full p-3">
                            <textarea className="h-[200px] w-full p-4 text-sm font-light text-left placeholder-gray-500 resize-none outline-none border-b-2 border-gray-200 focus:border-secondaire" placeholder="Message" name="Message" />
                        </div>
                        <input type="submit" className="p-2 w-1/3 ml-3 mt-2 rounded-full text-sm text-center text-white bg-principal hover:bg-white hover:text-principal duration-300 cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;