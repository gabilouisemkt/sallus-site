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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(204,174,87,0.16),transparent_38%)]" />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Image
          src="/images/logo-sallus.png"
          alt="Logo Sallus"
          width={180}
          height={70}
          priority
        />

        <nav className="hidden gap-8 text-xs uppercase tracking-[3px] text-zinc-300 md:flex">
          <a
            href="#servicos"
            className="transition hover:text-[#ccae57]"
          >
            Serviços
          </a>

          <a
            href="#galeria"
            className="transition hover:text-[#ccae57]"
          >
            Galeria
          </a>

          <a
            href="#contato"
            className="transition hover:text-[#ccae57]"
          >
            Contato
          </a>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-[#ccae57] px-5 py-2 text-xs uppercase tracking-[2px] text-[#ccae57] transition hover:bg-[#ccae57] hover:text-black md:block"
        >
          Agendar
        </a>
      </header>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] max-w-[1440px] items-center gap-12 px-6 pb-12 pt-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
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
              className="rounded-full bg-[#ccae57] px-8 py-4 text-center font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(204,174,87,0.25)]"
            >
              Agendar pelo WhatsApp
            </a>

            <a
              href="#servicos"
              className="rounded-full border border-[#ccae57] px-8 py-4 text-center font-semibold text-[#ccae57] transition duration-300 hover:-translate-y-1 hover:bg-[#ccae57] hover:text-black"
            >
              Conhecer serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, delay: 0.15 }}
          className="relative min-h-[460px] overflow-hidden rounded-[36px] lg:min-h-[680px]"
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

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/10" />
        </motion.div>
      </div>
    </section>
  );
}