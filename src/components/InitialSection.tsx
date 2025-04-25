import { ChevronDown } from "lucide-react";
import Piggs from "../assets/images/piggs.jpg";
import { Button } from "./ui/button";
import { Link } from "react-scroll";

function HomeSection() {
  return (
    <section id="banner" className="relative h-[40rem] w-full">
      <img
        src={Piggs}
        alt="Imagem de porquinhos em ambiente rural"
        className="h-full w-full object-cover opacity-85"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-[1rem] pt-[13rem]">
        <h1 className="font-heading text-[2.5rem] md:text-[3.75rem] text-amber-50 drop-shadow-[0_0.1875rem_0.375rem_rgba(0,0,0,0.8)] leading-tight">
          SUINOCULTURA FAMILIAR <br />
          MANEJO E CONTROLE QUE FAZEM A DIFERENÇA NO SEMIÁRIDO.
        </h1>

        <Link
          to="objective"
          smooth={true}
          duration={400}
          offset={-4.375}
          className="mt-[2.5rem]"
        >
          <Button className="bg-[#D1A49E] text-white hover:bg-[#c08982] transition flex items-center gap-[0.5rem] h-[2.5rem] text-[1rem]">
            <ChevronDown size={20} />
            Saiba Mais
          </Button>
        </Link>
      </div>
    </section>
  );
}

export { HomeSection };
