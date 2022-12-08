import video from "../../assets/back.mp4";

const vidPres = () => {
  return (
    <div className="flex justify-center items-center relative">
      <video alt="Gare Lille Flandres, Grand Place de Lille" src={video} autoPlay loop muted className="w-[100vw] h-auto max-h-[75vh] min-h-[400px] object-cover " id="accueil" />
      <h1 className="bg-white/70 absolute text-sm text-secondaire text-center flex flex-col gap-y-[16px] p-[24px] rounded-md">
        <span className="text-[34px] title-bold">WORKUNION</span>{" "}
        <span className="text-[18px]">
          COWORKING - DOMICILIATION - PRESTATIONS AUX ENTREPRISES
        </span>
      </h1>
      <h4 className="bg-white/50 absolute text-sm text-secondaire right-[16px] bottom-[5px] flex flex-col p-[10px] rounded-md">
        <span className="text-[14px]">
          Mail : <a href="mailto:contact@workunion.fr" className="text-secondaire text-bold">contact@workunion.fr</a>
        </span>
        <span className="text-[14px]">
          Adresse : <a href="https://www.google.com/maps/place/16+Rue+Faidherbe,+59800+Lille/@50.6368875,3.0639326,17z/data=!3m1!4b1!4m5!3m4!1s0x47c2d589ab427ce3:0x4e57745c5f7bf46a!8m2!3d50.6368841!4d3.0661213?hl=fr">16-18 Rue Faidherbe, Lille 59000</a>
        </span>
        <span className="text-[14px]">
          Telephone : 07 83 200 600
        </span>
      </h4>
    </div>
  );
};

export default vidPres;
