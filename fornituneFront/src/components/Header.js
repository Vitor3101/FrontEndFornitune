import '../assets/css/header.css'
import '../assets/css/styles.css'

import { Link } from 'react-router-dom';

import logo from '../assets/img/logoMovelPreto.svg'

export default function Header() {
  return (
    <header>
      <div className='h-background__suport flex'>
        <img src={logo} alt='logo'/>

        <nav className='h-content__nav'>
          
          <Link to='/Market_Place'>Market Place</Link>
          <Link to='/Contatos'>Contato</Link>
          <Link to='/Sobre'>Sobre nós</Link>
          <Link id='entrar' to='/Login'>Entrar</Link>

        </nav>

      </div>
    </header>
  );
}
