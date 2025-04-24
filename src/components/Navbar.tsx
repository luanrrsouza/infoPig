import { useEffect, useState } from "react";
import PigLogo from "../assets/images/pigLogo.png";
import { Link } from "react-scroll";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[4.5rem] z-50 transition-all duration-300 ${
        scrolled ? "bg-[#AC7771] backdrop-blur shadow-md" : "bg-[#AC7771]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center relative">
        <img src={PigLogo} alt="Logo do porquinho" className="h-[8rem] " />

        <ul className="flex gap-6 items-center ml-auto">
          <li>
            <Link
              to="banner"
              smooth={true}
              duration={400}
              offset={-70}
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
              offset={-70}
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
              offset={-70}
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
              offset={-70}
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
              offset={-70}
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
              offset={-70}
              className="cursor-pointer  text-white hover:text-[#D1A49E]"
            >
              Sobre Nós
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { NavBar };
