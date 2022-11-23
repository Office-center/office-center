import image1 from "../assets/bg_promo.jpg";
import { AiFillWindows, AiFillApple } from "react-icons/ai";
import React, { useState, useEffect } from "react";

const Promo = () => {
  const [state, setState] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 1050) return setState(true);
    setState(false);

    // else here
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div
        className={`flex justify-center overflow-hidden${
          state ? "" : " flex-col"
        }`}
      >
        <div className="md:w-[75vw] sm:w-[100vw] relative inline-block">
          <img
            src={image1}
            alt="représentation d'un ordinateur gameur de l'intérieur"
            className="w-[100%] h-[100%]"
          />
          <div
            className={`absolute promo-filter${
              state
                ? " w-[50px] top-0 bottom-0 right-0"
                : " h-[12px] bottom-0 w-[100vw]"
            }`}
          ></div>
        </div>
        <div className="bg-black md:w-[25vw] text-white p-[24px] pt-[26px]">
          <h3 className="text-[22px]">
            WorkUnion propose aussi de la réparation et maintenance
          </h3>
          <p className="pt-[10px] text-[18px]">
            Pour vos ordinateurs fixes et portables, sous Windows et Mac
          </p>
          <div className="flex justify-between max-w-[100px] mx-auto my-[6px] place-content-center sm:pt-[5px] md:pt-[20px]">
            <AiFillWindows className="w-[32px] h-[32px]" />{" "}
            <AiFillApple className="w-[32px] h-[32px]" />
          </div>
          <ul className="list-disc list-outside text-[14px] py-[20px] pl-[26px]">
            <li className="py-[12px] xl:py-[22px]">
              Nettoyage interne de l'ordinateur
            </li>
            <li className="py-[12px] xl:py-[22px]">Installation matériel</li>
            <li className="py-[12px] xl:py-[22px]">
              Analyse et suppression des virus, publicités intempestives et tout
              programme malveillants
            </li>
            <li className="py-[12px] xl:py-[22px]">
              Et tout autres services ...
            </li>
          </ul>
          <a href="/construction">
            <button className="flex ml-auto p-[12px] text-[16px] btn-pcFix">
              En savoir plus
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promo;
