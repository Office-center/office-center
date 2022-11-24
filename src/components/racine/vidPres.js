import video from "../../assets/back.mp4";

const vidPres = () => {
  return (
    <div className="flex justify-center items-center">
      <video
        alt="Gare Lille Flandres, Grand Place de Lille"
        src={video}
        autoPlay
        loop
        muted
        className="w-[100vw] h-auto max-h-[75vh] min-h-[400px] object-cover "
        id="accueil"
      />
      <h1 className="bg-white/70 absolute text-sm text-secondaire text-center flex flex-col gap-y-[16px] p-[24px] rounded-md">
        <span className="text-[34px] title-bold">WORKUNION</span>{" "}
        <span className="text-[18px]">
          COWORKING - DOMICILIATION - LOCATION
        </span>
      </h1>
    </div>
  );
};

export default vidPres;
