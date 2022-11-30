import {
  AiOutlineLinkedin,
  AiOutlineMobile,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineFacebook
} from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";

const Footer = ({ myRef, bgDark }) => {
  return (
    <footer
      ref={myRef}
      id="footer"
      aria-label="Pied de page comportant les informations de contact de WorkUnion et un accès aux réseaux sociaux"
    >
      <div
        className={`grid md:grid-cols-2 gap-10 justify-center items-center sm:grid-cols-1 py-[12px]${
          bgDark ? " text-white" : null
        }`}
      >
        <div className="flex justify-center flex-col items-center">
          <h5 className="text-secondaire">Adresse de WorkUnion</h5>
          <span></span>
          <a
            href="https://www.google.com/maps/place/16+Rue+Faidherbe,+59800+Lille/@50.6368875,3.0639326,17z/data=!3m1!4b1!4m5!3m4!1s0x47c2d589ab427ce3:0x4e57745c5f7bf46a!8m2!3d50.6368841!4d3.0661213?hl=fr"
            className="flex w-fit"
            target="_blank"
            rel="noreferrer"
          >
            <address className="flex inline-flex hover:text-principal duration-300 items-center gap-[6px]">
              <BiMap size={20} /> 16-18 Rue Faidherbe, Lille 59000
            </address>
          </a>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <h5 className="text-secondaire">Nos coordonnées :</h5>
          <span></span>
          <p className="flex inline-flex items-center gap-[6px]">
            <AiOutlineMobile size={20} /> 07 83 200 600
          </p>
          <p className="flex inline-flex items-center gap-[6px]">
            <AiOutlinePhone size={20} /> 03 20 311 311
          </p>
          <a
            href="mailto:direction.workunion@gmail.com"
            className="flex inline-flex hover:text-principal duration-300 w-fit items-center gap-[6px]"
          >
            <MdOutlineAlternateEmail size={20} />
            contact@workunion.fr
          </a>
          <ul className="flex inline-flex justify-center">
            <li className="btn_media rounded-[8px]">
              <a
                title="Linkedin WorkUnion"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/workunion-lille-776b1a255"
              >
                <AiOutlineLinkedin size={40} />
              </a>
            </li>
            <li className="btn_media rounded-[8px]">
              <a
                href="https://www.instagram.com/workunionlille/?hl=fr"
                target="_blank"
                title="Instagram"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={40} />
              </a>
            </li>
            <li className="btn_media rounded-[8px]">
              <a
                href="/*"
                target="_blank"
                title="Facebook"
                rel="noreferrer"
              >
                <AiOutlineFacebook size={40} />
              </a>
            </li>
            </ul>
        </div>
      </div>

      <p className="text-center bg-secondaire text-white py-[6px]">
        Copyright WorkUnion©2022. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
