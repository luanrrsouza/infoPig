import { useEffect, useState } from "react";
import PigLogo from "../assets/images/pigLogo.png";
import { Link } from "react-scroll";

function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > scrollY && window.scrollY > 3.125 * 16) {
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
      <nav className="max-w-[80rem] mx-auto px-[1rem] h-full flex justify-between items-center relative">
        <img
          src={PigLogo}
          alt="Logo da suinocultura familiar"
          className="h-[11rem]"
        />
        <ul className="flex gap-[1.5rem] items-center ml-auto text-[1rem]">
          <li>
            <Link
              to="banner"
              smooth={true}
              duration={400}
              offset={-4.375 * 16}
              className="cursor-pointer text-white hover:text-[#D1A49E]"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="objective"
              smooth={true}
              duration={400}
              offset={-4.375 * 16}
              className="cursor-pointer text-white hover:text-[#D1A49E]"
            >
              Sobre o Estudo
            </Link>
          </li>
          <li>
            <Link
              to="better-practices"
              smooth={true}
              duration={400}
              offset={-4.375 * 16}
              className="cursor-pointer text-white hover:text-[#D1A49E]"
            >
              Boas Práticas
            </Link>
          </li>
          <li>
            <Link
              to="biosecurity"
              smooth={true}
              duration={400}
              offset={-4.375 * 16}
              className="cursor-pointer text-white hover:text-[#D1A49E]"
            >
              Biossegurança
            </Link>
          </li>
          <li>
            <Link
              to="structure"
              smooth={true}
              duration={400}
              offset={-4.375 * 16}
              className="cursor-pointer text-white hover:text-[#D1A49E]"
            >
              Ambiente e Estrutura
            </Link>
          </li>
          <li>
            <Link
              to="about-us"
              smooth={true}
              duration={400}
              offset={-4.375 * 16}
              className="cursor-pointer text-white hover:text-[#D1A49E]"
            >
              Sobre Nós
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { NavBar };
