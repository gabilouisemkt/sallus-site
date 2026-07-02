export default function About() {
  return (
    <section className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[460px] overflow-hidden rounded-[36px] border border-[#CCAE57]/30 bg-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(204,174,87,0.22),transparent_35%)]" />
          <div className="absolute inset-8 rounded-[28px] border border-[#CCAE57]/20" />
          <div className="relative flex h-full min-h-[460px] items-center justify-center p-8">
            <p className="text-center text-zinc-500">Foto do espaço da Sallus</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[5px] text-[#CCAE57]">
            Sobre a Sallus
          </p>

          <h2 className="max-w-xl font-serif text-4xl leading-tight md:text-6xl">
            Mais que beleza, uma experiência de autocuidado.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            A Sallus Esmalteria nasceu para oferecer cuidado, elegância e
            bem-estar em cada atendimento.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-300">
            Um espaço pensado para mulheres que valorizam beleza, conforto,
            acabamento impecável e uma experiência acolhedora do início ao fim.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border-l border-[#CCAE57] pl-5">
              <p className="text-2xl font-serif text-[#CCAE57]">01</p>
              <p className="mt-2 text-sm text-zinc-300">Atendimento cuidadoso</p>
            </div>

            <div className="border-l border-[#CCAE57] pl-5">
              <p className="text-2xl font-serif text-[#CCAE57]">02</p>
              <p className="mt-2 text-sm text-zinc-300">Ambiente elegante</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}