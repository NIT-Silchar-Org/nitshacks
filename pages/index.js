// importing secureConnectionStart
import About from "../components/sections/About";
import AboutTecno from "../components/sections/AboutTecno";
import Contact from "../components/sections/Contact";
import Events from "../components/sections/Events"
import Hero from "../components/sections/Hero"

// var logo_counter=false;
function Hs() {
  return (
    <div className="hs">
      <Hero />
      <About />
      <AboutTecno />
      <Events />
      <Contact />
    </div>
  )
}

export default Hs;
