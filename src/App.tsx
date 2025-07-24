import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Testmonial from "./sections/Testmonial";

export default function App() {
  return (
    <div className="container mx-auto max-w-7xl scroll-smooth">
      <Navbar />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="work" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="experiences" className="scroll-mt-24">
        <Experiences />
      </section>

      <section id="testimonials" className="scroll-mt-24">
        <Testmonial />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
