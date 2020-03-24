import React from 'react';
import '../assets/style/components/login.scss';
import google from '../assets/static/google-icon.png';
import twitter from '../assets/static/twitter-icon.png';
const Login= () =>{
    return (

        <div className="login">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <link href="https://fonts.googleapis.com/css?family=Mulidisplay=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="./styles.css"/>
                <title>Inicia Sesión</title>
            </head>
            <body class="body">
                <header className="header">
                    <img class="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video"/>
                </header>
                <section class="login">
                    <section class="login__container">
                        <h2>Inicia sesión</h2>
                        <form class="login__container--form">
                            <input class="input" type="text" placeholder="Correo"/>
                            <input class="input" type="password" placeholder="Contraseña"/>
                            <button class="button">Iniciar sesión</button>
                        <div class="login__container--remember-me">
                            <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
                            </label>
                            <a href="/">Olvidé mi contraseña</a>
                        </div>
                </form>
                <section class="login__container--social-media">
        <div><img src={google}/> Inicia sesión con Google</div>
        <div><img src={twitter}/> Inicia sesión con Twitter</div>
      </section>
      <p class="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
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

export default Login;