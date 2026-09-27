import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#080b12] text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <TechStack />
        <Work />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
