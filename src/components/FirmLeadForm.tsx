import { useState } from 'react';
import type { FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'done' | 'error';

/** „Zostaw numer” — lead firmy do tabeli firm_leads (insert przez anon key). */
export default function FirmLeadForm() {
  const [digits, setDigits] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const valid = /^[0-9]{9}$/.test(digits);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!valid || status === 'sending') return;
    setStatus('sending');
    // supabase-js ładuje się dopiero przy wysyłce — landing nie ciągnie 200 KB na start
    const { supabase } = await import('../lib/supabase');
    const { error } = await supabase.from('firm_leads').insert({ phone: `+48${digits}`, source: 'landing' });
    // 23505 = ten numer już jest — dla usera to sukces
    setStatus(!error || error.code === '23505' ? 'done' : 'error');
  }

  if (status === 'done') {
    return (
      <p className="rounded-2xl bg-emerald-500/10 px-6 py-4 text-center text-[15px] font-medium text-emerald-700 dark:text-emerald-300">
        Dzięki, mamy Twój numer. Odezwiemy się w ciągu dnia roboczego.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label className="flex flex-1 items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 focus-within:border-ink dark:border-white/15 dark:bg-white/5 dark:focus-within:border-accent">
        <span className="text-[15px] font-semibold text-neutral-500 dark:text-neutral-400">+48</span>
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="123 456 789"
          aria-label="Numer telefonu"
          value={digits}
          onChange={(e) => setDigits(e.target.value.replace(/\D/g, '').slice(0, 9))}
          className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-neutral-400 dark:text-white"
        />
      </label>
      <button
        type="submit"
        disabled={!valid || status === 'sending'}
        className="rounded-2xl bg-ink px-6 py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 dark:bg-accent dark:text-ink"
      >
        {status === 'sending' ? 'Wysyłam…' : 'Zostaw numer'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600 sm:basis-full dark:text-red-400">
          Nie udało się wysłać. Napisz na support@timelly.pl.
        </p>
      )}
    </form>
  );
}
