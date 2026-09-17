import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { PhoneFrame, TabletFrame, ThemedImage } from '../components/DeviceFrames';
import FirmLeadForm from '../components/FirmLeadForm';
import Reveal from '../components/Reveal';
import StoreButtons from '../components/StoreButtons';
import { usePrefersDark } from '../hooks/usePrefersDark';

import flowDarkMp4 from '../assets/demo/flow-dark.mp4';
import flowPosterDark from '../assets/demo/flow-poster-dark.webp';
import flowPoster from '../assets/demo/flow-poster.webp';
import flowMp4 from '../assets/demo/flow.mp4';
import bilardDark from '../assets/demo/phone-bilard-dark.webp';
import phoneKalendarzDark from '../assets/demo/phone-kalendarz-dark.webp';
import phoneKalendarz from '../assets/demo/phone-kalendarz.webp';
import mapaFirmDark from '../assets/demo/phone-mapa-firm-dark.webp';
import mapaFirm from '../assets/demo/phone-mapa-firm.webp';
import rezerwacjaDark from '../assets/demo/phone-rezerwacja-dark.webp';
import rezerwacja from '../assets/demo/phone-rezerwacja.webp';
import phoneStatystykiDark from '../assets/demo/phone-statystyki-dark.webp';
import phoneStatystyki from '../assets/demo/phone-statystyki.webp';
import szczegolyDark from '../assets/demo/phone-szczegoly-wizyty-dark.webp';
import szczegoly from '../assets/demo/phone-szczegoly-wizyty.webp';
import tabletKalendarzDark from '../assets/demo/tablet-kalendarz-dark.webp';
import tabletKalendarz from '../assets/demo/tablet-kalendarz.webp';
import tabletStatystykiDark from '../assets/demo/tablet-statystyki-dark.webp';
import tabletStatystyki from '../assets/demo/tablet-statystyki.webp';

/** Eyebrow + big headline + lead — shared section intro. */
function SectionIntro({
  eyebrow,
  title,
  lead,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  onDark?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2
        className={`mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${
          onDark ? 'text-white' : 'text-ink dark:text-white'
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-lg leading-relaxed sm:text-xl ${
          onDark ? 'text-neutral-400' : 'text-neutral-500 dark:text-neutral-400'
        }`}
      >
        {lead}
      </p>
    </Reveal>
  );
}

function Hero() {
  const prefersDark = usePrefersDark();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section ref={heroRef} className="relative overflow-hidden px-5 pb-24 pt-32 sm:pt-36">
      {/* Blur gradients in the background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-160px] top-1/3 h-[360px] w-[360px] rounded-full bg-ink/10 blur-3xl dark:bg-accent/10" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-5xl font-bold tracking-tight text-ink sm:text-7xl md:text-8xl dark:text-white"
        >
          Rezerwuj usługi
          <br />
          <span className="bg-gradient-to-r from-accent to-ink bg-clip-text text-transparent dark:to-white">
            w sekundę.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-500 sm:text-xl dark:text-neutral-400"
        >
          Barber, salon, bilard — znajdź firmę na mapie, wybierz termin i gotowe. Bez dzwonienia,
          bez czekania.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <StoreButtons />
        </motion.div>

        <motion.div
          style={{ y: phoneY, scale: phoneScale }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <PhoneFrame className="w-[270px] sm:w-[300px]">
            <video
              key={prefersDark ? 'dark' : 'light'}
              src={prefersDark ? flowDarkMp4 : flowMp4}
              poster={prefersDark ? flowPosterDark : flowPoster}
              autoPlay
              muted
              loop
              playsInline
              className="block w-full"
            />
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}

const clientSteps = [
  {
    step: '01',
    title: 'Znajdź',
    desc: 'Firmy w Twojej okolicy na mapie — z ocenami, usługami i wolnymi terminami.',
    light: mapaFirm,
    dark: mapaFirmDark,
    alt: 'Mapa firm w aplikacji Timelly',
  },
  {
    step: '02',
    title: 'Zarezerwuj',
    desc: 'Wybierz usługę, pracownika i godzinę. Kilka dotknięć i termin jest Twój.',
    light: rezerwacja,
    dark: rezerwacjaDark,
    alt: 'Ekran rezerwacji usługi',
  },
  {
    step: '03',
    title: 'Przyjdź',
    desc: 'Szczegóły wizyty z mapą i nawigacją. Przypomnienie dostaniesz automatycznie.',
    light: szczegoly,
    dark: szczegolyDark,
    alt: 'Szczegóły wizyty z mapą i nawigacją',
  },
];

function ForClients() {
  return (
    <section className="bg-neutral-50 px-5 py-24 sm:py-32 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Dla klientów"
          title="Trzy kroki do wizyty."
          lead={'Od „muszę się ostrzyc" do zarezerwowanego terminu — szybciej, niż wybierzesz numer telefonu.'}
        />
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {clientSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12} className="flex flex-col items-center">
              <PhoneFrame className="w-[220px] lg:w-[250px]">
                <ThemedImage light={s.light} dark={s.dark} alt={s.alt} className="w-full" />
              </PhoneFrame>
              <p className="mt-6 text-sm font-bold tracking-[0.18em] text-accent">{s.step}</p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[280px] text-center text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a14] px-5 py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute left-[-140px] top-1/4 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">
            Na żywo
          </p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Widzisz salę.
            <br />
            Wybierasz miejsce.
          </h2>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-neutral-400 sm:text-xl">
            Mapa sali z obłożeniem na żywo: widzisz, który stolik bilardowy albo fotel jest wolny
            TERAZ, i rezerwujesz dokładnie ten, który chcesz. Avatary pracowników i zajętość
            aktualizują się w czasie rzeczywistym.
          </p>
          <ul className="space-y-3 text-[15px] text-neutral-300">
            {[
              'Interaktywna mapa sali — stoliki, fotele, stanowiska',
              'Obłożenie na żywo, bez odświeżania',
              'Rezerwacja konkretnego miejsca, nie „czegokolwiek"',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center">
          <PhoneFrame className="w-[260px] sm:w-[300px]">
            <img src={bilardDark} alt="Mapa stolików bilardowych z wyborem terminu" loading="lazy" className="w-full" />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  );
}

function ForBusiness() {
  return (
    <section className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Dla firm"
          title="Twój biznes pod kontrolą."
          lead="Kalendarz wielu pracowników, automatyczne rezerwacje i statystyki przychodów — wszystko w jednej aplikacji."
        />

        <Reveal className="flex justify-center">
          {/* iPad on bigger screens, phone on mobile */}
          <TabletFrame className="hidden w-full max-w-3xl md:block">
            <ThemedImage
              light={tabletKalendarz}
              dark={tabletKalendarzDark}
              alt="Kalendarz firmy z grafikiem wielu pracowników"
              className="w-full"
            />
          </TabletFrame>
          <PhoneFrame className="w-[260px] md:hidden">
            <ThemedImage
              light={phoneKalendarz}
              dark={phoneKalendarzDark}
              alt="Kalendarz firmy z grafikiem wielu pracowników"
              className="w-full"
            />
          </PhoneFrame>
        </Reveal>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
              Liczby, które mówią same za siebie.
            </h3>
            <p className="mb-6 max-w-lg text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
              Przychody, liczba wizyt i średnia wartość usługi — per pracownik albo dla całej
              firmy. Widzisz, które dni pracują na Twój wynik.
            </p>
            <ul className="space-y-3 text-[15px] text-neutral-600 dark:text-neutral-300">
              {[
                'Grafik wielu pracowników w jednym widoku',
                'Statystyki przychodów i obłożenia',
                'Przypomnienia SMS do klientów — automatycznie',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="order-1 flex justify-center lg:order-2">
            <TabletFrame className="hidden w-full max-w-xl md:block">
              <ThemedImage
                light={tabletStatystyki}
                dark={tabletStatystykiDark}
                alt="Statystyki przychodów firmy"
                className="w-full"
              />
            </TabletFrame>
            <PhoneFrame className="w-[260px] md:hidden">
              <ThemedImage
                light={phoneStatystyki}
                dark={phoneStatystykiDark}
                alt="Statystyki przychodów firmy"
                className="w-full"
              />
            </PhoneFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function JoinAsFirm() {
  return (
    <section className="bg-neutral-50 px-5 py-24 sm:py-32 dark:bg-white/[0.03]">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">Dla firm</p>
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-white">
          Chcesz dołączyć do Timelly jako firma?
        </h2>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-500 sm:text-xl dark:text-neutral-400">
          Zostaw numer — oddzwonimy, pokażemy aplikację i pomożemy ustawić wszystko pod Twój biznes.
        </p>
        <FirmLeadForm />
      </Reveal>
    </section>
  );
}

function DownloadCta() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:py-36">
      <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="mb-5 text-4xl font-bold tracking-tight text-ink sm:text-6xl dark:text-white">
          Zacznij dziś.
        </h2>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-500 sm:text-xl dark:text-neutral-400">
          Timelly jest bezpłatne — dla klientów i dla firm. Pobierz aplikację albo korzystaj z
          przeglądarki.
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
      <ForClients />
      <LiveSection />
      <ForBusiness />
      <JoinAsFirm />
      <DownloadCta />
    </>
  );
}
