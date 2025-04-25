import { AboutProject } from "@/components/AboutProject";
import { DisplaySanitaryGuidelines } from "@/components/BioSafePractices";
import { HomeSection } from "@/components/InitialSection";
import { NavBar } from "@/components/Navbar";

function HomePage() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutProject />
      <DisplaySanitaryGuidelines />
    </>
  );
}

export { HomePage };
