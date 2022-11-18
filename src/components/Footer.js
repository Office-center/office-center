import { AiOutlineLinkedin, AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from 'react-icons/ai';
import { Redirect } from 'react-router-dom';


const Footer = () => {
    return (
        <footer id="footer" className="bg-[#F7F8F3]" aria-label='Pied de page comportant les informations de contact de WorkUnion et un accès aux réseaux sociaux'>

            <div className="grid md:grid-cols-2 gap-10 justify-center items-center sm:grid-cols-1 py-[12px]">
                <div className="text-center">
                <h5 className='text-secondaire'>Adresse de WorkUnion<span></span></h5>
                <a href='https://www.google.com/maps/place/16+Rue+Faidherbe,+59800+Lille/@50.6368875,3.0639326,17z/data=!3m1!4b1!4m5!3m4!1s0x47c2d589ab427ce3:0x4e57745c5f7bf46a!8m2!3d50.6368841!4d3.0661213?hl=fr'><address className='text-titresecondaire hover:text-principal'>16-18 Rue Faidherbe, Lille 59000</address></a>
                </div>
                <div className="text-center flex flex-col">
                    <h5 className="text-secondaire">Nos coordonnées :<span></span></h5>
                    <p className='text-titresecondaire'>07 83 200 600</p>
                    <a href="mailto:direction.workunion@gmail.com" className='text-titresecondaire hover:text-principal'>direction.workunion@gmail.com</a>
                    <ul className="flex inline-flex justify-center">
                        <li className='btn_media rounded-[8px]'><a title="Linkedin WorkUnion" target="_blank" href="https://www.linkedin.com/in/workunion-lille-776b1a255"><AiOutlineLinkedin size={40}/></a></li>
                        {/* <li><a href="https://www.facebook.com/" target="_blank" title="Facebook"><AiFillFacebook size={40} style={{ color: "#0077b6" }} /></a></li> */}
                        {/* <li><a href="https://twitter.com" target="_blank" title="Twitter"><AiFillTwitterSquare size={40} style={{ color: "#0077b6" }} /></a></li> */}
                        {/* <li><a title="instagram" target="_blank" href="https://www.instagram.com/"><AiOutlineInstagram size={40} style={{ color: "#0077b6" }} /></a></li> */}
                    </ul>
                </div>
            </div>

            <p className="text-center bg-secondaire text-white py-[6px]">Copyright WorkUnion©2022. Tous droits réservés.</p>
        </footer>
    )
}

export default Footer;