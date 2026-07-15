import Image from "next/image";

const highlights = [
  "Atendimento humanizado",
  "Ambiente sofisticado",
  "Profissionais especializados",
  "Produtos de alta qualidade",
];

export default function About() {
  return (
    <section
      id="historia"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* FOTO COMPLETA NO CELULAR */}
      <div className="relative aspect-[8/3] w-full md:hidden">
        <Image
          src="/images/espaco.png"
          alt="Espaço interno da Sallus Esmalteria"
          fill
          quality={95}
          sizes="100vw"
          className="object-contain"
          priority
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      {/* FOTO COMO FUNDO NO COMPUTADOR */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <Image
          src="/images/espaco.png"
          alt="Espaço interno da Sallus Esmalteria"
          fill
          quality={95}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 pb-20 pt-12 md:min-h-[850px] md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[6px] text-[#CCAE57]">
            Nossa História
          </p>

          <div className="mx-auto mb-8 h-px w-20 bg-[#CCAE57]" />

          <h2 className="font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
            Uma história construída com experiência,{" "}
            <span className="text-[#CCAE57]">
              cuidado e propósito.
            </span>
          </h2>

          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-zinc-200 md:text-lg">
            <p>
              Fundada em 2025, a Sallus Esmalteria nasceu da união da
              experiência de Emanuela Marques no segmento da beleza com a visão
              estratégica de Alvaro Pinheiro na área comercial.
            </p>

            <p>
              Ao identificarem a crescente demanda por um atendimento
              especializado em São José/SC, criaram um espaço dedicado à
              beleza, ao bem-estar e ao atendimento humanizado.
            </p>

            <p>
              Desde o primeiro dia, a Sallus tem como compromisso transformar
              cada atendimento em um momento de cuidado, autoestima e
              confiança, construindo relacionamentos duradouros baseados na
              qualidade, no respeito e na dedicação.
            </p>
          </div>
        </div>

        <div className="mt-16 grid border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-4 px-5 py-4 ${
                index !== 0 ? "lg:border-l lg:border-white/20" : ""
              }`}
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-[#CCAE57]" />

              <p className="text-sm uppercase leading-6 tracking-[2px] text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}