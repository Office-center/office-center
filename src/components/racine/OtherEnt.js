import PcGenius from "../../assets/logopcGenius.png";
import PcGeniusBg from "../../assets/pcGeniusBg.jpg";
import logoWorkUnion from "../../assets/terre.jpg";

const OtherEnt = () => {
  const pres = [
    {
      id: 0,
      imgIco: PcGenius,
      imgBg: PcGeniusBg,
      IcoAlt: "logo de PcGenius",
      bgAlt: "arrière plan du logo de PcGenius",
      title: "PC GENIUS",
      desc: "Pour la réparation de vos appareils",
    },
    // {
    //   id: 1,
    //   imgIco: logoWorkUnion,
    //   imgBg:
    //     "https://img.freepik.com/vecteurs-libre/concoit-fond-moderne-vert-degrade_343694-2031.jpg?w=1380&t=st=1669646114~exp=1669646714~hmac=31b09f3a1f4165fb28a5d79f926953d4eac037c0d1b29bde1dd9fa894e19a26f",
    //   IcoAlt: "pcGenius",
    //   bgAlt: "arrière plan pcGenius",
    //   title: "Des espaces de coworking à louer",
    //   desc: "Voici la description de la carte",
    // },
  ];

  return (
    <>
      <div className="flex flex-col bg-secondaire py-3">
        <div className="inline-flex items-center flex justify-center pb-[24px]">
          <img src={logoWorkUnion} alt="représentation du logo de l'agence WorkUnion" className="sm:h-14 sm:w-14 md:h-[60px] md:w-[60px] rounded-full mr-[20px]" />
          <h3 className="sm:text-[24px] text-3xl text-white">WorkUnion c'est aussi :</h3>
        </div>
        <div className="flex flex-raw justify-center items-center justify-around">
<<<<<<< HEAD
          {pres.map(
            ({ id, imgBg, imgIco, imgAlt, icoAlt, bgAlt, title, desc }) => (
              <a
                href="/construction"
                className="md:w-[50%] relative overflow-hidden card-wrap rounded-lg"
                key={id}
              >
                <div className="w-[100%] py-[25px] flex flex-col justify-center items-center duration-500 grayscale hover:grayscale-0 card-ent">
                  <img
                    src={imgBg}
                    className="absolute object-cover w-[100%] h-[100%]"
                    alt={bgAlt}
                  />
                  <img
                    src={imgIco}
                    alt={icoAlt}
                    className={`rounded-full relative object-cover bg-black${id === 7 ? ' sm:h-18 sm:w-18 md:h-[150px] md:w-[150px]' : ' sm:h-14 sm:w-14 md:h-[100px] md:w-[100px]'}`}
                  />
                  <h4 className="relative pt-[4%] text-center text-white px-[10px]">{title}</h4>
                  <p className="relative text-center text-white px-[10px]">{desc}</p>
                </div>
                {/* <div className="h-[100%] w-[100%] top-[100%] absolute bg-white/50 card-content"></div> */}
              </a>
            )
          )}
=======
          {pres.map(({ id, imgBg, imgIco, imgAlt, icoAlt, bgAlt, title, desc }) => (
            <a href="/construction" className="md:w-[50%] relative overflow-hidden card-wrap rounded-lg" key={id}>
              <div className="w-[100%] h-[25vh] flex flex-col justify-center items-center duration-500 hover:grayscale-0 card-ent py-[20px]">
                <img src={imgBg} className="absolute object-cover w-[100%] h-[100%]" alt={bgAlt} />
                <img src={imgIco} alt={icoAlt} className={`rounded-full relative object-cover bg-black${id === 7 ? " sm:h-18 sm:w-18 md:h-[150px] md:w-[150px]" : " sm:h-14 sm:w-14 md:h-[100px] md:w-[100px]"}`} />
                <h4 className="relative pt-[4%] text-center text-white px-[10px]">{title}</h4>
                <p className="relative text-center text-white px-[10px]">{desc}</p>
              </div>
              {/* <div className="h-[100%] w-[100%] top-[100%] absolute bg-white/50 card-content"></div> */}
            </a>
          ))}
>>>>>>> 54be50bff3ba2cc5adeb382763b1d97abe7c25f9
        </div>
      </div>
    </>
  );
};

export default OtherEnt;
