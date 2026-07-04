import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";

const AboutPage = () => (
  <PageTransition>
    <Hero />
    <About />
    <Contact />
  </PageTransition>
);

export default AboutPage;
