import { AboutProject } from "@/components/AboutProject";
import { AboutUs } from "@/components/AboutUs";
import { DisplaySanitaryGuidelines } from "@/components/BioSafePractices";
import { BiosecuritySection } from "@/components/BioSecurity/BioSecuritySection";
import { FacilitiesSection } from "@/components/Facilities/FacilitiesSection";
import { Footer } from "@/components/Footer";
import { HomeSection } from "@/components/InitialSection";
import { NavBar } from "@/components/Navbar";
import { Results } from "@/components/Results";
import { Vaccination } from "@/components/Vaccination";

function HomePage() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutProject />
      <DisplaySanitaryGuidelines />
      <BiosecuritySection />
      <FacilitiesSection />
      <Vaccination />
      <Results />
      <AboutUs />
      <Footer />
    </>
  );
}

export { HomePage };
