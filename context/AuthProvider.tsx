import { supabase } from "@/utils/supabase";
import { Session, User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      setSession(session ?? null);
      setUser(session?.user ?? null);
      setIsLoading(false);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session ?? null);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session, user, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Kontekst autoryzacji (AuthProvider)
 *
 * ▸ Tworzy globalny kontekst `AuthContext` zawierający dane o sesji i użytkowniku
 * ▸ Obsługuje stan logowania (czy zalogowany, dane użytkownika, ładowanie)
 * ▸ Pozwala na użycie `useAuth()` w komponentach do łatwego sprawdzenia:
 *     - `user` – dane zalogowanego użytkownika (lub `null`)
 *     - `session` – pełna sesja Supabase
 *     - `isLoading` – czy trwa ładowanie danych
 *     - `signOut()` – wylogowuje użytkownika
 *
 * 🔄 useEffect:
 * ▸ Pobiera bieżącą sesję przy starcie aplikacji (`getSession`)
 * ▸ Nasłuchuje na zmiany stanu logowania (logowanie / wylogowanie)
 *
 * 🧠 Użycie:
 * ▸ Komponent `AuthProvider` powinien opakowywać całą aplikację (np. w `RootLayout`)
 * ▸ W komponentach używaj `const { user } = useAuth()` by pobrać dane o użytkowniku
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
