import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/components-styles/Navbar.css'
import LoginIcon from '@mui/icons-material/Login';
import Logo from '../assets/images/WhatsApp Image 2024-06-14 at 10.38.51.jpeg'
import MenuIcon from '@mui/icons-material/Menu';




function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu começa fechado

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna entre aberto e fechado
    };

    return (

        <nav className='navbar-style'>
            <img className='nav-bar-logo' src={Logo} alt="" />

            <div className={`nav-itens ${isMenuOpen ? 'open' : ''}`}>
                <div className="nav-link-routes">
                    <Link to='/'>Home</Link>
                    <Link to='/NossosProdutos'>Nossos Produtos</Link>
                    <Link to='/QuemSomos'>Quem Somos</Link>
                </div>


                <div className="nav-link-login">
                    <button className='nav-btn-register'><Link to='/registrar'>Criar Conta</Link></button>
                    <Link to='/login'><LoginIcon sx={{ margin: 0.5, fontSize: 30 }} />Login</Link>
                </div>
            </div>

            <div className="btn-toogle" onClick={toggleMenu}>
                <MenuIcon sx={{ fontSize: 45 }} />
            </div>

        </nav>




    )
}

export default Navbar