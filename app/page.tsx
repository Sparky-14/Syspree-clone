import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsBand from "@/components/ClientsBand";
import ClientsSpeak from "@/components/ClientsSpeak";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import CtaStrip from "@/components/CtaStrip";
import CoreFramework from "@/components/CoreFramework";
import Industries from "@/components/Industries";
import Media from "@/components/Media";
import OurStories from "@/components/OurStories";
import GlobalPresence from "@/components/GlobalPresence";
import Locations from "@/components/Locations";
import OurCulture from "@/components/OurCulture";
import OurTeam from "@/components/OurTeam";
import Achievements from "@/components/Achievements";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientsBand />
        <ClientsSpeak />
        <About />
        <CaseStudies />
        <Services />
        <CtaStrip />
        <CoreFramework />
        <Industries />
        <Media />
        <OurStories />
        <GlobalPresence />
        <Locations />
        <OurCulture />
        <OurTeam />
        <Achievements />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}