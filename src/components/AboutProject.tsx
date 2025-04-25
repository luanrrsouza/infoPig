import PigFarm from "../assets/images/fazenda-suinocultura.jpg";
import ModelPigFarm from "../assets/images/fazenda2.jpg";

function AboutProject() {
  return (
    <main
      id="objective"
      className="my-[10rem] max-w-[96rem] mx-auto flex flex-col gap-[8rem]"
    >
      <section className="flex flex-col md:flex-row items-stretch gap-[3rem]">
        <div className="w-full md:w-1/2">
          <img
            src={PigFarm}
            alt="Fazenda com criação de suínos"
            className="rounded-[2rem] shadow-lg w-full object-cover max-h-[21.875rem] h-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[5rem] font-heading mb-[1rem] text-[#AC7771]">
            Sobre o Projeto
          </h2>
          <p className="text-[1.125rem] leading-relaxed">
            Analisamos a infraestrutura física e sanitária de pequenas
            propriedades suinícolas nos municípios de Ingá e Serra Redonda (PB),
            identificando a relação entre essas condições e os indicadores de
            desempenho produtivo, bem-estar animal e sustentabilidade na
            agricultura familiar.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-stretch gap-[3rem]">
        <div className="w-full md:w-1/2">
          <img
            src={ModelPigFarm}
            alt="Miniatura de modelo de fazenda com suínos"
            className="rounded-[2rem] shadow-lg w-full object-cover max-h-[25rem] h-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[5rem] font-heading mb-[1rem] text-[#AC7771]">
            CONTEXTUALIZAÇÃO
          </h2>
          <p className="text-[1.125rem] leading-relaxed">
            Os municípios de Ingá e Serra Redonda, localizados no Agreste
            Paraibano, têm na agropecuária a base de sua economia, com destaque
            para a agricultura familiar. Nessas regiões, a suinocultura é
            praticada principalmente em pequenas propriedades rurais, sendo uma
            importante fonte de renda e sustento.
          </p>
          <p className="text-[1.125rem] leading-relaxed mt-[1rem]">
            Apesar do potencial da atividade, os produtores locais enfrentam
            desafios como infraestrutura precária, baixo investimento
            tecnológico e limitações em práticas de manejo e saneamento. Esses
            fatores impactam diretamente a produtividade e o bem-estar animal,
            reforçando a necessidade de estudos que avaliem e proponham
            melhorias para a suinocultura regional.
          </p>
        </div>
      </section>
    </main>
  );
}

export { AboutProject };
