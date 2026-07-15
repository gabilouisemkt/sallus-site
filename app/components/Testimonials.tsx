"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://cdn.trustindex.io/loader.js?b1f227c7618e815de136e2c5e81";
    script.async = true;
    script.defer = true;

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[5px] text-[#CCAE57]">
            Avaliações
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Quem conhece a Sallus recomenda.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-zinc-400">
            Confira as experiências compartilhadas por nossas clientes no
            Google.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[30px] bg-white p-4 text-black shadow-2xl md:p-8">
          <div
            ref={widgetRef}
            className="min-h-[250px] w-full"
            aria-label="Avaliações da Sallus no Google"
          />
        </div>
      </div>
    </section>
  );
}