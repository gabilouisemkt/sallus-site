export default function CTA() {
  return (
    <section id="contato" className="bg-[#F7F4EE] px-6 py-24 text-[#050505]">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[5px] text-[#CCAE57]">
          Agende seu horário
        </p>

        <h2 className="font-serif text-4xl leading-tight md:text-7xl">
          Pronta para realçar sua beleza?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-zinc-600">
          Fale com a Sallus pelo WhatsApp e escolha o melhor horário para cuidar
          de você.
        </p>

        <a
          href="https://wa.me/5548984181611"
          target="_blank"
          className="mt-10 inline-block rounded-full bg-[#CCAE57] px-10 py-4 font-semibold text-black transition hover:scale-[1.02]"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}