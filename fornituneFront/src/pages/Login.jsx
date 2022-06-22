import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/login.css'
import '../assets/css/styles.css'

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setisLoading] = useState(false);

    function logar() {
        axios.post('https://minhaAPI/API/Login/', {
            email: email,
            senha: senha
        })
            .then(response => {
                if (response.status == 200) {
                    setisLoading(false);

                    localStorage.setItem('login-token', response.data.token);
                }
            })

    }

    return (
        <div className='l-background__div-apoio'>
            <section className='l-back__div-form'>
                <div className='l-suport__div-forms'>
                    <h1>Login</h1>

                    <form onSubmit={logar} id='l-form'>
                        <label for="email">Email</label>
                        <input type="email" className='l-form__input' id='email'></input>

                        <label for="senha">Senha</label>
                        <input type="password" className='l-form__input' id='senha'></input>

                        <button type='submit' id='button-login'>Logar</button>
                    </form>

                    <Link to="/">Esqueci minha senha</Link>
                </div>


            </section>
            <div className='l-back__div-image'></div>
        </div>
    )
}