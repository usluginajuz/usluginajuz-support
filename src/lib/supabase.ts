import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// ponytail: placeholder fallback keeps the page rendering when env vars are
// missing (local preview) instead of crashing at module eval; production on
// Vercel must define VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY.
export const supabase = createClient(
  supabaseUrl ?? 'https://placeholder.supabase.co',
  supabaseAnonKey ?? 'placeholder'
);

export const CONTACT_EMAIL = 'support@timelly.pl';
