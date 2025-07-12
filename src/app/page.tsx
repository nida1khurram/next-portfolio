import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TeamSection from "@/components/TeamSection";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
       <Navbar />
       <Hero/>
       <AboutUs/>
       <Skills/>
       <Projects/>
       <TeamSection/>
       <Contact/>
       <Footer/>
       
       
    </main>
  );
}
