import { AiOutlineHeart } from "react-icons/ai";
import Slider from "react-slick";

const Card = () => {

    const cards = [
        {
          id: 0,
          imgSrc: "http://localhost:3000/static/media/image3.72fbb792479216226600.jpeg",
          imgAlt: "Grand place de Lille",
          title: "Un emplacement au cœur de Lille",
          list: [
            "16-18 rue Faidherbe - 59000 LILLE",
            "250 mètres de la gare Lille Flandres, du métro et des bus",
            "600 mètres de la gare Lille Europe",
            "30 minutes approximatives de tous les centres économiques de l'Agglomération lilloise",
          ],
        },
        {
            id: 1,
            imgSrc: "http://localhost:3000/static/media/image3.72fbb792479216226600.jpeg",
            imgAlt: "Grand place de Lille",
            title: "Un emplacement au cœur de Lille",
            list: [
              "16-18 rue Faidherbe - 59000 LILLE",
              "250 mètres de la gare Lille Flandres, du métro et des bus",
              "600 mètres de la gare Lille Europe",
              "30 minutes approximatives de tous les centres économiques de l'Agglomération lilloise",
            ],
          },
          {
            id: 2,
            imgSrc: "http://localhost:3000/static/media/image3.72fbb792479216226600.jpeg",
            imgAlt: "Grand place de Lille",
            title: "Un emplacement au cœur de Lille",
            list: [
              "16-18 rue Faidherbe - 59000 LILLE",
              "250 mètres de la gare Lille Flandres, du métro et des bus",
              "600 mètres de la gare Lille Europe",
              "30 minutes approximatives de tous les centres économiques de l'Agglomération lilloise",
            ],
          },]

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className="py-[30px] text-center">
      <Slider {...settings}>
        {cards.map(({ id, imgSrc, imgAlt, title, list }) => (
            <a href="/construction" className="max-w-sm shadow-lg shadow-slate-400 shadow-principal rounded-[10px] bg-white card_vision my-[50px]" key={id}>
              <img
                className="object-cover h-48 w-96 bg-principal rounded-t-[10px]"
                src={imgSrc}
                alt={imgAlt}
              />
              <div className="px-6 py-4">
                <div className="text-base mb-2 text-center">{title}</div>
                <ul className="list-disc text-sm list-outside text-left">
                  {list.map((item, index) => (
                    <li key={index} className="">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute right-[26px] bottom-0 card_arrow">
                  <AiOutlineHeart size={30} />
                </div>
              </div>
            </a>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
