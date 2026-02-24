const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
    <rect x="2" y="4" width="20" height="16" rx="2" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#181a24] px-4 py-12 text-[#d4daf0]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,92,231,0.12)_0%,transparent_70%)]" />

      <main className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <img
          className="h-auto w-64 mb-5"
          src="/logo.png"
          alt="Logo uPixel"
          width={256}
          height="auto"
        />

        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
          Estamos em Manutenção
        </h2>

        <p className="mb-10 max-w-md text-[#7a829e]">
          Nossos servidores estão passando por uma manutenção programada.
          Voltaremos em breve com tudo funcionando perfeitamente!
        </p>

        <a
          href="https://discord.gg/XyDXPmvSWX"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-2.5 rounded-lg bg-[#5865F2] px-6 py-3 font-semibold text-white transition-all hover:brightness-110"
        >
          <DiscordIcon />
          Junte-se ao Discord
        </a>

        <a
          href="mailto:suporte@upixel.store"
          className="inline-flex items-center gap-2 text-sm text-[#7a829e] transition-colors hover:text-[#d4daf0]"
        >
          <MailIcon />
          suporte@upixel.store
        </a>
      </main>
    </div>
  );
}
