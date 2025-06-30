// import Image from "next/image";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skill/>
    </>
  );
}
