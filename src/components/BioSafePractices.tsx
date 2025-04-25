import PigBackGround from "../assets/images/pigg-card-background.jpg";
import { FaSoap, FaPiggyBank, FaStethoscope } from "react-icons/fa";

function DisplaySanitaryGuidelines() {
  return (
    <main
      id="better-practices"
      className="my-[10rem] w-full mx-auto flex flex-col gap-[8rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${PigBackGround})` }}
    >
      <section className="w-full h-full bg-opacity-50">
        <div className="mx-40 flex justify-center items-center h-full">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full my-16">
            <h2 className="font-heading text-[5rem] mb-[1rem] text-[#AC7771]">
              MANEJO SANITÁRIO
            </h2>
            <p className="text-[1.125rem] leading-relaxed text-gray-800">
              O manejo sanitário é fundamental para garantir a saúde dos suínos
              e a qualidade da carne. Práticas como limpeza, controle de doenças
              e boas condições nas instalações impactam diretamente o bem-estar
              dos animais e os resultados da produção.
            </p>

            <section className="w-full px-8 py-12 bg-opacity-75 bg-white mt-1">
              <h3 className="text-5xl text-center font-heading mb-8 text-[#AC7771]">
                Boas Práticas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <FaSoap className="text-4xl text-blue-500 mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Higiene e Limpeza
                  </h4>
                  <p className="text-gray-600 text-sm">
                    A limpeza adequada das instalações reduz a presença de
                    agentes patogênicos e melhora a sanidade do ambiente,
                    promovendo segurança tanto para os animais quanto para o
                    produto final.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <FaPiggyBank className="text-4xl text-pink-500 mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Bem-Estar Animal
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ambientes confortáveis, com espaço adequado, ventilação e
                    manejo correto, garantem menos estresse aos animais, o que
                    se reflete em melhor crescimento e qualidade da carne.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <FaStethoscope className="text-4xl text-green-500 mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Controle de Doenças
                  </h4>
                  <p className="text-gray-600 text-sm">
                    A prevenção e o monitoramento sanitário são fundamentais
                    para evitar surtos, reduzir perdas e manter os suínos
                    saudáveis, aumentando o desempenho zootécnico da criação.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export { DisplaySanitaryGuidelines };
