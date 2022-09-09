// importing secureConnectionStart
import About from "../components/sections/About";
import Events from "../components/sections/Events"
import Gallery from "../components/sections/Gallery";
import Hero from "../components/sections/Hero"

// var logo_counter=false;
function Hs() {
  return (
    <div className="hs">
      <Hero />
      <About />
      <Events />
      <Gallery />
    </div>
  )
}

export default Hs;
