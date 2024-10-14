import Header from "../components/Header";
import { AfterHero } from "../components/sections/AfterHero";
import { BeforeFooter } from "../components/sections/BeforeFooter";
import { Hero } from "../components/sections/Hero";
import { TopSellers } from "../components/sections/TopSellers";
import { Modal } from "../components/ui/Modal";
const LandingPage = () => {
  return (
    <div className="bg-[#111015]">
      <Modal />
      <Header />
      <Hero />
      <AfterHero />
      <TopSellers />
      <BeforeFooter />
      <Header />
    </div>
  );
};

export default LandingPage;
