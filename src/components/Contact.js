import React, { useRef, useState, useEffect, createRef } from "react";

const Contact = () => {

    const initialValue = {Prenom: "", Nom:"", Email: "", Telephone: ""};
    const [formValue, setFormValue] = useState(initialValue);
    const [formErr, setFormErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({ ...formValue, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErr(validate(formValue));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if (!values.Nom) {
            errors.name = "Nom requis";
        }
        if (!regex.test(values.Email)) {
            errors.email = "E-mail requis";
        }
        return errors
    }

    return (
        <section aria-label="formulaire de contact" className="bg-accueil h-auto w-full py-12  bg-contact bg-cover bg-center" id="contact">
            <div className="grid md:grid-cols-2 gap-8 w-full mx-auto">
                <div className="flex justify-center items-center">
                </div>
                <div className="rounded-xl w-full flex justify-center mx-auto">
                    <form className="p-10 w-9/12 bg-white rounded-2xl shadow-lg" onSubmit={handleSubmit}>
                        <h1 className="font-bold text-3xl p-4 text-center text-gray-500">Envoyer un message</h1>
                        <div className="flex flex-col p-3">
                            <input aria-label="Entrer votre nom" aria-required="true" className="h-10 p-4 text-sm font-light placeholder-gray-500 outline-none border-b-2 border-gray-200 focus:border-secondaire" placeholder="Nom" type="text" name="Prenom"  onChange={handleChange}/>
                            <p className="text-red-500 text-xs ml-4 mt-1">{formErr.name}</p>
                        </div>
                        <div className="flex flex-col p-3">
                            <input aria-label="Entrer votre prénom" aria-required="true" className="h-10 p-4 text-sm font-light placeholder-gray-500 outline-none border-b-2 border-gray-200 focus:border-secondaire" placeholder="Email" type="text" name="Nom"  onChange={handleChange}/>
                            <p className="text-red-500 text-xs ml-4 mt-1">{formErr.email}</p>
                        </div>
                        <div className="flex flex-col p-3">
                            <input aria-label="Entrer votre email" aria-required="true" className="h-10 p-4 text-sm font-light placeholder-gray-500 outline-none border-b-2 border-gray-200 focus:border-secondaire" placeholder="Sujet" type="text" name="Email"  onChange={handleChange}/>
                        </div>
                        <div className="w-full p-3">
                            <textarea aria-label="Entrer votre message" aria-required="true" className="h-[200px] w-full p-4 text-sm font-light text-left placeholder-gray-500 resize-none outline-none border-b-2 border-gray-200 focus:border-secondaire" placeholder="Message" name="Message"  onChange={handleChange}/>
                        </div>
                        <input type="submit" className="p-2 w-1/3 ml-3 mt-2 rounded-full text-sm text-center text-white bg-principal hover:bg-white hover:text-principal duration-300 cursor-pointer" value="Envoyer" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;