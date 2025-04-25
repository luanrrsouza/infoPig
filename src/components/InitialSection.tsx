import { ChevronDown } from "lucide-react";
import Piggs from "../assets/images/piggs.jpg";
import { Button } from "./ui/button";
import { Link } from "react-scroll";

function HomeSection() {
  return (
    <section
      id="banner"
      className="relative h-[32rem] sm:h-[36rem] md:h-[40rem] w-full"
    >
      <img
        src={Piggs}
        alt="Imagem de porquinhos em ambiente rural"
        className="h-full w-full object-cover opacity-85"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-4 pt-32 sm:pt-40 md:pt-48">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-amber-50 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] leading-tight max-w-4xl">
          SUINOCULTURA FAMILIAR <br />
          MANEJO E CONTROLE QUE FAZEM A DIFERENÇA NO SEMIÁRIDO.
        </h1>

        <Link
          to="objective"
          smooth={true}
          duration={400}
          offset={-72}
          className="mt-10"
        >
          <Button className="bg-[#D1A49E] text-white hover:bg-[#c08982] transition flex items-center gap-2 h-10 sm:h-12 px-6 text-base sm:text-lg">
            <ChevronDown size={24} />
            Saiba Mais
          </Button>
        </Link>
      </div>
    </section>
  );
}

export { HomeSection };
