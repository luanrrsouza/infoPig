import { useEffect, useState } from "react";
import PigLogo from "../assets/images/pigLogo.png";
import { Link } from "react-scroll";

function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > scrollY && window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[4.5rem] z-50 transition-all duration-300 ${
        isVisible
          ? "bg-[#AC7771] opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="max-w-[80rem] mx-auto px-4 h-full flex justify-between items-center">
        <img
          src={PigLogo}
          alt="Logo da suinocultura familiar"
          className="h-[5rem] sm:h-[6rem] md:h-[7rem] object-contain"
        />

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex gap-4 sm:gap-6 items-center ml-auto text-sm sm:text-base`}
        >
          {[
            { to: "banner", label: "Início" },
            { to: "objective", label: "Sobre o Estudo" },
            { to: "better-practices", label: "Boas Práticas" },
            { to: "biosecurity", label: "Biossegurança" },
            { to: "structure", label: "Ambiente e Estrutura" },
            { to: "vaccination", label: "Vacinação e Vermifugação" },
            { to: "about-us", label: "Sobre Nós" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={400}
                offset={-72}
                className="cursor-pointer text-white hover:text-[#D1A49E] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-between items-center w-8 h-8 space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>
        </button>
      </nav>
    </header>
  );
}

export { NavBar };
