import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
