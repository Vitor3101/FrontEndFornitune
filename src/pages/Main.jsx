import React from "react";

import { Link } from 'react-router-dom';

import '../assets/css/home.css'
import '../assets/css/styles.css'

import sofaIcon from '../assets/img/img_banner_home.png'

import imgMovel1 from '../assets/img/imgMovel1.png'
import imgMovel2 from '../assets/img/imgMovel2.jpg'
import imgMovel3 from '../assets/img/imgMovel3.jpg'
import imgMovel4 from '../assets/img/imgMovel4.jpg'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function Home() {
  return (
    <html>
      <body>

        <Header />

        <main className="flex">

          <section className='m-background__section'>
            <img src={sofaIcon} alt='imagem de um sofa' />

            <div className='m-background__paragraph'>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
          </section>

        </main>

        <section className="m-background__section-image">
          <div className="m-background__div">
            <img src={imgMovel1} alt="Cômoda"/>
            <p>Sala de Estar</p>
            <Link to="/" className="m-buttom__buscarProdutos">Buscar</Link>
          </div>

          <div className="m-background__div">
            <img src={imgMovel2} alt="Armário"/>
            <p>Quarto</p>
            <Link to="/" className="m-buttom__buscarProdutos">Buscar</Link>
          </div>

          <div className="m-background__div">
            <img src={imgMovel3} alt="Armário de cozinha"/>
            <p>Cozinha</p>
            <Link to="/" className="m-buttom__buscarProdutos">Buscar</Link>
          </div>

          <div className="m-background__div">
            <img src={imgMovel4} alt="Conjunto de mesa e cadeiras de praia com guarda-sol"/>
            <p>Área gourmet</p>
            <Link to="/" className="m-buttom__buscarProdutos">Buscar</Link>
          </div>
        </section>
      </body>

      <Footer />

    </html>
  );
}

export default Home;
