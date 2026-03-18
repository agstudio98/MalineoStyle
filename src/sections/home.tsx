import { forwardRef } from 'react';
import Main from './home/main';
import About from './home/about';
import Timeline from './home/timeline';
import Offers from './home/offers';
import Payments from './home/payments';
import Sales from './home/sales';
import Carousel from './home/carousel';

export default forwardRef<HTMLElement, any>((_, ref) => {
  return (
    <section ref={ref} className="home-section">
      <Main />
      <About />
      <Timeline />
      <Offers />
      <Payments />
      <Sales />
      <Carousel />
    </section>
  );
});

