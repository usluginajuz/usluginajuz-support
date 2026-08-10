import { Link } from 'react-router-dom';

/**
 * Fixed translucent header — Apple-style, blurred background.
 */
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a14]/70">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/icon.png" alt="Logo Timelly" className="h-8 w-8 rounded-lg" />
          <span className="text-[17px] font-semibold tracking-tight text-ink dark:text-white">
            Timelly
          </span>
        </Link>
        <a
          href="https://app.timelly.pl"
          className="rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 dark:bg-accent dark:text-ink"
        >
          Otwórz aplikację
        </a>
      </nav>
    </header>
  );
}
