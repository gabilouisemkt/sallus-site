const images = [
  "Esmaltação em Gel",
  "Alongamento",
  "Extensão de Cílios",
  "Sobrancelhas",
  "Harmonização Podal",
  "Manicure e Pedicure",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-[#F7F4EE] px-6 py-24 text-[#050505]"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs uppercase tracking-[5px] text-[#CCAE57]">
          Galeria
        </p>

        <h2 className="max-w-3xl font-serif text-4xl md:text-6xl leading-tight">
          Resultados que falam por si.
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-600">
          Cada detalhe é pensado para entregar um acabamento impecável e uma
          experiência que valoriza sua beleza.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-3 auto-rows-[260px]">
          {images.map((item, index) => (
            <div
              key={item}
              className={`group relative overflow-hidden rounded-[30px] bg-zinc-900 ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-6 left-6">
                <p className="text-lg font-semibold text-white">{item}</p>
              </div>

              <div className="flex h-full items-center justify-center text-zinc-500">
                Foto
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}