import type { EmailOtpType } from '@supabase/supabase-js';
import { Check, Loader2, Lock, XCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tokenHash = searchParams.get('token_hash');
  const type = searchParams.get('type');

  const [sessionReady, setSessionReady] = useState(false);
  const [sessionError, setSessionError] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const didRun = useRef(false);

  // First: verify the token from the email to establish a session
  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    if (tokenHash && type) {
      supabase.auth
        .verifyOtp({ token_hash: tokenHash, type: type as EmailOtpType })
        .then(({ error }) => {
          if (error) {
            setSessionError(error.message);
          } else {
            setSessionReady(true);
          }
        });
    } else {
      // Fallback: check if session exists from hash fragment (implicit flow)
      supabase.auth.getSession().then(({ data }) => {
        if (data.session) {
          setSessionReady(true);
        } else {
          setSessionError('Nieprawidłowy lub wygasły link do resetowania hasła.');
        }
      });
    }
  }, [tokenHash, type]);

  const handlePasswordReset = async () => {
    if (password.length < 6) {
      setFormError('Za krótkie hasło — hasło musi mieć co najmniej 6 znaków.');
      return;
    }
    if (password !== confirm) {
      setFormError('Hasła się nie zgadzają.');
      return;
    }
    setFormError('');
    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);
    if (error) {
      setFormError(`Coś poszło nie tak: ${error.message}`);
    } else {
      setResetSuccess(true);
      setPassword('');
      setConfirm('');
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 pb-16 pt-24">
      <div className="flex w-full max-w-[440px] flex-col items-center rounded-3xl border border-black/10 bg-neutral-50 p-9 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
        {sessionError ? (
          <>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
              <XCircle className="h-7 w-7 text-accent" />
            </div>
            <h1 className="mb-2 text-2xl font-extrabold text-ink dark:text-white">Link wygasł</h1>
            <p className="mb-2 max-w-[340px] text-[15px] leading-relaxed text-accent">
              {sessionError}
            </p>
            <p className="mb-7 max-w-[340px] text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              Poproś o nowy link do resetowania hasła w aplikacji.
            </p>
            <button
              onClick={() => navigate('/', { replace: true })}
              className="w-full rounded-xl bg-accent py-4 font-bold text-white transition-opacity hover:opacity-90"
            >
              Powrót do strony głównej
            </button>
          </>
        ) : !sessionReady ? (
          <>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-ink/10 dark:bg-accent/15">
              <Loader2 className="h-7 w-7 animate-spin text-ink dark:text-accent" />
            </div>
            <h1 className="mb-2 text-2xl font-extrabold text-ink dark:text-white">
              Przygotowywanie...
            </h1>
            <p className="text-[15px] text-neutral-500 dark:text-neutral-400">
              Trwa weryfikacja linku.
            </p>
          </>
        ) : resetSuccess ? (
          <>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-ink/15 dark:bg-accent/20">
              <Check className="h-7 w-7 text-ink dark:text-accent" />
            </div>
            <h1 className="mb-2 text-2xl font-extrabold text-ink dark:text-white">
              Hasło zostało zmienione
            </h1>
            <p className="mb-7 max-w-[340px] text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              Teraz możesz wrócić do aplikacji i się zalogować.
            </p>
            <button
              onClick={() => navigate('/', { replace: true })}
              className="w-full rounded-xl bg-accent py-4 font-bold text-white transition-opacity hover:opacity-90"
            >
              Powrót do strony głównej
            </button>
          </>
        ) : (
          <>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-ink/10 dark:bg-accent/15">
              <Lock className="h-6 w-6 text-ink dark:text-accent" />
            </div>
            <h1 className="mb-2 text-2xl font-extrabold text-ink dark:text-white">
              Ustaw nowe hasło
            </h1>
            <p className="mb-7 max-w-[340px] text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              Wpisz nowe hasło, które chcesz ustawić dla swojego konta.
            </p>

            <div className="mb-4 w-full text-left">
              <label
                htmlFor="new-password"
                className="mb-1.5 ml-1 block text-[13px] font-semibold text-ink dark:text-white"
              >
                Nowe hasło
              </label>
              <input
                id="new-password"
                type="password"
                placeholder="Wprowadź nowe hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base text-ink outline-none focus:border-accent dark:border-white/15 dark:bg-white/5 dark:text-white"
              />
            </div>

            <div className="mb-4 w-full text-left">
              <label
                htmlFor="confirm-password"
                className="mb-1.5 ml-1 block text-[13px] font-semibold text-ink dark:text-white"
              >
                Powtórz hasło
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Powtórz nowe hasło"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base text-ink outline-none focus:border-accent dark:border-white/15 dark:bg-white/5 dark:text-white"
              />
            </div>

            {formError ? (
              <p className="mb-3 w-full text-left text-sm font-medium text-red-500">{formError}</p>
            ) : null}

            <button
              onClick={handlePasswordReset}
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-accent py-4 font-bold text-white shadow-lg shadow-accent/30 transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Zmień hasło'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
