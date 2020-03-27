import React from 'react';
//import '../assets/style/components/Carousel.scss';

const Carousel = ({children}) =>(
  <section class="carousel">
    <div class="carousel_container">
      {children}
    </div>
  </section>
);

export default Carousel;

