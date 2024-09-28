import {Link} from 'react-router-dom';
import './Navbar.css';


export const Navbar = ()=>{
    return(
       <nav className='navbar'>
            <ul className='sub-menu'>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/services">Servicios</Link>
                </li>
                <li>
                    <Link className='link' to="/contact">Contacto</Link>
                </li>
                <li>
                    <Link className='link' to="/calculadora">Calcular</Link>
                </li>
            </ul>
       </nav>
    );
};

