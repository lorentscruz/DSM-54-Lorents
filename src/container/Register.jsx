import React from 'react';
import '../assets/style/components/Register.scss';
import google from '../assets/static/google-icon.png';
const Register= () =>{
    return (

        <div className="Register">

            <head>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
                <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="./styles.css"></link>
                <title>Registro</title>
            </head>
            <body>
                
                <section class="register">
                    <section class="register__container">
                        <h2>Regístrate</h2>
                        <form class="register__container--form">
                        <input class="input" type="text" placeholder="Nombre"/>
                        <input class="input" type="text" placeholder="Correo"/>
                        <input class="input" type="password" placeholder="Contraseña"/>
                        <button class="button">Registrarme</button>
                        </form>
                        <a href="">Iniciar sesión</a>
                    </section>
                </section>
                <footer class="footer">
                <a href="/">Terminos de uso</a>
                <a href="/">Declaración de privacidad</a>
                <a href="/">Centro de ayuda</a>
                </footer>
                </body>
        </div>
    );

}

export default Register;
