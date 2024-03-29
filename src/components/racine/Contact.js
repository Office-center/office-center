import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const initialValue = { Nom: "", Email: "", Message: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formErr, setFormErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const success = () => toast.success("Message envoyé !");
  const error = () => toast.error("Erreur lors de l'envoi du message.");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setFormErr(validate(formValue));
    setIsSubmit(true);
  };

  
  useEffect(() => {
    if (Object.keys(formErr).length === 0 && isSubmit) {
      var bodyFormData = new FormData();
      bodyFormData.append("Nom", formValue.Nom);
      bodyFormData.append("Email", formValue.Email);
      bodyFormData.append("Message", formValue.Message);
      axios({
        method: "post",
        url: "https://getform.io/f/9c292022-0df0-4366-aeb8-3f4fbaa9922c",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          success();
          bodyFormData = initialValue;
        })
        .catch(function (response) {
          error();
          bodyFormData = initialValue;
        });
    }
  }, [formErr]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!values.Nom) {
      errors.name = "Nom requis";
    }
    if (!values.Email) {
      errors.email = "E-mail requis";
    }
    if (!values.Message) {
      errors.message = "Message requis";
    } else if (!regex.test(values.Email)) {
      errors.email = "E-mail invalide";
    }

    return errors;
  };

  return (
    <>
      <div className="py-[14px]"></div>
      <section
        aria-label="formulaire de contact"
        className="bg-accueil h-auto w-full py-12 bg-contact bg-cover"
        id="contact"
      >
        <div className="grid md:grid-cols-2 gap-8 w-full">
          <div></div>
          <div
            className={`rounded-xl flex justify-center relative${
              !Object.keys(formErr).length ? "" : " shake"
            }`}
          >
            <form
              method="POST"
              action="https://getform.io/f/9c292022-0df0-4366-aeb8-3f4fbaa9922c"
              className="p-4 w-10/12 bg-white rounded-2xl shadow-lg max-w-2xl"
              id="contact"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl p-4 text-center text-secondaire">
                Envoyer un message
              </h2>
              <div className="flex flex-col p-3">
                <input
                  aria-label="Entrer votre nom"
                  aria-required="true"
                  className="h-10 p-4 text-sm font-light placeholder-titresecondaire outline-none border-b-2 border-gray-300 focus:border-principal"
                  placeholder="Nom*"
                  type="text"
                  name="Nom"
                  onChange={handleChange}
                />
                {formErr.name != null ? (
                  <p className="text-error text-xs ml-4 mt-1">{formErr.name}</p>
                ) : null}
              </div>
              <div className="flex flex-col p-3">
                <input
                  aria-label="Entrer votre prénom"
                  aria-required="true"
                  className="h-10 p-4 text-sm font-light placeholder-titresecondaire outline-none border-b-2 border-gray-300 focus:border-principal"
                  placeholder="Email*"
                  type="email"
                  name="Email"
                  onChange={handleChange}
                />
                {formErr.email != null ? (
                  <p className="text-error text-xs ml-4 mt-1">
                    {formErr.email}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col p-3">
                <input
                  aria-label="Entrer votre email"
                  aria-required="true"
                  className="h-10 p-4 text-sm font-light placeholder-titresecondaire outline-none border-b-2 border-gray-300 focus:border-principal"
                  placeholder="Sujet"
                  type="text"
                  name="Sujet"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full p-3">
                <textarea
                  aria-label="Entrer votre message"
                  aria-required="true"
                  className="h-[200px] w-full p-4 text-sm font-light text-left placeholder-titresecondaire resize-none outline-none border-b-2 border-gray-300 focus:border-principal"
                  placeholder="Message*"
                  name="Message"
                  onChange={handleChange}
                />
                {formErr.message != null ? (
                  <p className="text-error text-xs ml-4 mt-1">
                    {formErr.message}
                  </p>
                ) : null}
              </div>
              <input
                type="submit"
                className="p-2 w-1/3 ml-3 mt-2 rounded-full text-sm text-center text-white bg-principal hover:bg-white hover:text-principal duration-300 cursor-pointer"
                value="Envoyer"
              />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
