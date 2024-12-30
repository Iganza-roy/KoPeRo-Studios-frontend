import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import TopCrew from '../components/TopCrew';

// Home page component
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <TopCrew />
      <Testimonials />
      <Banner />
    </div>
  );
};

export default Home;
