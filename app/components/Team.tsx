import Image from "next/image";

const highlights = [
  {
    number: "01",
    title: "Técnica",
    description: "Procedimentos realizados com atenção e precisão.",
  },
  {
    number: "02",
    title: "Cuidado",
    description: "Atendimento acolhedor e pensado para cada cliente.",
  },
  {
    number: "03",
    title: "Dedicação",
    description: "Compromisso com qualidade, beleza e bem-estar.",
  },
];

export default function Team() {
  return (
    <section
      id="equipe"
      className="bg-[#F7F4EE] px-6 py-24 text-[#050505]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* FOTO DA EQUIPE SEM CORTE */}
        <div className="relative w-full overflow-hidden rounded-[36px] border border-black/10 bg-[#EEEAE2] shadow-xl">
          <Image
            src="/images/EQUIPE.png"
            alt="Equipe da Sallus Esmalteria"
            width={1200}
            height={1600}
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="h-auto w-full object-contain"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

          <div className="pointer-events-none absolute inset-4 rounded-[28px] border border-white/25" />
        </div>

        {/* TEXTO */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[5px] text-[#9A7D2E]">
            Nossa Equipe
          </p>

          <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
            Profissionais que cuidam de cada detalhe.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
            Na Sallus, cada atendimento é realizado por uma equipe comprometida
            em proporcionar uma experiência acolhedora, cuidadosa e
            personalizada.
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Unimos técnica, dedicação e carinho para que cada cliente se sinta
            confortável, valorizada e confiante durante todo o atendimento.
          </p>

          <div className="mt-12 grid gap-7 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 border-l border-[#CCAE57] pl-5 sm:block lg:grid lg:grid-cols-[70px_1fr]"
              >
                <p className="font-serif text-2xl text-[#9A7D2E]">
                  {item.number}
                </p>

                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}