import {
  BatteryFull,
  Download,
  QrCode,
  RadioTower,
  ShieldCheck,
  ToggleRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, PageHero, PageShell } from '../components/legal';

const APK_URL = '/downloads/timelly-bramka.apk';

// ── Kroki instalacji ──
const steps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Download,
    title: 'Pobierz aplikację',
    description:
      'Kliknij przycisk pobierania na tej stronie (na telefonie firmowym z Androidem 10 lub nowszym). Przeglądarka może ostrzec, że plik pochodzi spoza Sklepu Play. To normalne: aplikacja wymaga uprawnień, których Sklep Play nie udostępnia zwykłym aplikacjom.',
  },
  {
    icon: ShieldCheck,
    title: 'Zezwól na instalację',
    description:
      'Otwórz pobrany plik. Jeśli pojawi się komunikat Play Protect, wybierz „Zainstaluj mimo to". Na Androidzie 15 i 16 po instalacji wejdź w Ustawienia → Aplikacje → Timelly Bramka → menu ⋮ → „Zezwól na ustawienia z ograniczeniami".',
  },
  {
    icon: QrCode,
    title: 'Sparuj z firmą',
    description:
      'W aplikacji Timelly (na swoim koncie firmowym) wejdź w Ustawienia → SMS → „Sparuj telefon" i przepisz 6-cyfrowy kod do aplikacji Timelly Bramka.',
  },
  {
    icon: ToggleRight,
    title: 'Włącz role telefonu',
    description:
      'W Timelly Bramka wybierz, do czego służy ten telefon: wysyłanie SMS-ów do klientów (z Twojej karty SIM) i wykrywanie połączeń przychodzących. Wykrywanie podpowiada numer dzwoniącego przy umawianiu wizyty, a jeśli włączysz to w Timelly, wysyła też SMS do klienta, gdy nikt nie odbierze telefonu.',
  },
  {
    icon: BatteryFull,
    title: 'Wyłącz optymalizację baterii',
    description:
      'Aplikacja poprosi o wyłączenie optymalizacji baterii. Bez tego system może usypiać bramkę i opóźniać wysyłkę. Na telefonach Xiaomi, Huawei i Oppo włącz dodatkowo Autostart i przypnij aplikację na liście ostatnich aplikacji. W Ustawienia → Aplikacje → Timelly Bramka wyłącz też „Wstrzymuj aktywność w aplikacji, jeśli jest nieużywana" — inaczej Android po kilku miesiącach sam zabierze uprawnienia aplikacji, której nikt nie otwiera.',
  },
];

const notes = [
  'Jeśli telefon będzie niedostępny (offline albo rozładowany), SMS-y automatycznie wyślą się przez bramkę Timelly, więc klient zawsze dostanie wiadomość.',
  'Wysyłka z własnej karty SIM podlega regulaminowi Twojego operatora. Przy typowych ilościach powiadomień (przypomnienia o wizytach) nie stanowi to problemu, ale za zgodność z umową z operatorem odpowiada firma.',
  'Numery dzwoniących klientów przechowujemy maksymalnie 7 dni i służą wyłącznie podpowiedzi przy umawianiu wizyty.',
  'Android nie przekazuje aplikacjom połączeń od numerów zapisanych w kontaktach telefonu. Wykrywanie działa więc dla numerów spoza kontaktów, czyli głównie dla nowych klientów. To ograniczenie systemu, nie aplikacji.',
  'Telefon możesz odłączyć w każdej chwili: w aplikacji Timelly Bramka albo w Ustawieniach SMS w Timelly.',
];

export default function Bramka() {
  return (
    <PageShell>
      <PageHero
        icon={RadioTower}
        title="Timelly Bramka"
        subtitle="Aplikacja pomocnicza na firmowy telefon z Androidem — dla firm korzystających z Timelly. Zainstaluj ją i sparuj z kontem firmowym według poniższych kroków."
      />

      {/* ── Download ── */}
      <a
        href={APK_URL}
        className="flex items-center gap-3 rounded-2xl bg-ink px-8 py-4 text-[17px] font-bold text-white shadow-lg shadow-ink/25 transition-transform hover:scale-[1.02] dark:bg-accent dark:text-ink"
      >
        <Download className="h-5 w-5" />
        Pobierz aplikację (APK)
      </a>
      <p className="mb-6 mt-2.5 max-w-[480px] px-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
        Android 10 lub nowszy · instalacja poza Sklepem Play · aplikacja działa wyłącznie po
        sparowaniu z kontem firmowym Timelly
      </p>

      {/* ── Steps ── */}
      <div className="w-full max-w-[560px]">
        <Card>
          <h2 className="mb-4 text-lg font-bold text-ink dark:text-white">
            Instalacja krok po kroku
          </h2>
          <div className="space-y-4.5">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink/10 dark:bg-accent/15">
                  <step.icon className="h-[18px] w-[18px] text-ink dark:text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-[15px] font-bold text-ink dark:text-white">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* ── FAQ / uwagi ── */}
        <Card>
          <h2 className="mb-3 text-lg font-bold text-ink dark:text-white">Warto wiedzieć</h2>
          <ul className="space-y-2">
            {notes.map((note, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400"
              >
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink dark:bg-accent" />
                {note}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </PageShell>
  );
}
