import Header from "./components/header/page";
import Hero from "./components/heroSection/page";
import About from "./components/aboutSection/page";
import Projects from "./components/projectSection/page";
import Experience from "./components/experienceSection/page";
import Contact from "./components/contactSection/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}
