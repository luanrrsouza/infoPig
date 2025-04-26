import { AboutProject } from "@/components/AboutProject";
import { DisplaySanitaryGuidelines } from "@/components/BioSafePractices";
import { BiosecuritySection } from "@/components/BioSecurity/BioSecuritySection";
import { FacilitiesSection } from "@/components/Facilities/FacilitiesSection";
import { HomeSection } from "@/components/InitialSection";
import { NavBar } from "@/components/Navbar";

function HomePage() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutProject />
      <DisplaySanitaryGuidelines />
      <BiosecuritySection />
      <FacilitiesSection />
    </>
  );
}

export { HomePage };
