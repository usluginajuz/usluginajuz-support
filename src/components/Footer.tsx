import { Link } from 'react-router-dom';

const links = [
  { to: '/contact', label: 'Kontakt' },
  { to: '/terms', label: 'Regulamin' },
  { to: '/privacy-policy', label: 'Polityka Prywatności' },
  { to: '/delete-account', label: 'Usuń konto' },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-neutral-50 dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-ink dark:text-neutral-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs tracking-wide text-neutral-500 dark:text-neutral-500">
          © 2026 Timelly. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
