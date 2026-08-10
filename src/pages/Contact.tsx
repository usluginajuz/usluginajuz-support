import {
  ChevronRight,
  FileText,
  Info,
  Mail,
  Phone,
  ShieldCheck,
  SquareArrowOutUpRight,
  UserX,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, PageHero, PageShell } from '../components/legal';
import { CONTACT_EMAIL } from '../lib/constants';

const CONTACT_PHONE = '+48577544977';

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="mb-3 flex w-full max-w-[500px] items-center gap-4 rounded-2xl border border-black/10 bg-neutral-50 p-5 transition-colors hover:border-black/25 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink/10 dark:bg-accent/15">
        <Icon className="h-5 w-5 text-ink dark:text-accent" />
      </div>
      <div className="flex-1">
        <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          {label}
        </p>
        <p className="text-[17px] font-bold text-ink dark:text-white">{value}</p>
      </div>
      <SquareArrowOutUpRight className="h-3.5 w-3.5 text-neutral-400" />
    </a>
  );
}

function InfoLink({ icon: Icon, label, to }: { icon: LucideIcon; label: string; to: string }) {
  return (
    <Link to={to} className="flex items-center gap-3 px-1 py-3.5">
      <span className="flex w-[22px] justify-center">
        <Icon className="h-4 w-4 text-ink dark:text-accent" />
      </span>
      <span className="flex-1 text-[15px] font-semibold text-ink dark:text-accent">{label}</span>
      <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
    </Link>
  );
}

export default function Contact() {
  return (
    <PageShell>
      <PageHero
        icon={Mail}
        title="Kontakt"
        subtitle="Masz pytanie, sugestię lub potrzebujesz pomocy? Chętnie pomożemy."
      />

      <ContactCard
        icon={Mail}
        label="E‑mail"
        value={CONTACT_EMAIL}
        href={`mailto:${CONTACT_EMAIL}`}
      />
      <ContactCard
        icon={Phone}
        label="Telefon"
        value={CONTACT_PHONE}
        href={`tel:${CONTACT_PHONE}`}
      />

      <div className="mt-2 w-full max-w-[500px]">
        <Card>
          <CardHeader icon={Info} title="Przydatne linki" />
          <div className="divide-y divide-black/10 dark:divide-white/10">
            <InfoLink icon={ShieldCheck} label="Polityka Prywatności" to="/privacy-policy" />
            <InfoLink icon={FileText} label="Regulamin" to="/terms" />
            <InfoLink icon={UserX} label="Usuwanie konta" to="/delete-account" />
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
