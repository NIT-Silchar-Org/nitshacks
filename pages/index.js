import Hero from "../components/sections/hero";
import Hero2 from "../components/sections/hero2";
import SocialMedia from "../components/sections/socialMedia";
// import HeroImage from "../public/img/tokyo-city-aesthetic.png";
// import SmokeMachine from '@bijection/smoke';

export default function Home() {

  return (
    <div className=" sticky text-xl w-full h-screen bg-[url('../public/img/tokyo-city-aesthetic.png')] bg-cover bg-center">
      {/* <Hero/> */}
      <Hero2/>
      <SocialMedia/>
    </div>
  );
}
