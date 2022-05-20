import React from "react";
import {BsFacebook} from "react-icons/bs"
import {BsTwitter,BsInstagram} from "react-icons/bs"

const Adresse = () => {
    return (
        <div>
        <div className="flex flex-col justify-center items-center py-12  " id="adresse">
                <div class="grid md:grid-cols-2 gap-7  p-4 ">
                    <div>
                <h1 className="bg-black-500 pb-4 text-center font-bold text-3xl">Notre Adresse </h1>
                <p className="text-lg">16-18 rue Faidherbe, 59000 Lille</p>
                <p className="text-lg">E-mail : gestion.officecenter@gmail.com / direction.officecenter@gmail.com</p>
                <p className="text-lg">Tél :  03 20 311 311</p>
                

                </div>
                <div className="flex flex-row justify-center ">
                <a  className="pl-4" href="https://www.facebook.com/officecenterfrance/"><BsFacebook size={40} style={{color: "#5FAEC4"}}/> </a>     
                <a  className="pl-4" href="https://twitter.com/OfficeCenterFr"><BsTwitter size={40} style={{color: "#5FAEC4"}}/> </a> 
                <a  className="pl-4" href="https://www.instagram.com/officecenterfrance/"><BsInstagram size={40} style={{color: "#5FAEC4"}}/> </a> 


                <div>
                    
                </div>
                


                </div>
                </div>

                                  




            </div>
        </div>
    )
}

export default Adresse;