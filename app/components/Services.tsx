const services = [
  {
    title: "Design de Sobrancelhas",
    description:
      "Design pensado para valorizar o olhar com naturalidade e simetria.",
  },
  {
    title: "Esmaltação em Gel",
    description:
      "Brilho intenso, secagem imediata e acabamento duradouro.",
  },
  {
    title: "Blindagem",
    description:
      "Mais resistência para unhas naturais, com acabamento leve e elegante.",
  },
  {
    title: "Alongamento",
    description:
      "Unhas alongadas com sofisticação, estrutura e acabamento impecável.",
  },
  {
    title: "Cuticulagem Russa",
    description:
      "Técnica precisa para um acabamento limpo, delicado e refinado.",
  },
  {
    title: "Manicure e Pedicure",
    description:
      "Cuidado completo para mãos e pés com atenção aos detalhes.",
  },
  {
    title: "Extensão de Cílios",
    description:
      "Olhar marcante, elegante e personalizado para o seu estilo.",
  },
  {
    title: "Harmonização Podal",
    description:
      "Cuidado especializado para saúde, conforto e beleza dos pés.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-[#F7F4EE] px-6 py-24 text-[#050505]"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs uppercase tracking-[5px] text-[#CCAE57]">
          Nossos serviços
        </p>

        <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Cuidado completo para realçar sua beleza.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[28px] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#CCAE57]/60 hover:shadow-xl"
            >
              <div className="mb-8 h-px w-12 bg-[#CCAE57]" />

              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>

              <p className="mt-8 text-sm font-medium text-[#CCAE57]">
                Saiba mais →
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}