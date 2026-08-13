import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Resume from "@/components/sections/Resume";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <Resume />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
