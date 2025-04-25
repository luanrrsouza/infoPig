import { AboutProject } from "@/components/AboutProject";
import { HomeSection } from "@/components/InitialSection";
import { NavBar } from "@/components/Navbar";

function HomePage() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutProject />
    </>
  );
}

export { HomePage };
