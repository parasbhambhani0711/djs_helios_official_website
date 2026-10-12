import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HallOfFame from "./components/HallOfFame";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-helios-dark text-slate-100 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <HallOfFame />
      <Gallery />
      <Partners />
      <Contact />
    </main>
  );
}