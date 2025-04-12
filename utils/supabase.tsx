import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wetjdllfwnwcvbrcthzv.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndldGpkbGxmd253Y3ZicmN0aHp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MDUwNTgsImV4cCI6MjA1OTE4MTA1OH0.laaN2mn7RwPlHRulwq3CavXFvR1fY_I5Ly2WNv5jLyQ';

/**
 * Plik konfiguracyjny Supabase
 *
 * ▸ Tworzy klienta Supabase (`createClient`) z danymi projektu
 * ▸ Eksportuje gotowego klienta `supabase` do wykorzystania w całej aplikacji
 *
 * ▸ Funkcja `insertSampleCompanies()`:
 *    – Dodaje przykładową firmę do tabeli `companies`
 *    – Używane tylko do testów, można ją później usunąć lub zabezpieczyć
 *
 * ▸ Funkcja `fetchCompanies()`:
 *    – Pobiera wszystkie firmy z tabeli `companies`
 *    – Obsługuje błąd i zwraca pustą tablicę w razie niepowodzenia
 *
 * TODO:
 * 🔧 Wydzielić inne zapytania (np. favorites, users) do osobnych plików w folderze `lib` lub `services`:
 *     np. `lib/fetchFavorites.ts`, `lib/insertFavorite.ts`, `lib/updateUser.ts`
 *
 *     Zalety:
 *     – lepsza separacja odpowiedzialności
 *     – łatwiejsze testowanie
 *     – porządek przy rozroście projektu
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);