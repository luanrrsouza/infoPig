import Luana from "../assets/images/luana.jpg";
import Rayanne from "../assets/images/Rayanne.jpg";
import Manu from "../assets/images/Manu.jpg";
import Kirsten from "../assets/images/Kirsten.jpg";
import Alana from "../assets/images/Alana.jpg";
import Luan from "../assets/images/luan.jpeg";

type Person = {
  name: string;
  description: string;
  image: string;
};

const team: Person[] = [
  {
    name: "Luana Amarante",
    description:
      "Graduanda de Medicina Veterinária na Faculdade Rebouças, atualmente no quarto período. Desde cedo, desenvolvi uma paixão genuína pelos animais, que se transformou em vocação. Hoje, sigo dedicada a aprimorar meus conhecimentos diariamente, com o sonho de construir uma carreira baseada no cuidado, na responsabilidade e no amor pelos animais.",
    image: Luana,
  },
  {
    name: "Rayanne Porto",
    description:
      "Graduanda do quarto período de Medicina Veterinária, apaixonada por animais desde a infância. Busco constantemente expandir meus conhecimentos em diversas áreas, visando uma formação sólida e uma atuação profissional de excelência.",
    image: Rayanne,
  },
  {
    name: "Emanuely Guedes",
    description:
      "Graduanda do 4º período de Medicina Veterinária na Faculdade Rebouças, em Campina Grande. Em busca constante de ampliar meus conhecimentos e habilidades para, no futuro, exercer a profissão com dedicação e competência, acreditando que, na ausência de palavras, o cuidado é a melhor resposta.",
    image: Manu,
  },
  {
    name: "Kirsten Bernardo",
    description:
      "Graduanda do 4º período de Medicina Veterinária, com grande interesse em expandir conhecimentos na área. Nos momentos livres, gosto de ler, ouvir música e assistir a séries e filmes, atividades que fazem parte da minha rotina e refletem minha personalidade.",
    image: Kirsten,
  },
  {
    name: "Alana Alice",
    description:
      "Graduanda do 4º período do curso de Medicina Veterinária na Faculdade Rebouças, em Campina Grande, Paraíba. Com dedicação e compromisso, construo minha trajetória acadêmica pautada pelo amor aos animais e pela busca constante de excelência na área da saúde animal.",
    image: Alana,
  },
  {
    name: "Luan Rodrigo",
    description:
      "Desenvolvedor FullStack, especialista em Java e TypeScript, apaixonado por tecnologia, história, arte e mágica. Em constante busca por conhecimento, unindo criatividade e inovação na construção de soluções eficientes.",
    image: Luan,
  },
];

function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-[#A9756F] py-[4rem] px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[8rem]"
    >
      <div className="max-w-[80rem] mx-auto">
        <h2 className="text-white text-[3rem] sm:text-[3rem] md:text-[3.5rem] font-heading text-center mb-[4rem]">
          QUEM SOMOS?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
          {team.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] shadow-lg p-[2rem] flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden mb-[1.5rem]">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#AC7771] mb-[0.5rem]">
                {person.name}
              </h3>
              <p className="text-gray-600 text-[0.875rem] md:text-[1rem]">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { AboutUs };
