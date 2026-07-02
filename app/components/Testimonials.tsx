const testimonials = [
  {
    name: "Cliente Sallus",
    text: "Atendimento impecável, ambiente lindo e resultado perfeito. Amei cada detalhe!",
  },
  {
    name: "Cliente Sallus",
    text: "Minha esmaltação ficou maravilhosa e durou muito. Experiência excelente!",
  },
  {
    name: "Cliente Sallus",
    text: "Profissionais cuidadosas, espaço acolhedor e um acabamento impecável.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs uppercase tracking-[5px] text-[#CCAE57]">
          Avaliações
        </p>

        <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Quem conhece a Sallus recomenda.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.text}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8"
            >
              <p className="text-[#CCAE57]">★★★★★</p>

              <p className="mt-6 leading-7 text-zinc-300">“{item.text}”</p>

              <p className="mt-8 font-semibold text-white">{item.name}</p>

              <p className="mt-1 text-sm text-zinc-500">Avaliação Google</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}