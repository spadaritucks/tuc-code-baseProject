import '../assets/css/components-styles/Footer.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/WhatsApp Image 2024-06-14 at 10.38.51.jpeg'

function Footer() {
    return (
        <footer className='footer-bar'>
            <div className='footer-card logo-text '>
                <img className='footer-logo' src={Logo} alt="" />
                <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="footer-card links">
                <h2>Links</h2>
                <ul><li><Link to='/'>Home</Link></li></ul>
                <ul><li><Link to='/NossosProdutos'>Nossos Produtos</Link></li></ul>
                <ul><li><Link to='/QuemSomos'>Quem Somos</Link></li></ul>
            </div>

            <div className="footer-card social">
                <h2>Redes Sociais</h2>
                <a href="" className='social-plataform'><WhatsAppIcon /><p>WhatsApp</p></a>
                <a href="" className='social-plataform'><EmailIcon /><p>Email</p></a>
                <a href="" className='social-plataform'><InstagramIcon /><p>Instagram</p></a>
                <a href="" className='social-plataform'><FacebookIcon /><p>Facebook</p></a>
            </div>

            <div className="footer-card location">
                <h2>Localização</h2>
                <a href=""><LocationOnIcon sx={{ margin: 0.5, fontSize: 30 }}/><p> Rua Marechal Deodoro 1815 - 2°Andar - São Bernardo do Campo - SP</p></a>
            </div>

        </footer>


    )
}

export default Footer;