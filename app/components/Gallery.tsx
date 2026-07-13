import Image from "next/image";

const images = [
  {
    title: "Esmaltação em Gel",
    image: "/images/esmaltação.jpeg",
    position: "center 30%",
    size: "md:col-span-2 lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Alongamento",
    image: "/images/alongamentonovo.jpeg",
    position: "center 40%",
    size: "lg:col-span-5",
  },
  {
    title: "Extensão de Cílios",
    image: "/images/cilios.jpeg",
    position: "center 50%",
    size: "lg:col-span-5",
  },
  {
    title: "Pedicure",
    image: "/images/pedicurenovo.jpeg",
    position: "center 38%",
    size: "lg:col-span-4 lg:row-span-2",
  },
  {
    title: "Sobrancelhas",
    image: "/images/sobrancelhas.jpeg",
    position: "center top",
    size: "lg:col-span-4",
  },
  {
    title: "Harmonização Podal",
    image: "/images/podal.jpeg",
    position: "center 30%",
    size: "lg:col-span-4",
  },
  {
    title: "Manicure",
    image: "/images/manicurenovo.png",
    position: "center 60%",
    size: "md:col-span-2 lg:col-span-8",
    scale: 1,
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-[#F7F4EE] px-6 py-24 text-[#050505]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[5px] text-[#CCAE57]">
              Portfólio
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Nossos trabalhos.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-600 md:text-right">
            Cada detalhe reflete o cuidado, a técnica e a dedicação presentes
            em cada atendimento.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[230px] gap-5 md:grid-cols-2 md:auto-rows-[250px] lg:grid-cols-12">
          {images.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[30px] bg-zinc-900 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${item.size}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                style={{
                  objectPosition: item.position,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <div className="mb-3 h-px w-10 bg-[#CCAE57] transition-all duration-500 group-hover:w-16" />

                <h3 className="font-serif text-xl text-white md:text-2xl">
                  {item.title}
                </h3>
              </div>

              <div className="pointer-events-none absolute inset-3 rounded-[23px] border border-white/0 transition duration-500 group-hover:border-white/20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}