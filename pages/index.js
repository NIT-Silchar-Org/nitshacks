import Hero from "../components/sections/hero";
import SocialMedia from "../components/sections/socialMedia";
// import HeroImage from "../public/img/tokyo-city-aesthetic.png";
// import SmokeMachine from '@bijection/smoke';

export default function Home() {

  return (
    <div className=" sticky text-xl w-full h-screen bg-[url('../public/img/tokyo-city-aesthetic.png')] bg-cover bg-center">
      <Hero/>
      <SocialMedia/>
    </div>
  );
}
