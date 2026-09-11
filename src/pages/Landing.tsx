import { Bike, Dices, EyeOff, MessageSquareText, Plus, Scissors, ShieldCheck, UtensilsCrossed } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, type ComponentType, type ReactNode } from 'react';
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

function Phone({ img, className = 'w-[220px] sm:w-[250px]' }: { img: Pair; className?: string }) {
  return (
    <PhoneFrame className={className}>
      <ThemedImage light={img.light} dark={img.dark} alt={img.alt} className={`w-full ${PHONE_ASPECT}`} />
    </PhoneFrame>
  );
}

function PhoneVideo({ video }: { video: VideoPair }) {
  return (
    <PhoneFrame className="w-[220px] sm:w-[250px]">
      <DemoVideo video={video} />
    </PhoneFrame>
  );
}

/** Portrait tablet; below `md` it swaps to the matching phone screen. */
function Tablet({ img, phone, className = 'max-w-md' }: { img: Pair; phone: Pair; className?: string }) {
  return (
    <>
      <TabletFrame className={`hidden w-full md:block ${className}`}>
        <ThemedImage light={img.light} dark={img.dark} alt={img.alt} className={`w-full ${TABLET_ASPECT}`} />
      </TabletFrame>
      <Phone img={phone} className="w-[220px] sm:w-[250px] md:hidden" />
    </>
  );
}

function TabletLandscape({ img }: { img: Pair }) {
  return (
    <TabletFrame className="w-full max-w-2xl">
      <ThemedImage light={img.light} dark={img.dark} alt={img.alt} className={`w-full ${TABLET_LANDSCAPE_ASPECT}`} />
    </TabletFrame>
  );
}

/* ---------- layout primitives ---------- */

/** Eyebrow + big headline + lead — shared section intro. */
function SectionIntro({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <Reveal className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
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

type RowContent = { step?: string; headline: string; body: string; bullets: string[]; media: ReactNode };

/** One "text | device" row; `flip` puts the device on the left on large screens. */
function SplitRow({ step, headline, body, bullets, media, flip = false }: RowContent & { flip?: boolean }) {
  return (
    <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={flip ? 'lg:order-2' : ''}>
        {step && <p className="mb-3 text-sm font-bold tracking-[0.18em] text-accent">{step}</p>}
        <h3 className="mb-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">{headline}</h3>
        <p className="mb-7 max-w-lg text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">{body}</p>
        <Bullets items={bullets} />
      </div>
      <div className={`flex flex-wrap items-end justify-center gap-6 ${flip ? 'lg:order-1' : ''}`}>{media}</div>
    </Reveal>
  );
}

/** Rows alternate text/device sides automatically. */
function SplitRows({ rows }: { rows: RowContent[] }) {
  return (
    <div className="space-y-24 sm:space-y-32">
      {rows.map((row, i) => (
        <SplitRow key={row.headline} {...row} flip={i % 2 === 1} />
      ))}
    </div>
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
          Timelly to aplikacja do rezerwacji dla każdej firmy, która przyjmuje zapisy — od salonów
          i restauracji po kluby bilardowe i wypożyczalnie. Kalendarz zespołu, rezerwacje online
          przez całą dobę, przypomnienia SMS i statystyki: na telefonie, tablecie i w przeglądarce.
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
  rows: RowContent[];
};

const industries: Industry[] = [
  {
    id: 'beauty',
    icon: Scissors,
    name: 'Beauty i barber',
    tagline: 'salony, barberzy, kosmetyka',
    rows: [
      {
        headline: 'Fotel nie stoi pusty.',
        body:
          'Telefon dzwoni w trakcie strzyżenia, a klient, który się nie dodzwonił, idzie do konkurencji. W Timelly klient sam widzi wolne godziny każdego barbera i rezerwuje o 23:00, kiedy Ty już śpisz. Rano masz pełny grafik i wiesz, kto do kogo przychodzi.',
        bullets: [
          'Grafik każdego pracownika osobno, cała ekipa w jednym widoku',
          'Klient wybiera konkretnego barbera albo pierwszego wolnego',
          'Klient widzi, które stanowisko jest wolne w tej chwili',
        ],
        media: (
          <Tablet
            img={{
              light: tabletProfilFirmy,
              dark: tabletProfilFirmyDark,
              alt: 'Profil barbershopu na tablecie: usługi, kalendarz i stanowiska na żywo',
            }}
            phone={{ light: rezerwacja, dark: rezerwacjaDark, alt: 'Profil barbershopu: wybór usługi i terminu' }}
          />
        ),
      },
      {
        headline: 'Rezerwacja w minutę, bez rozmowy.',
        body:
          'Klient otwiera Twój profil, wybiera usługę, barbera i godzinę, potwierdza. Cała rezerwacja trwa około minuty — i od razu widzisz ją w kalendarzu, z nazwiskiem i numerem telefonu.',
        bullets: [
          'Usługa, pracownik, godzina — trzy dotknięcia',
          'Wizyta od razu w Twoim kalendarzu',
          'Klient dostaje potwierdzenie i przypomnienie SMS',
        ],
        media: <PhoneVideo video={clientFlowVideo} />,
      },
      {
        headline: 'Ocena 5.0 znaczy 5.0.',
        body:
          'Opinię może wystawić tylko klient, który był na wizycie. Nie ma kupionych gwiazdek ani opinii od kogoś, kto nigdy nie przekroczył progu salonu. Twoja ocena to Twoja robota.',
        bullets: [
          'Opinia dopiero po odbytej wizycie',
          'Przy każdej opinii widać, jakiej usługi dotyczy',
          'Ocena i liczba opinii na Twojej wizytówce',
        ],
        media: <Phone img={{ light: opinie, dark: opinieDark, alt: 'Opinie klientów — ocena 5.0, tylko po odbytej wizycie' }} />,
      },
    ],
  },
  {
    id: 'bilard',
    icon: Dices,
    name: 'Bilard i rozrywka',
    tagline: 'kluby bilardowe, dart, kręgle',
    rows: [
      {
        headline: 'Klient widzi wolny stół, zanim zadzwoni.',
        body:
          'Piątek, 20:00, sześć stołów i telefon, który nie przestaje dzwonić: „macie coś wolnego?". W Timelly klient sam patrzy na plan sali i widzi, który stół jest wolny o której godzinie. Rezerwuje stół numer 3 na godzinę albo bierze dowolny wolny — bez dzwonienia i bez pomyłek przy barze.',
        bullets: [
          'Plan sali z numerami stołów — klient rezerwuje konkretny stół',
          'Rezerwacja na czas: godzina lub dłużej, cena według Twojego cennika',
          'Wolne terminy pojawiają się zaraz po zwolnieniu stołu, nie od pełnej godziny',
        ],
        media: <Phone img={{ light: bilard, dark: bilardDark, alt: 'Plan sali bilardowej z wyborem stołu i godziny' }} />,
      },
    ],
  },
  {
    id: 'restauracja',
    icon: UtensilsCrossed,
    name: 'Restauracje',
    tagline: 'restauracje, ogródki, kawiarnie',
    rows: [
      {
        headline: 'Stolik dla trzech osób o 17:30. Bez telefonu.',
        body:
          'Gość wybiera stolik na planie Twojej sali albo ogródka — tak jak wybiera fotel w kinie. Widzi, które stoliki są wolne o wybranej godzinie, i bierze ten przy oknie albo ten w ogródku. Kelner nie musi odbierać telefonu z tacą w ręku.',
        bullets: [
          'Plan sali i ogródka — gość widzi, gdzie usiądzie, zanim przyjdzie',
          'Wolne stoliki podświetlone, zajęte znikają z wyboru',
          'Sala i ogródek osobno, stoliki na 2, 4 i więcej osób',
        ],
        media: (
          <Tablet
            img={{
              light: tabletRestauracjaMapa,
              dark: tabletRestauracjaMapaDark,
              alt: 'Plan ogródka restauracji z wyborem stolika na tablecie',
            }}
            phone={{
              light: phoneRestauracjaMapa,
              dark: phoneRestauracjaMapaDark,
              alt: 'Plan ogródka restauracji z wyborem stolika',
            }}
          />
        ),
      },
      {
        headline: 'Potwierdzone. Gość wie, że stolik czeka.',
        body:
          'Gość widzi w aplikacji, który stolik ma, na ile osób i na którą godzinę. Ty widzisz to samo w kalendarzu — kto siada gdzie i o której. Nikt nie zapisuje tego w zeszycie przy barze.',
        bullets: [
          'Liczba osób i czas — stolik na dwie godziny jest zajęty tylko na dwie godziny',
          'Status „Potwierdzona" bez telefonu zwrotnego',
          'Gość dodaje rezerwację do swojego kalendarza jednym dotknięciem',
        ],
        media: (
          <Phone
            img={{
              light: restauracjaRezerwacja,
              dark: restauracjaRezerwacjaDark,
              alt: 'Potwierdzona rezerwacja stolika dla 3 osób w aplikacji klienta',
            }}
          />
        ),
      },
    ],
  },
  {
    id: 'wypozyczalnia',
    icon: Bike,
    name: 'Wypożyczalnie',
    tagline: 'motocykle, rowery, sprzęt',
    rows: [
      {
        headline: 'Cała flota w jednym grafiku.',
        body:
          'Tydzień całej floty na jednym ekranie: który motocykl jest w trasie, który wraca w piątek i co jeszcze można wydać. Kategorie osobno, każdy pojazd w swoim wierszu — bez tablicy z karteczkami.',
        bullets: [
          'Każdy pojazd w osobnym wierszu, kategorie osobno',
          'Odbiory, zwroty i wolne dni widoczne na tydzień do przodu',
          'Wynajmy dodane ręcznie i te z aplikacji klienta w jednym widoku',
        ],
        media: (
          <TabletLandscape
            img={{ light: tabletFlota, dark: tabletFlotaDark, alt: 'Tygodniowy grafik floty wypożyczalni motocykli na tablecie' }}
          />
        ),
      },
      {
        headline: 'Klient wybiera termin, cena liczy się sama.',
        body:
          'Klient zaznacza dzień i godzinę odbioru oraz zwrotu. Sześć dób Yamahy XTZ700 — 2100 zł — widzi od razu, zanim potwierdzi. Zajęte dni są niedostępne, więc nie dostaniesz rezerwacji na motocykl, który jest w trasie.',
        bullets: [
          'Termin od–do z godziną odbioru i zwrotu',
          'Cena za doby liczona automatycznie według Twojego cennika',
          'Zajęte dni od razu niedostępne w kalendarzu',
        ],
        media: (
          <Phone
            img={{
              light: wypozyczalniaOferta,
              dark: wypozyczalniaOfertaDark,
              alt: 'Wybór terminu wynajmu Yamahy XTZ700 — 6 dób, 2100 zł',
            }}
          />
        ),
      },
      {
        headline: 'Umowa, zaliczka, dodatki — w jednym miejscu.',
        body:
          'Szczegóły wynajmu to komplet: klient z numerem telefonu, pojazd, odbiór i zwrot z dokładną godziną, kask i rękawice, zaliczka. Umowa najmu do wydruku jednym dotknięciem, bez przepisywania danych.',
        bullets: [
          'Umowa najmu do wydruku z danymi wpisanymi raz',
          'Dodatki i zaliczka w jednym rozliczeniu',
          'Odbiór i zwrot z dokładną godziną',
        ],
        media: (
          <TabletLandscape
            img={{ light: tabletUmowa, dark: tabletUmowaDark, alt: 'Szczegóły wynajmu: klient, terminy, umowa do wydruku i rozliczenie' }}
          />
        ),
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
          lead="Fotel, stół, stolik, motocykl — inny biznes, inne problemy. Wybierz swoją branżę albo najbliższą i zobacz, jak Timelly wygląda u Ciebie."
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

        <div className="mt-16 min-h-[420px] sm:mt-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {active ? (
                <SplitRows rows={active.rows} />
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

const kalendarzPhone: Pair = { light: phoneKalendarz, dark: phoneKalendarzDark, alt: 'Kalendarz firmy z kolumnami pracowników' };
const kalendarzTablet: Pair = { light: tabletKalendarz, dark: tabletKalendarzDark, alt: 'Kalendarz firmy na tablecie' };

const featureRows: RowContent[] = [
  {
    headline: 'Rezerwacje online, całą dobę.',
    body:
      'Wolne terminy są zawsze aktualne. Klient wybiera usługę, pracownika i godzinę, a wizyta pojawia się w Twoim kalendarzu w tej samej sekundzie. Wizytę możesz też dodać ręcznie — z telefonu, w trakcie rozmowy z klientem.',
    bullets: [
      'Klient rezerwuje sam, o każdej porze',
      'Wizyta w Twoim kalendarzu w tej samej sekundzie',
      'Ręczne dodawanie wizyty z telefonu, gdy ktoś jednak zadzwoni',
    ],
    media: <Phone img={{ light: rezerwacja, dark: rezerwacjaDark, alt: 'Rezerwacja usługi w aplikacji klienta' }} />,
  },
  {
    headline: 'Cały zespół w jednym widoku.',
    body:
      'Każdy pracownik ma własną kolumnę, a Ty widzisz dzień albo tydzień całej firmy. Wizyty od klientów i te dodane ręcznie różnią się kolorem, więc od razu wiesz, skąd przyszła.',
    bullets: [
      'Własna kolumna dla każdego pracownika',
      'Dzień albo tydzień całej firmy na jednym ekranie',
      'Wizyty klientów i ręczne różnią się kolorem',
    ],
    media: (
      <>
        <Tablet img={kalendarzTablet} phone={kalendarzPhone} className="max-w-xs" />
        <Phone
          img={{ light: pracownicy, dark: pracownicyDark, alt: 'Lista pracowników firmy' }}
          className="w-[150px] sm:w-[170px]"
        />
      </>
    ),
  },
  {
    headline: 'Liczby bez arkusza.',
    body:
      'Ile zarobiła firma w tym roku, ile w tym miesiącu i ile średnio na wizytę. Dla całej firmy albo dla jednego pracownika — bez przepisywania do Excela.',
    bullets: ['Przychód w roku i w miesiącu', 'Liczba wizyt i średnia wartość wizyty', 'Cała firma albo jeden pracownik'],
    media: (
      <Tablet
        img={{ light: tabletStatystyki, dark: tabletStatystykiDark, alt: 'Statystyki przychodów firmy na tablecie' }}
        phone={{ light: phoneStatystyki, dark: phoneStatystykiDark, alt: 'Statystyki przychodów firmy' }}
      />
    ),
  },
  {
    headline: 'Wizytówka z opiniami, którym można wierzyć.',
    body:
      'Profil firmy z usługami, cenami, galerią i mapą. Opinię może wystawić tylko klient, który był na wizycie — ocena jest Twoja, nie kogoś, kto nigdy u Ciebie nie był.',
    bullets: ['Usługi, ceny, galeria i mapa w jednym profilu', 'Opinia tylko po odbytej wizycie', 'Bez kupionych gwiazdek'],
    media: <Phone img={{ light: opinie, dark: opinieDark, alt: 'Opinie klientów — tylko po odbytej wizycie' }} />,
  },
  {
    headline: 'Klient z zagranicy czyta po swojemu.',
    body:
      'Klient z Niemiec, Ukrainy czy Anglii widzi Twoje usługi w swoim języku — nazwy, opisy, godziny. Ty nic nie tłumaczysz; wpisujesz wszystko po polsku.',
    bullets: ['12 języków, przełączane automatycznie', 'Nazwy usług i opisy tłumaczone bez Twojego udziału', 'Ty piszesz tylko po polsku'],
    media: <Phone img={{ light: jezykEn, dark: jezykEnDark, alt: 'Profil firmy po angielsku w aplikacji klienta' }} />,
  },
  {
    headline: 'Prawdziwa aplikacja, nie strona.',
    body:
      "Timelly działa jako aplikacja na iPhone'a, Androida i iPada — i tak samo w przeglądarce na komputerze. Kalendarz na tablecie przy recepcji, powiadomienia na telefonie w kieszeni, ten sam widok wszędzie.",
    bullets: ['Telefon: iPhone i Android', 'Tablet przy recepcji', 'Przeglądarka na komputerze'],
    media: (
      <>
        <TabletFrame className="w-full max-w-[200px] md:max-w-xs">
          <ThemedImage
            light={kalendarzTablet.light}
            dark={kalendarzTablet.dark}
            alt={kalendarzTablet.alt}
            className={`w-full ${TABLET_ASPECT}`}
          />
        </TabletFrame>
        <Phone img={kalendarzPhone} className="w-[130px] md:w-[170px]" />
      </>
    ),
  },
];

const quietFeatures = [
  {
    icon: MessageSquareText,
    title: 'Przypomnienia SMS',
    text: 'Klient dostaje SMS przed wizytą, a Ty nie musisz o tym pamiętać.',
  },
  {
    icon: ShieldCheck,
    title: 'Dane w UE, zgodnie z RODO',
    text: 'Dane firmy i klientów są na serwerach w Unii Europejskiej. Nie sprzedajemy ich i nie profilujemy klientów pod reklamy.',
  },
  {
    icon: EyeOff,
    title: 'Zero reklam i trackerów',
    text: 'Klient, który otwiera Twój profil, widzi Twój profil — nie reklamę salonu z sąsiedniej ulicy.',
  },
];

function Features() {
  return (
    <section id="funkcje" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Funkcje"
          title="Wszystko, czego potrzebuje firma."
          lead="Krótko — szczegóły zobaczysz w aplikacji."
        />
        <SplitRows rows={featureRows} />

        <Reveal className="mt-24 grid gap-6 sm:mt-32 sm:grid-cols-3">
          {quietFeatures.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <Icon className="mb-4 h-7 w-7 text-accent" />
              <h3 className="mb-2 text-xl font-bold tracking-tight text-ink dark:text-white">{title}</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">{text}</p>
            </div>
          ))}
        </Reveal>

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

const clientRows: RowContent[] = [
  {
    step: '01 · Znajdź',
    headline: 'Klient znajduje Cię na mapie.',
    body:
      'Twoja firma na mapie okolicy, z wizytówką, oceną i wolnymi terminami. Ktoś, kto szuka barbera w Białymstoku, widzi Ciebie na mapie — nie listę ogłoszeń.',
    bullets: ['Firmy w okolicy klienta na mapie', 'Wizytówka: usługi, ceny, ocena', 'Rezerwacja prosto z profilu'],
    media: <Phone img={{ light: mapaFirm, dark: mapaFirmDark, alt: 'Mapa firm w aplikacji klienta' }} />,
  },
  {
    step: '02 · Zarezerwuj',
    headline: 'Usługa, pracownik, godzina.',
    body: 'Klient klika, Ty widzisz wizytę. Bez telefonu, bez „oddzwonię za chwilę", bez pomyłki w zeszycie.',
    bullets: [
      'Wolne terminy zawsze aktualne',
      'Konkretny pracownik albo pierwszy wolny',
      'Potwierdzenie od razu w aplikacji klienta',
    ],
    media: <Phone img={{ light: rezerwacja, dark: rezerwacjaDark, alt: 'Rezerwacja usługi w aplikacji klienta' }} />,
  },
  {
    step: '03 · Przyjdź',
    headline: 'Klient trafia na czas.',
    body:
      'Szczegóły wizyty z mapą i nawigacją do Twojego lokalu, przypomnienie SMS przed terminem. Mniej spóźnień, mniej nieodebranych wizyt.',
    bullets: ['Mapa i nawigacja do Twojego lokalu', 'Przypomnienie SMS przed wizytą', 'Wizyta w kalendarzu telefonu klienta'],
    media: <Phone img={{ light: szczegoly, dark: szczegolyDark, alt: 'Szczegóły wizyty z mapą i nawigacją' }} />,
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
        <SplitRows rows={clientRows} />
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
        <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
          Jesteś klientem? Te same przyciski — pobierz aplikację i rezerwuj.
        </p>
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
