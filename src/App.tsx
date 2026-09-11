import { lazy, Suspense, useEffect } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Bramka from './pages/Bramka';
import Contact from './pages/Contact';
import DeleteAccount from './pages/DeleteAccount';
import Landing from './pages/Landing';

// Lazy chunks: auth pages pull in supabase-js, legal pages are text-heavy
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Terms = lazy(() => import('./pages/Terms'));
const Verify = lazy(() => import('./pages/Verify'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const DEFAULT_META = {
  title: 'Timelly — rezerwacje online dla Twojej firmy',
  description:
    'Aplikacja do rezerwacji dla każdej firmy, która przyjmuje zapisy — od salonów i restauracji po kluby bilardowe i wypożyczalnie. Kalendarz zespołu, rezerwacje online 24/7, przypomnienia SMS, statystyki — na telefon, tablet i przeglądarkę.',
};

// Tytuł i opis per trasa — Google widzi każdą podstronę jako osobną, a nie kopię strony głównej
const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/bramka': {
    title: 'Timelly Bramka — aplikacja pomocnicza dla firm',
    description:
      'Aplikacja pomocnicza na firmowy telefon z Androidem dla firm korzystających z Timelly. Instalacja i parowanie z kontem firmowym.',
  },
  '/contact': {
    title: 'Kontakt — Timelly',
    description: 'Masz pytanie, sugestię lub potrzebujesz pomocy z Timelly? Napisz do nas.',
  },
  '/delete-account': {
    title: 'Usuwanie konta — Timelly',
    description: 'Jak usunąć konto Timelly i jakie dane zostaną usunięte.',
  },
  '/terms': {
    title: 'Regulamin — Timelly',
    description: 'Regulamin korzystania z aplikacji Timelly.',
  },
  '/privacy-policy': {
    title: 'Polityka prywatności — Timelly',
    description: 'Polityka prywatności aplikacji Timelly — jakie dane zbieramy i jak je chronimy.',
  },
  '/reset-password': { title: 'Resetowanie hasła — Timelly', description: 'Ustaw nowe hasło do konta Timelly.' },
  '/verify': { title: 'Weryfikacja — Timelly', description: 'Weryfikacja adresu e-mail w Timelly.' },
};

function RouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? DEFAULT_META;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    // /bramka: strona tylko do dystrybucji APK dla wdrożonych firm — poza indeksem Google
    let robots = document.querySelector('meta[name="robots"]');
    if (pathname === '/bramka') {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex');
    } else {
      robots?.remove();
    }
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouteMeta />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/bramka" element={<Bramka />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </>
  );
}
