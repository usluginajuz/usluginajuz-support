# Plan: przepisanie timelly.pl (Expo → Vite) — strona reklamowa w stylu Apple

Status: w realizacji (agent). Po zakończeniu ten plik można usunąć albo zostawić jako dokumentacja decyzji.

## Cel

Zastąpić obecną stronę Expo/React-Native-Web nowoczesną stroną marketingową w stylu
stron produktowych Apple (duża typografia, scroll-driven animacje, sticky sections,
płynne przejścia, light/dark), zachowując 1:1 funkcjonalność stron pomocniczych.

## Stack (zdecydowane)

- **Vite + React + TypeScript** (SPA, react-router-dom)
- **Tailwind CSS v4**
- **Motion** (następca framer-motion, pakiet `motion`) — scroll-driven animacje
- Deploy: **Vercel** bez zmian koncepcji (`vite build` → `dist/`, SPA rewrites)
- Ten sam projekt/repo: stary kod Expo usuwamy (git history = backup)

## Routes — MUSZĄ zostać zachowane (linki w mailach Supabase i sklepach!)

| Route | Co robi | Uwagi przy porcie |
|---|---|---|
| `/` | Landing (przepisujemy od zera) | nowy design |
| `/reset-password` | Formularz resetu hasła (Supabase) | logika 1:1 z `app/reset-password.tsx`; tokeny przychodzą w URL hash |
| `/verify` | Handler weryfikacji e-maila | logika 1:1 z `app/verify.tsx` |
| `/delete-account` | Instrukcja usunięcia konta | treść 1:1 |
| `/bramka` | Dystrybucja APK Timelly Bramka | treść + link do APK z `public/downloads/` |
| `/terms` | Regulamin | treść 1:1 |
| `/privacy-policy` | Polityka prywatności | treść 1:1 |
| `/contact` | Kontakt | treść 1:1, może dostać nowy styling |

- `email/` (szablony maili Supabase) — NIE RUSZAĆ.
- `public/downloads/` (APK) — przenieść bez zmian.
- Supabase client: URL + anon key z env (`EXPO_PUBLIC_SUPABASE_URL/KEY` w `.env`);
  w Vite przemianować na `VITE_SUPABASE_URL/KEY`, zaktualizować `.env` lokalnie
  i pamiętać, że NA VERCELU trzeba dodać nowe zmienne (zgłosić userowi w podsumowaniu — sam nie zmieniaj).
- `vercel.json`: `buildCommand: "vite build"` (albo `npm run build`), `outputDirectory: "dist"`, rewrites SPA zostają.

## Branding

- Logo i ikony: `assets/images/`, `public/icon.png`, splash w `public/`
- Kolory marki: `theme/colors.ts` starego projektu — primary `#1b1b38` (light) / `#6FA8D0` (dark)
- Tekst UI po polsku; kod po angielsku. Pełna poprawność polskich znaków.
- Motyw: auto light/dark wg `prefers-color-scheme` (jak obecnie).

## Materiały demo (źródło: `../uslugi-na-juz/timelly-demo/`)

Wszystkie screeny: iPhone 1320×2868, iPad 2064×2752, status bar 09:41, dane demo
„Barbershop Nova" (Białystok). Sufiks `_b` = dark mode. Numeracja lustrzana phone/tablet:

- `screen-01-kalendarz` — kalendarz firmy multi-pracownik (hero sekcji „dla firm")
- `screen-02-statystyki` — przychody/statystyki firmy (11 550 zł, 96 wizyt)
- `screen-03-rezerwacja` — booking klienta: profil firmy, usługi, kalendarz
- `screen-04-mapa-firm` — mapa firm z pinami (perspektywa klienta)
- `screen-05-szczegoly-wizyty` — szczegóły wizyty: mapa, nawigacja, pracownik
- `screen-06-ranking` — ranking punktów lojalnościowych (prywatność: cenzura nazwiska)
- `screen-07-bilard` — TYLKO phone: mapa stolików bilardowych + wybór terminu (unikalny feature)
- `nagranie.mov` / `nagranie_b.mov` — ~14–17 s, pełny flow rezerwacji z mapą sali
  LIVE (avatary pracowników, obłożenie na żywo) do „Potwierdź wizytę"

Obróbka do weba (agent robi sam, ffmpeg jest dostępny):
- PNG → WebP (jakość ~85) w rozmiarach docelowych (max ~800 px szer. dla telefonu
  w ramce); oryginałów NIE kasować z `timelly-demo/`
- .mov → MP4 (H.264, CRF ~23, bez audio, `-movflags +faststart`) + poster frame;
  cel < 3 MB per wideo; `playsInline muted loop autoplay` w ramce telefonu
- Skopiowane/wygenerowane assety trzymać w repo stronki (np. `src/assets/demo/`)

## Design landing (kierunek, agent ma swobodę artystyczną)

Styl: apple.com/macbook — pełnoekranowe sekcje, ogromna typografia nagłówków,
produkt (screeny w ramkach iPhone'a/iPada z CSS) jako bohater, scroll-driven
reveal/parallax (Motion `useScroll`/`whileInView`), subtelne blur-gradienty w tle.

Szkic sekcji (kolejność/liczba do decyzji agenta):
1. **Hero** — claim + telefon z wideo flow rezerwacji (autoplay), CTA: App Store / Google Play (linki z `components/DownloadButtons.tsx`)
2. **Dla klientów** — znajdź (mapa firm) → zarezerwuj (booking) → przyjdź (szczegóły wizyty z nawigacją)
3. **Live** — mapa sali z obłożeniem na żywo (wideo/screen bilard + barbershop): rezerwujesz konkretny stolik/fotel, widzisz co wolne TERAZ
4. **Dla firm** — kalendarz multi-pracownik + statystyki przychodów (tu pasuje iPad)
5. **Lojalność** — ranking punktów, prywatność wbudowana
6. **Pobierz** — badge sklepów + QR? (opcjonalnie)
7. **Footer** — linki: kontakt, regulamin, polityka prywatności, usunięcie konta, bramka

Duże ekrany pokazują iPada, mobile pokazuje screeny phone. Dark/light strony
podmienia też screeny (`_b` w dark).

## Kolejność pracy (checklista agenta)

1. [ ] Branch `redesign-vite` od main
2. [ ] Szkielet Vite+TS+Tailwind+Motion+react-router; usunięcie plików Expo (app/, app.json, eas.json, expo deps itd.)
3. [ ] Port stron funkcjonalnych 1:1 (reset-password, verify, delete-account, bramka, terms, privacy-policy, contact) + wspólny Header/Footer w nowym stylu
4. [ ] `vercel.json` + `.env` (VITE_*) + build przechodzi (`npm run build`)
5. [ ] Obróbka assetów (WebP, MP4)
6. [ ] Landing — sekcje + animacje + responsywność (mobile first, breakpointy do iPada i desktopu)
7. [ ] Weryfikacja: build bez błędów, wszystkie route'y renderują się w preview (`vite preview`), lighthouse-owe podstawy (lazy-load wideo/obrazów poniżej folda)
8. [ ] Commit(y) na branchu. **STOP — bez push, bez PR, bez deployu.** Podsumowanie dla usera: co zrobione, jak obejrzeć lokalnie (`npm run dev`), co trzeba ręcznie (env na Vercelu, ew. podpięcie brancha)

## Twarde zasady

- Nie pushować, nie robić PR, nie deployować — koniec pracy = commit lokalny + raport.
- Nie ruszać `email/`, `public/downloads/`.
- Nie kasować oryginałów w `../uslugi-na-juz/timelly-demo/`.
- Stare strony prawne przenieść treściowo 1:1 (bez „ulepszania" treści prawnej).
- UI po polsku, poprawne diakrytyki.

---

# Runda 2 (2026-09-11): landing pod FIRMY + sekcja branżowa

Uwaga wspólnika: strona ma zachęcać FIRMĘ, nie klienta. Układ: góra uniwersalna
(pobierz / otwórz apkę), potem wszystko pod firmy, na dole krótkie „dla klientów".
Bez sekcji cennika. Branże na start: beauty/barber, bilard/rozrywka, restauracje,
wypożyczalnie (+ kafelek-furtka „Twoja branża? dostosujemy się").

## Reguła ochrony przed konkurencją (wnioski z rozbioru Timsy)

- Pokazujemy EFEKT i PROBLEM, nigdy MECHANIZM. „Klient widzi, który stolik jest
  wolny, zanim zadzwoni" — tak. Jak liczymy sloty/piny — nie.
- ZERO wzmianek o bramce SMS / SMS z SIM-a firmy / koszcie 0 zł. Na stronie tylko
  „automatyczne przypomnienia SMS" jako zwykła cecha, bez screena.
- Żadnych screenów paneli konfiguracyjnych, ustawień, parowania, edytorów mapy,
  panelu admina. Tylko ekrany „wynikowe" (kalendarz pełen wizyt, statystyki,
  widok klienta) — to konkurencja i tak zobaczy po zainstalowaniu apki.
- Żadnych publicznych wideo-tutoriali panelu (Timsy tak odsłonili cały produkt).
- Argumenty, które są NASZE i bezpieczne: opinie tylko po odbytej wizycie, dane w
  UE/RODO, natywna apka firmy na telefon i tablet (Timsy: tylko web), 12 języków
  dla klientów, spójne statystyki, zero reklam i trackerów w apce.
- Nie kopiować: „brak DAC7", moderacja opinii przez firmę, obietnice „wkrótce".

## Materiały do dostarczenia (numeracja ciąg dalszy; light + `_b` dark)

Panel firmy: 08-uslugi (phone), 09-pracownicy (phone, +tablet jeśli grafik),
10-profil-firmy (phone + tablet; wizytówka z opiniami), 12-wydarzenia (phone),
nagranie-firma(.mov/_b) — kalendarz → dodanie wizyty → statystyki, 12–20 s.
Branże: 13-restauracja-mapa (phone, +tablet), 14-restauracja-rezerwacja (phone),
15-wypozyczalnia-oferta (phone), 16-wypozyczalnia-flota (tablet).
Opcjonalnie: 17-jezyk-en (phone; pierwszy ekran klienta po angielsku).
Wycofane: 11-sms (bramka nie idzie na stronę).
