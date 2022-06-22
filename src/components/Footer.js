import '../assets/css/Footer.css'
import '../assets/css/styles.css'

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <footer>
            <div className='f-background__div flex'>
                <nav className='f-content__nav f-item__footer'>
                    <Link to="/Market_Place">Market Place</Link>
                    <Link to="/Contatos">Contato</Link>
                    <Link to="/Sobre">Sobre</Link>
                </nav>
                <span className='f-item__footer' id='marca_title'>Fornitune Store LTDA</span>
                <a className='f-item__footer' id='endereco' href="https://www.google.com.br/maps/place/Av.+Paulista+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP/@-23.5657393,-46.6534266,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce59c8da0aa315:0xd59f9431f2c9776a!8m2!3d-23.5657393!4d-46.6512379">Av. Antônio Sabella de Assis Nº 203, São Paulo - SP 05224-034</a>
            </div>
        </footer>
    );
}
