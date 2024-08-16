import Hero from '../../components/sections/home_01/Hero';
import Service from '../../components/sections/home_01/service/Service';
import Content_01 from '../../components/sections/home_01/Content_01';
import Content_02 from '../../components/sections/home_01/Content_02';
import FunFact from '../../components/sections/home_01/FunFact';
// import Pricing from '../../components/sections/home_01/Pricing';
import Testimonial_Section from '../../components/sections/home_01/Testimonial_Section';

const Home_01 = () => {
  return (
    <main className='main-wrapper relative overflow-hidden'>
      <Hero />
      <Service />
      <Content_01 />
      <FunFact />
      {/* <Pricing /> */}
      <Testimonial_Section />
      {/* Body Background Shape 1 */}
    </main>
  );
};

export default Home_01;
