import { Bike, ChevronDown, Dices, Plus, Scissors, UtensilsCrossed } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, type ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { PhoneFrame, TabletFrame, ThemedImage } from '../components/DeviceFrames';
import Reveal from '../components/Reveal';
import StoreButtons from '../components/StoreButtons';
import { usePrefersDark } from '../hooks/usePrefersDark';

import firmaDarkMp4 from '../assets/demo/firma-dark.mp4';
import firmaPosterDark from '../assets/demo/firma-poster-dark.webp';
import firmaPoster from '../assets/demo/firma-poster.webp';
import firmaMp4 from '../assets/demo/firma.mp4';
import flowDarkMp4 from '../assets/demo/flow-dark.mp4';
import flowPosterDark from '../assets/demo/flow-poster-dark.webp';
import flowPoster from '../assets/demo/flow-poster.webp';
import flowMp4 from '../assets/demo/flow.mp4';
import bilardDark from '../assets/demo/phone-bilard-dark.webp';
import bilard from '../assets/demo/phone-bilard.webp';
import jezykEnDark from '../assets/demo/phone-jezyk-en-dark.webp';
import jezykEn from '../assets/demo/phone-jezyk-en.webp';
import phoneKalendarzDark from '../assets/demo/phone-kalendarz-dark.webp';
import phoneKalendarz from '../assets/demo/phone-kalendarz.webp';
import mapaFirmDark from '../assets/demo/phone-mapa-firm-dark.webp';
import mapaFirm from '../assets/demo/phone-mapa-firm.webp';
import opinieDark from '../assets/demo/phone-opinie-dark.webp';
import opinie from '../assets/demo/phone-opinie.webp';
import pracownicyDark from '../assets/demo/phone-pracownicy-dark.webp';
import pracownicy from '../assets/demo/phone-pracownicy.webp';
import rankingDark from '../assets/demo/phone-ranking-dark.webp';
import ranking from '../assets/demo/phone-ranking.webp';
import phoneRestauracjaMapaDark from '../assets/demo/phone-restauracja-mapa-dark.webp';
import phoneRestauracjaMapa from '../assets/demo/phone-restauracja-mapa.webp';
import restauracjaRezerwacjaDark from '../assets/demo/phone-restauracja-rezerwacja-dark.webp';
import restauracjaRezerwacja from '../assets/demo/phone-restauracja-rezerwacja.webp';
import rezerwacjaDark from '../assets/demo/phone-rezerwacja-dark.webp';
import rezerwacja from '../assets/demo/phone-rezerwacja.webp';
import phoneStatystykiDark from '../assets/demo/phone-statystyki-dark.webp';
import phoneStatystyki from '../assets/demo/phone-statystyki.webp';
import szczegolyDark from '../assets/demo/phone-szczegoly-wizyty-dark.webp';
import szczegoly from '../assets/demo/phone-szczegoly-wizyty.webp';
import wypozyczalniaOfertaDark from '../assets/demo/phone-wypozyczalnia-oferta-dark.webp';
import wypozyczalniaOferta from '../assets/demo/phone-wypozyczalnia-oferta.webp';
import tabletKalendarzDark from '../assets/demo/tablet-kalendarz-dark.webp';
import tabletKalendarz from '../assets/demo/tablet-kalendarz.webp';
import tabletProfilFirmyDark from '../assets/demo/tablet-profil-firmy-dark.webp';
import tabletProfilFirmy from '../assets/demo/tablet-profil-firmy.webp';
import tabletRestauracjaMapaDark from '../assets/demo/tablet-restauracja-mapa-dark.webp';
import tabletRestauracjaMapa from '../assets/demo/tablet-restauracja-mapa.webp';
import tabletStatystykiDark from '../assets/demo/tablet-statystyki-dark.webp';
import tabletStatystyki from '../assets/demo/tablet-statystyki.webp';
import tabletFlotaDark from '../assets/demo/tablet-wypozyczalnia-flota-dark.webp';
import tabletFlota from '../assets/demo/tablet-wypozyczalnia-flota.webp';
import tabletUmowaDark from '../assets/demo/tablet-wypozyczalnia-umowa-dark.webp';
import tabletUmowa from '../assets/demo/tablet-wypozyczalnia-umowa.webp';

/* ---------- media primitives ---------- */

// Intrinsic aspect ratios of the demo screens — frames keep their size before the image loads
const PHONE_ASPECT = 'aspect-[1320/2868]';
const TABLET_ASPECT = 'aspect-[3/4]';
const TABLET_LANDSCAPE_ASPECT = 'aspect-[4/3]';

type Pair = { light: string; dark: string; alt: string };
type VideoPair = { light: string; dark: string; poster: string; posterDark: string; alt: string };
type Media =
  | ({ kind: 'phone' } & Pair)
  | ({ kind: 'tablet'; landscape?: boolean; phoneFallback?: Pair } & Pair)
  | ({ kind: 'video' } & VideoPair);

const clientFlowVideo: VideoPair = {
  light: flowMp4,
  dark: flowDarkMp4,
  poster: flowPoster,
  posterDark: flowPosterDark,
  alt: 'Klient rezerwuje wizytę w aplikacji Timelly',
};

/** Autoplaying demo video that follows the site theme (light/dark file pair). */
function DemoVideo({ video, eager = false }: { video: VideoPair; eager?: boolean }) {
  const prefersDark = usePrefersDark();
  return (
    <video
      key={prefersDark ? 'dark' : 'light'}
      src={prefersDark ? video.dark : video.light}
      poster={prefersDark ? video.posterDark : video.poster}
      preload={eager ? 'auto' : 'metadata'}
      autoPlay
      muted
      loop
      playsInline
      aria-label={video.alt}
      className={`block w-full ${PHONE_ASPECT}`}
    />
  );
}

/** One screen in a device frame. Portrait tablets swap to a phone on small screens. */
function MediaItem({ item, compact = false }: { item: Media; compact?: boolean }) {
  const phoneW = compact ? 'w-[160px] sm:w-[180px]' : 'w-[200px] sm:w-[230px]';
  if (item.kind === 'video') {
    return (
      <PhoneFrame className={phoneW}>
        <DemoVideo video={item} />
      </PhoneFrame>
    );
  }
  if (item.kind === 'phone') {
    return (
      <PhoneFrame className={phoneW}>
        <ThemedImage light={item.light} dark={item.dark} alt={item.alt} className={`w-full ${PHONE_ASPECT}`} />
      </PhoneFrame>
    );
  }
  if (item.landscape) {
    return (
      <TabletFrame className={compact ? 'w-full max-w-md' : 'w-full max-w-2xl'}>
        <ThemedImage light={item.light} dark={item.dark} alt={item.alt} className={`w-full ${TABLET_LANDSCAPE_ASPECT}`} />
      </TabletFrame>
    );
  }
  return (
    <>
      <TabletFrame className={`hidden w-full md:block ${compact ? 'max-w-xs' : 'max-w-md'}`}>
        <ThemedImage light={item.light} dark={item.dark} alt={item.alt} className={`w-full ${TABLET_ASPECT}`} />
      </TabletFrame>
      {item.phoneFallback && (
        <PhoneFrame className={`${phoneW} md:hidden`}>
          <ThemedImage
            light={item.phoneFallback.light}
            dark={item.phoneFallback.dark}
            alt={item.phoneFallback.alt}
            className={`w-full ${PHONE_ASPECT}`}
          />
        </PhoneFrame>
      )}
    </>
  );
}

/** Eyebrow + big headline + lead — shared section intro. */
function SectionIntro({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mb-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl dark:text-white">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-neutral-500 sm:text-xl dark:text-neutral-400">{lead}</p>
    </Reveal>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-[15px] text-neutral-600 dark:text-neutral-300">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ---------- 1. Hero ---------- */

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section ref={heroRef} className="relative overflow-hidden px-5 pb-24 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-160px] top-1/3 h-[360px] w-[360px] rounded-full bg-ink/10 blur-3xl dark:bg-accent/10" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.h1
          {...enter(0)}
          className="mb-6 text-5xl font-bold tracking-tight text-ink sm:text-7xl md:text-8xl dark:text-white"
        >
          Klienci rezerwują sami.
          <br />
          <span className="bg-gradient-to-r from-accent to-ink bg-clip-text text-transparent dark:to-white">
            Ty robisz swoje.
          </span>
        </motion.h1>

        <motion.p
          {...enter(0.12)}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-500 sm:text-xl dark:text-neutral-400"
        >
          Timelly to aplikacja do rezerwacji dla salonów, klubów bilardowych, restauracji i
          wypożyczalni. Kalendarz zespołu, rezerwacje online przez całą dobę, przypomnienia SMS i
          statystyki — na telefonie, tablecie i w przeglądarce.
        </motion.p>

        <motion.div {...enter(0.24)}>
          <StoreButtons />
        </motion.div>

        <motion.div
          style={{ y: phoneY, scale: phoneScale }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col items-center"
        >
          <PhoneFrame className="w-[270px] sm:w-[300px]">
            <DemoVideo
              eager
              video={{
                light: firmaMp4,
                dark: firmaDarkMp4,
                poster: firmaPoster,
                posterDark: firmaPosterDark,
                alt: 'Panel firmy: kalendarz zespołu i dodawanie wizyty',
              }}
            />
          </PhoneFrame>
          <p className="mt-5 text-sm text-neutral-500 dark:text-neutral-400">
            Panel firmy — kalendarz dnia, tygodnia i nowa wizyta w kilka dotknięć.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 2. Dla kogo ---------- */

type Industry = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  name: string;
  tagline: string;
  headline: string;
  body: string;
  bullets: string[];
  media: Media[];
};

const industries: Industry[] = [
  {
    id: 'beauty',
    icon: Scissors,
    name: 'Beauty i barber',
    tagline: 'salony, barberzy, kosmetyka',
    headline: 'Fotel nie stoi pusty.',
    body:
      'Telefon dzwoni w trakcie strzyżenia, a klient, który się nie dodzwonił, idzie do konkurencji. W Timelly klient sam widzi wolne godziny każdego barbera i rezerwuje o 23:00, kiedy Ty już śpisz. Rano masz pełny grafik i wiesz, kto do kogo przychodzi.',
    bullets: [
      'Grafik każdego pracownika osobno, cała ekipa w jednym widoku',
      'Klient wybiera konkretnego barbera albo pierwszego wolnego',
      'Opinie wystawiają tylko ci, którzy naprawdę byli — ocena 5.0 znaczy 5.0',
    ],
    media: [
      {
        kind: 'tablet',
        light: tabletProfilFirmy,
        dark: tabletProfilFirmyDark,
        alt: 'Profil barbershopu na tablecie: usługi, kalendarz i stanowiska na żywo',
        phoneFallback: { light: rezerwacja, dark: rezerwacjaDark, alt: 'Profil barbershopu: wybór usługi i terminu' },
      },
      { kind: 'video', ...clientFlowVideo },
      { kind: 'phone', light: opinie, dark: opinieDark, alt: 'Opinie klientów — ocena 5.0, tylko po odbytej wizycie' },
    ],
  },
  {
    id: 'bilard',
    icon: Dices,
    name: 'Bilard i rozrywka',
    tagline: 'kluby bilardowe, dart, kręgle',
    headline: 'Klient widzi wolny stół, zanim zadzwoni.',
    body:
      'Piątek, 20:00, sześć stołów i telefon, który nie przestaje dzwonić: „macie coś wolnego?". W Timelly klient sam patrzy na plan sali i widzi, który stół jest wolny o której godzinie. Rezerwuje stół numer 3 na godzinę albo bierze dowolny wolny — bez dzwonienia i bez pomyłek przy barze.',
    bullets: [
      'Plan sali z numerami stołów — klient rezerwuje konkretny stół',
      'Rezerwacja na czas: godzina lub dłużej, cena według Twojego cennika',
      'Wolne terminy pojawiają się zaraz po zwolnieniu stołu, nie od pełnej godziny',
    ],
    media: [{ kind: 'phone', light: bilard, dark: bilardDark, alt: 'Plan sali bilardowej z wyborem stołu i godziny' }],
  },
  {
    id: 'restauracja',
    icon: UtensilsCrossed,
    name: 'Restauracje',
    tagline: 'restauracje, ogródki, kawiarnie',
    headline: 'Stolik dla trzech osób o 17:30. Bez telefonu.',
    body:
      'Gość wybiera stolik na planie Twojej sali albo ogródka — tak jak wybiera fotel w kinie. Podaje liczbę osób, dostaje potwierdzenie, a Ty widzisz w kalendarzu, kto siada gdzie i o której. Kelner nie musi odbierać telefonu z tacą w ręku.',
    bullets: [
      'Plan sali i ogródka — gość widzi, gdzie usiądzie, zanim przyjdzie',
      'Liczba osób i godzina — stolik na dwie godziny jest zajęty tylko na dwie godziny',
      'Zajęty stolik znika z planu dla innych — koniec podwójnych rezerwacji',
    ],
    media: [
      {
        kind: 'tablet',
        light: tabletRestauracjaMapa,
        dark: tabletRestauracjaMapaDark,
        alt: 'Plan ogródka restauracji z wyborem stolika na tablecie',
        phoneFallback: {
          light: phoneRestauracjaMapa,
          dark: phoneRestauracjaMapaDark,
          alt: 'Plan ogródka restauracji z wyborem stolika',
        },
      },
      {
        kind: 'phone',
        light: restauracjaRezerwacja,
        dark: restauracjaRezerwacjaDark,
        alt: 'Potwierdzona rezerwacja stolika dla 3 osób w aplikacji klienta',
      },
    ],
  },
  {
    id: 'wypozyczalnia',
    icon: Bike,
    name: 'Wypożyczalnie',
    tagline: 'motocykle, rowery, sprzęt',
    headline: 'Cała flota w jednym grafiku.',
    body:
      'Klient wybiera motocykl oraz termin odbioru i zwrotu — cena za sześć dób liczy się sama. Ty widzisz tydzień całej floty na jednym ekranie: który pojazd jest w trasie, który wraca w piątek i co można jeszcze wydać. Umowa najmu, zaliczka i dodatki są w szczegółach wynajmu, gotowe do wydruku.',
    bullets: [
      'Termin od–do z godziną odbioru i zwrotu, cena za doby liczona automatycznie',
      'Grafik floty: każdy pojazd w osobnym wierszu, kategorie osobno',
      'Umowa najmu do wydruku, dodatki i zaliczka w jednym rozliczeniu',
    ],
    media: [
      {
        kind: 'tablet',
        landscape: true,
        light: tabletFlota,
        dark: tabletFlotaDark,
        alt: 'Tygodniowy grafik floty wypożyczalni motocykli na tablecie',
      },
      {
        kind: 'phone',
        light: wypozyczalniaOferta,
        dark: wypozyczalniaOfertaDark,
        alt: 'Wybór terminu wynajmu Yamahy XTZ700 — 6 dób, 2100 zł',
      },
      {
        kind: 'tablet',
        landscape: true,
        light: tabletUmowa,
        dark: tabletUmowaDark,
        alt: 'Szczegóły wynajmu: klient, terminy, umowa do wydruku i rozliczenie',
      },
    ],
  },
];

const OTHER_ID = 'other';

function IndustryTile({
  icon: Icon,
  name,
  tagline,
  active,
  onClick,
}: {
  icon: ComponentType<{ className?: string }>;
  name: string;
  tagline: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col items-start gap-2 rounded-3xl border p-5 text-left transition-all ${
        active
          ? 'border-ink bg-ink text-white shadow-lg shadow-ink/20 dark:border-accent dark:bg-accent dark:text-ink dark:shadow-accent/20'
          : 'border-black/10 bg-white text-ink hover:border-black/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/30'
      }`}
    >
      <Icon className="h-6 w-6" />
      <span className="text-[17px] font-semibold leading-tight">{name}</span>
      <span className={`text-xs leading-snug ${active ? 'opacity-75' : 'text-neutral-500 dark:text-neutral-400'}`}>
        {tagline}
      </span>
    </button>
  );
}

function ForWhom() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId);

  return (
    <section id="dla-kogo" className="bg-neutral-50 px-5 py-24 sm:py-32 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Dla kogo"
          title="Zrobione pod Twoją branżę."
          lead="Inny biznes, inne problemy. Wybierz swój i zobacz, jak Timelly wygląda u Ciebie."
        />

        <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => (
            <IndustryTile
              key={ind.id}
              icon={ind.icon}
              name={ind.name}
              tagline={ind.tagline}
              active={ind.id === activeId}
              onClick={() => setActiveId(ind.id)}
            />
          ))}
          <IndustryTile
            icon={Plus}
            name="Twoja branża?"
            tagline="Dostosujemy się"
            active={activeId === OTHER_ID}
            onClick={() => setActiveId(OTHER_ID)}
          />
        </Reveal>

        <div className="mt-12 min-h-[420px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {active ? (
                <div className="grid items-center gap-12 lg:grid-cols-[2fr_3fr]">
                  <div>
                    <h3 className="mb-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
                      {active.headline}
                    </h3>
                    <p className="mb-7 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {active.body}
                    </p>
                    <Bullets items={active.bullets} />
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    {active.media.map((m) => (
                      <MediaItem key={m.alt} item={m} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mx-auto max-w-2xl text-center">
                  <h3 className="mb-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
                    Nie ma Cię na liście? Napisz.
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
                    Timelly działa wszędzie tam, gdzie klient umawia się na termin albo rezerwuje
                    miejsce: fizjoterapia, studio tatuażu, sale prób, korepetycje, warsztat, myjnia.
                    Napisz, czym się zajmujesz — sprawdzimy, jak to ułożyć u Ciebie.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-[17px] font-semibold text-white shadow-lg shadow-ink/25 transition-transform hover:scale-[1.03] dark:bg-accent dark:text-ink dark:shadow-accent/20"
                  >
                    Napisz do nas
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Funkcje ---------- */

type Feature = { title: string; words: [string, string, string]; detail: string; media?: Media[] };

const features: Feature[] = [
  {
    title: 'Rezerwacje online 24/7',
    words: ['Klient rezerwuje sam', 'O każdej porze', 'Od razu w kalendarzu'],
    detail:
      'Wolne terminy są zawsze aktualne. Klient wybiera usługę, pracownika i godzinę, a wizyta pojawia się w Twoim kalendarzu w tej samej sekundzie. Wizytę możesz też dodać ręcznie — z telefonu, w trakcie rozmowy z klientem.',
    media: [{ kind: 'phone', light: rezerwacja, dark: rezerwacjaDark, alt: 'Rezerwacja usługi w aplikacji klienta' }],
  },
  {
    title: 'Kalendarz zespołu',
    words: ['Cały zespół', 'Jeden widok', 'Zero kolizji'],
    detail:
      'Każdy pracownik ma własną kolumnę, a Ty widzisz dzień albo tydzień całej firmy. Wizyty od klientów i te dodane ręcznie różnią się kolorem, więc od razu wiesz, skąd przyszła.',
    media: [
      { kind: 'phone', light: phoneKalendarz, dark: phoneKalendarzDark, alt: 'Kalendarz firmy z kolumnami pracowników' },
      { kind: 'phone', light: pracownicy, dark: pracownicyDark, alt: 'Lista pracowników firmy' },
    ],
  },
  {
    title: 'Statystyki',
    words: ['Przychody', 'Liczba wizyt', 'Średnia wartość'],
    detail:
      'Ile zarobiła firma w tym roku, ile w tym miesiącu i ile średnio na wizytę. Dla całej firmy albo dla jednego pracownika — bez arkusza w Excelu.',
    media: [
      {
        kind: 'tablet',
        light: tabletStatystyki,
        dark: tabletStatystykiDark,
        alt: 'Statystyki przychodów firmy na tablecie',
        phoneFallback: { light: phoneStatystyki, dark: phoneStatystykiDark, alt: 'Statystyki przychodów firmy' },
      },
    ],
  },
  {
    title: 'Wizytówka i opinie',
    words: ['Tylko po wizycie', 'Bez kupionych gwiazdek', 'Usługi i galeria'],
    detail:
      'Profil firmy z usługami, cenami, galerią i mapą. Opinię może wystawić tylko klient, który był na wizycie — ocena jest Twoja, nie kogoś, kto nigdy u Ciebie nie był.',
    media: [{ kind: 'phone', light: opinie, dark: opinieDark, alt: 'Opinie klientów — tylko po odbytej wizycie' }],
  },
  {
    title: 'Przypomnienia SMS',
    words: ['Mniej nieodebranych', 'Automatycznie', 'Bez Twojej pracy'],
    detail: 'Klient dostaje SMS z przypomnieniem przed wizytą, a Ty nie musisz o tym pamiętać.',
  },
  {
    title: '12 języków',
    words: ['Bez tłumacza', 'Automatycznie', 'Klient z zagranicy'],
    detail:
      'Klient z Niemiec, Ukrainy czy Anglii widzi Twoje usługi po swojemu — nazwy, opisy, godziny. Ty nic nie tłumaczysz; wpisujesz po polsku.',
    media: [{ kind: 'phone', light: jezykEn, dark: jezykEnDark, alt: 'Profil firmy po angielsku w aplikacji klienta' }],
  },
  {
    title: 'Dane w UE',
    words: ['Serwery w UE', 'RODO', 'Twoi klienci, Twoje dane'],
    detail:
      'Dane firmy i klientów są przechowywane na serwerach w Unii Europejskiej, zgodnie z RODO. Nie sprzedajemy ich i nie profilujemy klientów pod reklamy.',
  },
  {
    title: 'Zero reklam i trackerów',
    words: ['Bez reklam', 'Bez śledzenia', 'Bez konkurencji obok'],
    detail:
      'W aplikacji nie ma reklam ani trackerów. Klient, który otwiera Twój profil, widzi Twój profil — nie reklamę salonu z sąsiedniej ulicy.',
  },
  {
    title: 'Aplikacja natywna',
    words: ['Telefon', 'Tablet', 'Przeglądarka'],
    detail:
      "Timelly to prawdziwa aplikacja na iPhone'a, Androida i iPada, nie tylko strona w przeglądarce. Kalendarz na tablecie przy recepcji, powiadomienia na telefonie w kieszeni — i to samo w przeglądarce na komputerze.",
    media: [
      {
        kind: 'tablet',
        light: tabletKalendarz,
        dark: tabletKalendarzDark,
        alt: 'Kalendarz firmy na tablecie',
      },
      { kind: 'phone', light: phoneKalendarz, dark: phoneKalendarzDark, alt: 'Kalendarz firmy na telefonie' },
    ],
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
      <h3 className="text-xl font-bold tracking-tight text-ink dark:text-white">{feature.title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {feature.words.map((w) => (
          <span
            key={w}
            className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
          >
            {w}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent"
      >
        {open ? 'Zwiń' : 'Rozwiń'}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
              {feature.detail}
            </p>
            {feature.media && (
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                {feature.media.map((m) => (
                  <MediaItem key={m.alt} item={m} compact />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Features() {
  return (
    <section id="funkcje" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Funkcje"
          title="Wszystko, czego potrzebuje firma."
          lead="Krótko — szczegóły zobaczysz w aplikacji."
        />
        <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <FeatureCard feature={f} />
            </Reveal>
          ))}
        </div>

        {/* Events teaser — deliberately no details and no screen (premiere end of September 2026) */}
        <Reveal className="mt-6 flex flex-col items-start gap-3 rounded-3xl border border-dashed border-black/15 bg-neutral-50 p-6 sm:flex-row sm:items-center sm:gap-6 dark:border-white/15 dark:bg-white/[0.03]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <h3 className="text-xl font-bold tracking-tight text-ink dark:text-white">Wydarzenia</h3>
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              Wkrótce
            </span>
          </div>
          <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
            Nowy sposób na ściągnięcie klientów do lokalu. Premiera planowana pod koniec września
            2026.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 4. Tak widzą Cię klienci ---------- */

const clientSteps = [
  {
    step: '01',
    title: 'Znajdź',
    desc: 'Twoja firma na mapie, obok oceny i wolnych terminów.',
    light: mapaFirm,
    dark: mapaFirmDark,
    alt: 'Mapa firm w aplikacji klienta',
  },
  {
    step: '02',
    title: 'Zarezerwuj',
    desc: 'Usługa, pracownik, godzina. Klient klika, Ty widzisz wizytę.',
    light: rezerwacja,
    dark: rezerwacjaDark,
    alt: 'Rezerwacja usługi w aplikacji klienta',
  },
  {
    step: '03',
    title: 'Przyjdź',
    desc: 'Szczegóły wizyty z mapą i nawigacją. Klient trafia na czas.',
    light: szczegoly,
    dark: szczegolyDark,
    alt: 'Szczegóły wizyty z mapą i nawigacją',
  },
];

function ClientsView() {
  return (
    <section id="klienci" className="bg-neutral-50 px-5 py-24 sm:py-32 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Dla klientów"
          title="Tak widzą Cię klienci."
          lead="Mapa, rezerwacja, nawigacja. Trzy ekrany, jedna minuta."
        />
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {clientSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12} className="flex flex-col items-center">
              <PhoneFrame className="w-[210px] lg:w-[240px]">
                <ThemedImage light={s.light} dark={s.dark} alt={s.alt} className={`w-full ${PHONE_ASPECT}`} />
              </PhoneFrame>
              <p className="mt-6 text-sm font-bold tracking-[0.18em] text-accent">{s.step}</p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink dark:text-white">{s.title}</h3>
              <p className="mt-2 max-w-[280px] text-center text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
              Klienci wracają.
            </h3>
            <p className="mb-7 max-w-lg text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
              Każda odbyta wizyta to punkty w miesięcznym rankingu — od Brązu po Diament. Klient ma
              powód, żeby wrócić do Ciebie, a nie do tego, kto akurat ma promocję.
            </p>
            <Bullets
              items={[
                'Punkty naliczają się same, po odbytej wizycie',
                'Cała rezerwacja na telefonie klienta trwa około minuty',
                'Prywatność w rankingu: klient sam decyduje, czy jest widoczny',
              ]}
            />
          </Reveal>
          <Reveal delay={0.15} className="flex flex-wrap items-center justify-center gap-6">
            <PhoneFrame className="w-[200px] sm:w-[230px]">
              <DemoVideo video={clientFlowVideo} />
            </PhoneFrame>
            <PhoneFrame className="w-[200px] sm:w-[230px]">
              <ThemedImage
                light={ranking}
                dark={rankingDark}
                alt="Ranking punktów lojalnościowych"
                className={`w-full ${PHONE_ASPECT}`}
              />
            </PhoneFrame>
          </Reveal>
        </div>

        <Reveal className="mt-24 flex flex-col items-center gap-6 rounded-3xl border border-black/10 bg-white p-8 text-center sm:p-10 dark:border-white/10 dark:bg-white/5">
          <div>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-ink dark:text-white">Jesteś klientem?</h3>
            <p className="text-[15px] text-neutral-500 dark:text-neutral-400">
              Pobierz Timelly i rezerwuj w firmach, które już w niej są.
            </p>
          </div>
          <StoreButtons />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 5. CTA ---------- */

function BusinessCta() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:py-36">
      <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-ink sm:text-6xl dark:text-white">
          Załóż profil firmy.
        </h2>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-500 sm:text-xl dark:text-neutral-400">
          Pobierz aplikację albo otwórz ją w przeglądarce, dodaj usługi i pracowników — i daj
          klientom link. Pierwsze rezerwacje mogą wpaść jeszcze dziś.
        </p>
        <StoreButtons />
      </Reveal>
    </section>
  );
}

export default function Landing() {
  return (
    <>
      <Hero />
      <ForWhom />
      <Features />
      <ClientsView />
      <BusinessCta />
    </>
  );
}
