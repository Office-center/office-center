import { AiOutlineLinkedin, AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer id="footer" className="bg-[#F7F8F3]" aria-label='Pied de page comportant les informations de contact de WorkUnion et un accès aux réseaux sociaux'>

            <div className="grid md:grid-cols-2 gap-10 justify-center items-center sm:grid-cols-1 py-[12px]">
                <div className="text-center">
                <h5 className='text-secondaire font-bold'>Adresse de WorkUnion<span></span></h5>
                <p className='text-titresecondaire'>16-18 Rue Faidherbe, Lille 59000</p>
                </div>
                <div className="text-center flex flex-col">
                    <h5 className="text-secondaire font-bold">Nos coordonnées :<span></span></h5>
                    <p className='text-titresecondaire'>07 83 200 600</p>
                    <a href="mailto:direction.workunion@gmail.com" className='text-titresecondaire'>direction.workunion@gmail.com</a>
                    <ul className="flex inline-flex justify-center">
                        <li className='btn_media rounded-[8px]'><a title="Linkedin WorkUnion" target="_blank" href="https://www.linkedin.com/in/workunion-lille-776b1a255"><AiOutlineLinkedin size={40}/></a></li>
                        {/* <li><a href="https://www.facebook.com/" target="_blank" title="Facebook"><AiFillFacebook size={40} style={{ color: "#0077b6" }} /></a></li> */}
                        {/* <li><a href="https://twitter.com" target="_blank" title="Twitter"><AiFillTwitterSquare size={40} style={{ color: "#0077b6" }} /></a></li> */}
                        {/* <li><a title="instagram" target="_blank" href="https://www.instagram.com/"><AiOutlineInstagram size={40} style={{ color: "#0077b6" }} /></a></li> */}
                    </ul>
                </div>
            </div>

            <p className="text-center bg-footerbg text-white py-[6px]">Copyright WorkUnion©2022. Tous droits réservés.</p>
        </footer>
    )
}

export default Footer;