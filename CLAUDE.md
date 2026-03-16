# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Timelly Support Site** — landing page and support website for the Timelly app (`timelly.pl`). Built with Expo (React Native Web) and deployed on Vercel. The main Timelly app lives in `../uslugi-na-juz` and is served at `app.timelly.pl`.

## Commands

```bash
npm run web            # Start dev server (web)
npm run start          # Start Expo dev server
```

Build & deploy via Vercel (`vercel.json`): `npx expo export -p web` → `dist/`.

## Architecture

### Stack

- **Expo SDK 52** with React Native Web — web-only in practice (static site)
- **Expo Router** — file-based routing (`app/` directory)
- **Vercel** — hosting with SPA rewrites (all routes → `/`)
- **Supabase** — used for password reset / email verification flows (`utils/supabase.tsx`)

### File structure

```
app/            → Pages (Expo Router file-based routing)
  index.tsx     → Landing page (hero, features, audience, about us)
  contact.tsx   → Contact page (email, phone)
  privacy-policy.tsx → Privacy policy
  delete-account.tsx → Account deletion instructions
  reset-password.tsx → Password reset form (Supabase)
  verify.tsx    → Email verification handler
  _layout.tsx   → Root layout (ThemeProvider + Stack)
components/     → Shared UI (Header, Footer, DownloadButtons, Logo, SplashIcon)
theme/          → Light/dark mode colors + ThemeProvider (auto-detects system preference)
utils/          → Supabase client
email/          → HTML email templates (Supabase auth emails)
assets/         → Images (icon, favicon, splash, screenshots)
public/         → Static files served as-is
```

### Theme system

Auto light/dark mode based on browser preference. Colors defined in `theme/colors.ts`, consumed via `useTheme()` hook from `theme/ThemeProvider.tsx`. Primary color: `#1b1b38` (light) / `#6FA8D0` (dark).

### Relation to main app

This site is the **public-facing landing page** for the Timelly app:
- Domain: `timelly.pl` (this project) vs `app.timelly.pl` (main app)
- DownloadButtons link to App Store / Google Play
- Shares Supabase backend for auth flows (reset password, verify email)
- Email templates in `email/` are used by Supabase auth

## Key conventions

- **Language**: UI text in Polish. Code (variables, functions, comments) in English.
- **TypeScript**: Strict mode. Path alias `@/` maps to project root.
- **Icons**: FontAwesome6 via `@expo/vector-icons`.
- **Styling**: Inline `StyleSheet.create()` — no external CSS framework.
- **Contact info**: Email `usluginajuz@gmail.com`, phone `+48577544977` (hardcoded in `contact.tsx`).
- **Domain**: Registered on home.pl.
