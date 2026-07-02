"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whatsappLink =
  "https://wa.me/5548984181611?text=" +
  encodeURIComponent(
    "Olá! Encontrei o site da Sallus e gostaria de agendar um horário."
  );
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(204,174,87,0.18),transparent_35%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Image
          src="/images/logo-sallus.png"
          alt="Logo Sallus"
          width={180}
          height={70}
          priority
        />

        <nav className="hidden gap-8 text-xs uppercase tracking-[3px] text-zinc-300 md:flex">
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-[#ccae57] px-5 py-2 text-xs uppercase tracking-[2px] text-[#ccae57] md:block"
        >
          Agendar
        </a>
      </header>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[5px] text-[#ccae57]">
            Beleza que realça sua essência
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Sua beleza
            <br />
            <span className="text-[#ccae57]">em cada detalhe.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
            Unhas, sobrancelhas, cílios e harmonização podal em uma experiência
            elegante, acolhedora e pensada para valorizar você.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#ccae57] px-8 py-4 text-center font-semibold text-black transition hover:scale-[1.02]"
            >
              Agendar pelo WhatsApp
            </a>

            <a
              href="#servicos"
              className="rounded-full border border-[#ccae57] px-8 py-4 text-center font-semibold text-[#ccae57] transition hover:scale-[1.02]"
            >
              Conhecer serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative min-h-[430px] overflow-hidden rounded-[40px] border border-[#ccae57]/30 bg-zinc-900 lg:min-h-[620px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#ccae57]/25 via-transparent to-black" />
          <div className="absolute inset-8 rounded-[32px] border border-[#ccae57]/20" />
          <div className="relative flex h-full min-h-[430px] items-center justify-center p-8 lg:min-h-[620px]">
            <p className="max-w-xs text-center text-zinc-500">
              Aqui entra a imagem editorial da Sallus
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}