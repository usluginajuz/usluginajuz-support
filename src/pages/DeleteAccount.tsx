import {
  Clock,
  Headphones,
  Mail,
  ShieldCheck,
  Smartphone,
  SquareArrowOutUpRight,
  Trash2,
  UserX,
} from 'lucide-react';
import {
  Bullets,
  Card,
  CardHeader,
  NoteBox,
  Numbered,
  PageHero,
  PageShell,
  Para,
} from '../components/legal';
import { CONTACT_EMAIL } from '../lib/constants';

const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Usunięcie konta — Timelly')}`;

const deletedData = [
  'Dane konta — adres e‑mail, imię/nazwa, numer telefonu, rola użytkownika',
  'Profil firmy (wraz z usługami, godzinami pracy i przerwami)',
  'Zlecenia dodane przez Ciebie oraz powiązane załączniki i zdjęcia',
  'Polubienia i lista ulubionych',
  'Aktywne i przyszłe rezerwacje — zostaną anulowane',
];

const retainedData = [
  'Techniczne logi systemowe i kopie zapasowe (przechowywane tymczasowo przez Supabase)',
  'Anonimowe rekordy statystyczne, których nie da się powiązać z danymi osobowymi',
  'Informacje wymagane prawem (np. dokumentacja księgowa, jeżeli dotyczy)',
];

const timelineSteps = [
  { label: 'Potwierdzenie przyjęcia wniosku', value: 'do 7 dni roboczych' },
  { label: 'Usunięcie danych operacyjnych', value: 'do 14 dni od potwierdzenia' },
  { label: 'Pełne usunięcie z kopii zapasowych', value: 'do 30 dni (cykl retencji)' },
];

export default function DeleteAccount() {
  return (
    <PageShell>
      <PageHero
        icon={UserX}
        tone="danger"
        title="Usuwanie konta"
        subtitle="Dowiedz się jak usunąć konto i jakie dane zostaną usunięte."
      />

      <Card>
        <CardHeader icon={Smartphone} title="Sposób 1 — w aplikacji" />
        <Para>
          Otwórz aplikację Timelly, przejdź do zakładki <strong>Profil</strong>, następnie kliknij
          ikonę <strong>Ustawienia</strong> (⚙️) i na dole strony znajdziesz opcję{' '}
          <strong>Usuń konto</strong>.
        </Para>
        <Para muted>
          Zostaniesz poproszony o potwierdzenie — po zatwierdzeniu proces usunięcia rozpocznie się
          automatycznie.
        </Para>
      </Card>

      <Card>
        <CardHeader icon={Mail} title="Sposób 2 — przez e‑mail" />
        <div className="space-y-4">
          {[
            <>
              Wyślij wiadomość z adresu powiązanego z Twoim kontem na:{' '}
              <a href={MAILTO} className="font-semibold text-ink underline-offset-2 hover:underline dark:text-accent">
                {CONTACT_EMAIL}
              </a>
            </>,
            <>
              W temacie wpisz <strong>„Usunięcie konta — Timelly"</strong>, a w treści podaj
              imię/nazwę profilu oraz numer telefonu (jeśli był zapisany).
            </>,
            <>
              Po potwierdzeniu tożsamości rozpoczniemy procedurę trwałego usunięcia konta i danych.
            </>,
          ].map((content, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink/10 text-sm font-extrabold text-ink dark:bg-accent/15 dark:text-accent">
                {i + 1}
              </span>
              <p className="flex-1 text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200">
                {content}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardHeader icon={Trash2} title="Dane, które zostaną usunięte" />
        <Bullets items={deletedData} />
      </Card>

      <Card>
        <CardHeader icon={ShieldCheck} title="Co może pozostać" />
        <Para muted>Uzasadniony interes i rozliczalność:</Para>
        <Bullets items={retainedData} muted />
        <Para muted>
          Kopie zapasowe są nadpisywane zgodnie z cyklem retencji dostawcy i nie są używane
          operacyjnie.
        </Para>
      </Card>

      <Card>
        <CardHeader icon={Clock} title="Terminy realizacji" />
        <Numbered
          items={timelineSteps.map((s) => ({ title: s.label, desc: s.value }))}
        />
        <NoteBox>
          W okresie do 7 dni od potwierdzenia możesz poprosić o cofnięcie usuwania. Po tym czasie
          proces jest nieodwracalny.
        </NoteBox>
      </Card>

      <Card>
        <CardHeader icon={Headphones} title="Kontakt" />
        <Para>W razie pytań skontaktuj się z nami:</Para>
        <a
          href={MAILTO}
          className="mt-2 flex items-center gap-2.5 rounded-xl border border-black/10 bg-white px-4 py-3.5 transition-colors hover:border-black/25 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/35"
        >
          <Mail className="h-4 w-4 text-ink dark:text-accent" />
          <span className="flex-1 text-[15px] font-semibold text-ink dark:text-accent">
            {CONTACT_EMAIL}
          </span>
          <SquareArrowOutUpRight className="h-3.5 w-3.5 text-neutral-400" />
        </a>
      </Card>
    </PageShell>
  );
}
