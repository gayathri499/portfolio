import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import CareerFocus from "./components/CareerFocus";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import LeetCode from "./components/LeetCode";
import CareerJourney from "./components/CareerJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <CareerFocus />
        <Projects />
        <Certifications />
        <LeetCode />
        <CareerJourney />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
