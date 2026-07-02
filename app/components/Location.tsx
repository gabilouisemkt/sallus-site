export default function Location() {
  return (
    <section id="localizacao" className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[5px] text-[#CCAE57]">
            Localização
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Venha conhecer a Sallus.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Estamos esperando você para viver uma experiência de beleza, cuidado
            e autocuidado.
          </p>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-[#CCAE57]">Endereço</p>

            <div className="mt-3 space-y-2 text-zinc-300">
              <p>📍 Rua Fúlvio Vieira da Rosa, 219</p>
              <p>Sala 03 - Barreiros</p>
              <p>São José - SC</p>
            </div>

            <a
              href="https://maps.google.com/?q=SALLUS+ESMALTERIA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-[#CCAE57] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Ver rota no Google Maps
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-[#CCAE57]/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.7216299967886!2d-48.60847!3d-27.5711485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952749be746c5ea5%3A0x3d898b82f2c4add2!2sSALLUS%20ESMALTERIA!5e0!3m2!1spt-BR!2sbr!4v1783019185534!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}