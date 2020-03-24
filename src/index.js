import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Vacaciones from './components/Vacaciones';
//import HolaMundo from './components/Holamundo';
//import Stateful from './components/Stateful';
//import Button from './components/Button';
//import Header from '../src/components/Header';
//////import Footer from '../src/components/Footer';

//import Login from './container/Login';

import Register from './container/Register';

//import Carousel from '../components/Carousel';
///////import COLC from '../src/components/COLC';
//////////import vacaciones from '../src/components/Vacaciones';
//import ClaseDigital from '../src/components/ClaseDigital';
//import App from './container/App';

// Search from '../src/components/Search';

//import Stateless from './components/Stateless';

//ReactDOM.render(<Header />, document.getElementById ('root') );

//ReactDOM.render(<Footer />, document.getElementById ('root') );

//ReactDOM.render(<Login />, document.getElementById ('root') );

ReactDOM.render(<Register />, document.getElementById ('root') );


//ReactDOM.render(<Carousel />, document.getElementById ('root') );

//ReactDOM.render(<App />, document.getElementById ('root') );

//////ReactDOM.render(<COLC />, document.getElementById ('root') );

////////ReactDOM.render(<Vacaciones />, document.getElementById ('root') );

///////ReactDOM.render(<ClaseDigital />, document.getElementById ('root') );

//ReactDOM.render(<Search />, document.getElementById ('root') );

//ReactDOM.render(<HolaMundo />, document.getElementById ('root') );

//ReactDOM.render(<Stateful />, document.getElementById ('root') );

//ReactDOM.render(<Stateless />, document.getElementById ('root') );

//ReactDOM.render(<Button text="Guardar" />, document.getElementById ('root') );

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
