import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-primary transition-colors duration-300 font-sans">

      <LeftSidebar />
      <Navbar />

      <main className="pt-10 space-y-22">

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
