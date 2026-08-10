import { ArrowRight } from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/pl/app/usluginajuz/id6752734347?l=pl';
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.usluginajuzowner.usluginajuz';
const WEB_APP_URL = 'https://app.timelly.pl';

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden>
      <path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );
}

/**
 * Web-app CTA + store badges. Links carried over 1:1 from the old
 * components/DownloadButtons.tsx.
 */
export default function StoreButtons() {
  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href={WEB_APP_URL}
        className="group flex items-center gap-2.5 rounded-full bg-ink px-8 py-3.5 text-[17px] font-semibold text-white shadow-lg shadow-ink/25 transition-transform hover:scale-[1.03] dark:bg-accent dark:text-ink dark:shadow-accent/20"
      >
        Przejdź do aplikacji
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
      </a>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={APP_STORE_URL}
          className="flex min-w-40 items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-2.5 shadow-sm transition-colors hover:border-black/25 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/35"
        >
          <AppleLogo className="h-7 w-7 text-ink dark:text-white" />
          <span className="flex flex-col text-left">
            <span className="text-[11px] leading-tight text-neutral-500 dark:text-neutral-400">
              Pobierz z
            </span>
            <span className="text-[15px] font-semibold leading-tight text-ink dark:text-white">
              App Store
            </span>
          </span>
        </a>
        <a
          href={GOOGLE_PLAY_URL}
          className="flex min-w-40 items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-2.5 shadow-sm transition-colors hover:border-black/25 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/35"
        >
          <GooglePlayLogo className="h-6 w-6 text-ink dark:text-white" />
          <span className="flex flex-col text-left">
            <span className="text-[11px] leading-tight text-neutral-500 dark:text-neutral-400">
              Pobierz z
            </span>
            <span className="text-[15px] font-semibold leading-tight text-ink dark:text-white">
              Google Play
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
