import Image from "next/image";

const whatsappLink =
  "https://wa.me/5548984181611?text=" +
  encodeURIComponent(
    "Olá! Encontrei o site da Sallus e gostaria de agendar um horário."
  );

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo-sallus.png"
              alt="Logo Sallus"
              width={170}
              height={70}
              className="h-auto object-contain"
            />

            <p className="mt-6 text-sm leading-7 text-zinc-400">
              Um espaço pensado para valorizar sua beleza com conforto,
              sofisticação e atendimento personalizado.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-[#CCAE57]">
              Contato
            </h3>

            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:text-[#CCAE57]"
                >
                  (48) 98418-1611
                </a>
              </li>

              <li>São José • SC</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-[#CCAE57]">
              Redes Sociais
            </h3>

            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <a
                  href="https://www.instagram.com/sallusesmalteria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:text-[#CCAE57]"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 hover:text-[#CCAE57]"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          © 2026 Sallus Esmalteria • Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}