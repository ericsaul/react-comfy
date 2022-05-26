import styledComponents from "styled-components";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
