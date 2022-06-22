import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/login.css'
import '../assets/css/styles.css'

export default function Login() {
    return (
        <div className='l-background__div-apoio'>
            <section className='l-back__div-form'>
                <div className='l-suport__div-forms'>
                    <h1>Login</h1>

                    <form id='l-form'>
                        <label for="email">Email</label>
                        <input type="email" className='l-form__input' id='email'></input>
                        <label for="senha">Senha</label>
                        <input type="password" className='l-form__input' id='senha'></input>
                        <button id='button-login'>Logar</button>
                    </form>
                    <Link to="/">Esqueci minha senha</Link>
                </div>


            </section>
            <div className='l-back__div-image'></div>
        </div>
    )
}