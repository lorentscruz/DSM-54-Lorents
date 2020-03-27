/*import React  from  'react';
import '../assets/style/components/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import AppItem from '../container/AppItem';


const App = () =>(
    <div className="App">
        <Header />
        <Search />
        <Carousel />
        <AppItem _/>
        <Footer />
    </div>
);
export default App;

import React  from  'react';
import '../assets/style/components/App.scss';
import '../assets/style/Examen.scss';
import COLC from '../components/COLC';
import Vacaciones from '../components/Vacaciones';
import ClaseDigital from '../components/ClaseDigital';



const App = () =>(
    <div className="App">
        <COLC />
        <Vacaciones />
        <ClaseDigital />
        
    </div>
);
export default App;
*/

import React  from  'react';
import '../assets/style/components/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import CarouselIteam from '../components/CarouselIteam';
import Categories from '../components/Categories';



const App = () =>(
    <div className="App">
        <Header />
        <Search />
        <Categories>
        <Carousel>
            <CarouselIteam />
            <CarouselIteam />
            <CarouselIteam />
            <CarouselIteam />
            <CarouselIteam />
            <CarouselIteam />
        </Carousel>
        </Categories>

        <Footer />
    </div>
);
export default App;