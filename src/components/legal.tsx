import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

/**
 * Shared building blocks for the functional/legal pages
 * (terms, privacy-policy, delete-account, contact, bramka, auth screens).
 */

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center px-5 pb-16 pt-24">{children}</div>
  );
}

export function PageHero({
  icon: Icon,
  title,
  subtitle,
  tone = 'primary',
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: ReactNode;
  tone?: 'primary' | 'danger';
}) {
  const iconColor = tone === 'danger' ? 'text-accent' : 'text-ink dark:text-accent';
  return (
    <div className="mb-8 flex w-full max-w-[600px] flex-col items-center text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-ink/10 dark:bg-accent/15">
        <Icon className={`h-7 w-7 ${iconColor}`} />
      </div>
      <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-ink dark:text-white">
        {title}
      </h1>
      {subtitle ? (
        <p className="text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function Card({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className="mb-4 w-full max-w-[600px] rounded-2xl border border-black/10 bg-neutral-50 p-6 dark:border-white/10 dark:bg-white/5"
    >
      {children}
    </section>
  );
}

export function CardHeader({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink/10 dark:bg-accent/15">
        <Icon className="h-[18px] w-[18px] text-ink dark:text-accent" />
      </div>
      <h2 className="text-lg font-bold text-ink dark:text-white">{title}</h2>
    </div>
  );
}

export function Bullets({ items, muted = false }: { items: ReactNode[]; muted?: boolean }) {
  return (
    <ul className="mb-2 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span
            className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${
              muted ? 'bg-neutral-400 dark:bg-neutral-500' : 'bg-ink dark:bg-accent'
            }`}
          />
          <span className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Numbered({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="space-y-3.5">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink/10 text-[13px] font-extrabold text-ink dark:bg-accent/15 dark:text-accent">
            {i + 1}
          </span>
          <div>
            <p className="text-[15px] font-bold text-ink dark:text-white">{item.title}</p>
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-ink/20 bg-ink/5 p-3.5 dark:border-accent/25 dark:bg-accent/10">
      <svg
        viewBox="0 0 24 24"
        className="mt-0.5 h-4 w-4 shrink-0 text-ink dark:text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
      <p className="text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-300">
        {children}
      </p>
    </div>
  );
}

export function Para({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return (
    <p
      className={`mb-2 text-[15px] leading-relaxed ${
        muted ? 'text-neutral-500 dark:text-neutral-400' : 'text-neutral-800 dark:text-neutral-200'
      }`}
    >
      {children}
    </p>
  );
}

export function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-2.5 mt-4 text-[15px] font-bold text-ink dark:text-white">{children}</h3>
  );
}
