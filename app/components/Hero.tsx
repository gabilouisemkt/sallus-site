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
    <section className="relative min-h-screen overflow-hidden bg-[#CCAE57] text-[#111111]">
      {/* Iluminação suave no fundo dourado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.30),transparent_38%)]" />

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10" />

      {/* Faixa superior mais baixa */}
      <header className="relative z-20 h-[88px] w-full border-b border-white/10 bg-black/35 shadow-[0_8px_25px_rgba(0,0,0,0.20)] backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <Image
            src="/images/logo-sallus.png"
            alt="Logo Sallus"
            width={150}
            height={55}
            priority
            className="h-auto object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)]"
          />

          <nav className="hidden gap-8 text-xs uppercase tracking-[3px] text-white/80 md:flex">
            <a
              href="#servicos"
              className="transition duration-300 hover:text-[#CCAE57]"
            >
              Serviços
            </a>

            <a
              href="#galeria"
              className="transition duration-300 hover:text-[#CCAE57]"
            >
              Galeria
            </a>

            <a
              href="#contato"
              className="transition duration-300 hover:text-[#CCAE57]"
            >
              Contato
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#CCAE57] px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-black transition duration-300 hover:-translate-y-1 hover:bg-white md:block"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-[1440px] items-center gap-12 px-6 pb-12 pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="mb-5 text-xs uppercase tracking-[5px] text-black/70">
            Beleza que realça sua essência
          </p>

          <h1 className="font-serif text-5xl leading-tight text-black md:text-7xl">
            Sua beleza
            <br />

            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.20)]">
              em cada detalhe.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-black/75">
            Unhas, sobrancelhas, cílios e harmonização podal em uma experiência
            elegante, acolhedora e pensada para valorizar você.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-8 py-4 text-center font-semibold text-[#CCAE57] transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-xl"
            >
              Agendar pelo WhatsApp
            </a>

            <a
              href="#servicos"
              className="rounded-full border border-black px-8 py-4 text-center font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-[#CCAE57]"
            >
              Conhecer serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, delay: 0.15 }}
          className="relative min-h-[460px] overflow-hidden rounded-[36px] border border-black/20 bg-black/10 shadow-2xl lg:min-h-[680px]"
        >
          <Image
            src="/images/hero-sallus.webp.png"
            alt="Fachada da Sallus Esmalteria"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            style={{ objectPosition: "center center" }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/20" />
        </motion.div>
      </div>
    </section>
  );
}