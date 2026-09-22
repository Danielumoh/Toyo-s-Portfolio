import About from "./components/About";
import Contact from "./components/Contact";
import ContentShowcase from "./components/ContentShowcase";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Experience />
      <ContentShowcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
