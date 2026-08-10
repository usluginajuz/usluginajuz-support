import type { EmailOtpType } from '@supabase/supabase-js';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Verify() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tokenHash = searchParams.get('token_hash');
  const type = searchParams.get('type');

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const didRun = useRef(false);

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    // Check hash fragment for errors (Supabase implicit flow redirect)
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const errorFromHash = hashParams.get('error_description') || hashParams.get('error');

    if (errorFromHash) {
      setErrorMessage(errorFromHash);
      setStatus('error');
      return;
    }

    // Verify using token_hash from email template
    if (tokenHash && type) {
      supabase.auth
        .verifyOtp({ token_hash: tokenHash, type: type as EmailOtpType })
        .then(({ error }) => {
          if (error) {
            setErrorMessage(error.message);
            setStatus('error');
          } else {
            setStatus('success');
          }
        });
    } else {
      setErrorMessage('Nieprawidłowy link weryfikacyjny.');
      setStatus('error');
    }
  }, [tokenHash, type]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 pb-16 pt-24">
      <div className="flex w-full max-w-[440px] flex-col items-center rounded-3xl border border-black/10 bg-neutral-50 p-9 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
        {status === 'loading' && (
          <>
            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-ink/10 dark:bg-accent/15">
              <Loader2 className="h-8 w-8 animate-spin text-ink dark:text-accent" />
            </div>
            <h1 className="mb-2 text-2xl font-extrabold text-ink dark:text-white">
              Weryfikacja konta...
            </h1>
            <p className="max-w-[340px] text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              Proszę czekać, trwa potwierdzanie adresu e-mail.
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-ink/10 dark:bg-accent/15">
              <CheckCircle2 className="h-8 w-8 text-ink dark:text-accent" />
            </div>
            <h1 className="mb-2 text-2xl font-extrabold text-ink dark:text-white">
              Konto zostało aktywowane
            </h1>
            <p className="mb-7 max-w-[340px] text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              Możesz wrócić do aplikacji i się zalogować.
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-accent/15">
              <XCircle className="h-8 w-8 text-accent" />
            </div>
            <h1 className="mb-2 text-2xl font-extrabold text-ink dark:text-white">
              Coś poszło nie tak
            </h1>
            <p className="mb-7 max-w-[340px] text-[15px] leading-relaxed text-accent">
              {errorMessage}
            </p>
          </>
        )}

        {status !== 'loading' && (
          <button
            onClick={() => navigate('/', { replace: true })}
            className="w-full rounded-xl bg-accent py-4 font-bold text-white shadow-lg shadow-accent/30 transition-opacity hover:opacity-90"
          >
            Powrót do strony głównej
          </button>
        )}
      </div>
    </div>
  );
}
