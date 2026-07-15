const whatsappLink =
  "https://wa.me/5548984181611?text=" +
  encodeURIComponent(
    "Olá! Encontrei o site da Sallus e gostaria de tirar uma dúvida."
  );

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Sallus pelo WhatsApp"
      title="Falar pelo WhatsApp"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        backgroundColor: "#111111",
        color: "#CCAE57",
        border: "1px solid rgba(204, 174, 87, 0.8)",
        boxShadow:
          "0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(204, 174, 87, 0.25)",
      }}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path d="M19.11 17.35c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.91 2.91 4.63 4.08.65.28 1.15.45 1.54.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z" />

        <path d="M16.03 3C8.85 3 3 8.74 3 15.8c0 2.25.6 4.45 1.73 6.37L3 29l7.03-1.82a13.14 13.14 0 0 0 6 1.46h.01c7.18 0 13.03-5.74 13.03-12.8C29.07 8.74 23.22 3 16.03 3Zm0 23.47h-.01a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-4.17 1.08 1.11-4-.26-.41a10.47 10.47 0 0 1-1.65-5.58c0-5.88 4.91-10.66 10.95-10.66 6.03 0 10.94 4.78 10.94 10.66 0 5.88-4.91 10.67-10.95 10.67Z" />
      </svg>
    </a>
  );
}