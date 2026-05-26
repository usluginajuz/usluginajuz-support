import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useTheme } from '@/theme/ThemeProvider';
import { ThemeColors } from '@/theme/colors';
import { CONTACT_EMAIL } from '@/utils/supabase';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

const LAST_UPDATED = '26 maja 2026';

export default function PrivacyPolicyScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const EmailLink = () => (
    <Text
      style={styles.link}
      onPress={() => Linking.openURL(`mailto:${CONTACT_EMAIL}`)}
    >
      {CONTACT_EMAIL}
    </Text>
  );

  return (
    <View style={styles.page}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ── Page header ── */}
        <View style={styles.pageHeader}>
          <View style={styles.iconCircle}>
            <FontAwesome6 name="shield-halved" size={24} color={colors.primary} />
          </View>
          <Text style={styles.pageTitle}>Polityka Prywatności</Text>
          <Text style={styles.pageSubtitle}>
            Ostatnia aktualizacja: {LAST_UPDATED}
          </Text>
        </View>

        {/* ── 1. Administrator danych ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="user-shield"
            title="1. Administrator danych"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            Administratorem danych osobowych przetwarzanych w aplikacji Timelly
            jest Stanisław Kryński (dalej: „Administrator").
          </Text>
          <Text style={styles.text}>
            Kontakt z Administratorem: <EmailLink />
          </Text>
          <Text style={styles.textMuted}>
            Aplikacja Timelly nie jest powiązana z zarejestrowaną działalnością
            gospodarczą. Usługa jest bezpłatna i nie pobiera żadnych opłat od
            użytkowników.
          </Text>
        </View>

        {/* ── 2. Jakie dane zbieramy ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="database"
            title="2. Jakie dane zbieramy"
            colors={colors}
            styles={styles}
          />

          <Text style={styles.subheading}>Konto klienta (użytkownik indywidualny)</Text>
          <BulletList
            items={[
              'Nazwa użytkownika (np. imię i nazwisko)',
              'Numer telefonu',
              'Zdjęcie profilowe (opcjonalnie)',
            ]}
            color={colors.primary}
            styles={styles}
          />

          <Text style={styles.subheading}>Konto firmowe</Text>
          <BulletList
            items={[
              'Adres e‑mail i hasło (uwierzytelnianie)',
              'Imię i nazwisko właściciela',
              'Dane firmy: nazwa, adres, miasto, numer telefonu, e‑mail firmowy, logo',
              'Współrzędne geograficzne firmy (szerokość i długość geograficzna)',
              'Usługi: nazwa, opis, cena, czas trwania',
              'Godziny pracy, przerwy, dni wolne',
              'Zdjęcia portfolio i zdjęcia informacyjne',
              'Informacje o rekrutacji (opcjonalnie)',
            ]}
            color={colors.primary}
            styles={styles}
          />

          <Text style={styles.subheading}>Rezerwacje</Text>
          <BulletList
            items={[
              'Data, godzina, status rezerwacji',
              'Wybrane usługi i przypisany pracownik',
              'Notatki do rezerwacji (opcjonalnie)',
            ]}
            color={colors.primary}
            styles={styles}
          />

          <Text style={styles.subheading}>Dane techniczne</Text>
          <BulletList
            items={[
              'Data ostatniego logowania do aplikacji',
              'Licznik uruchomień aplikacji (w celu wykrywania nieaktywnych kont)',
              'Tokeny push notification (do wysyłania powiadomień)',
            ]}
            color={colors.primary}
            styles={styles}
          />

          <Text style={styles.subheading}>Opinie</Text>
          <BulletList
            items={[
              'Ocena (1–5) i komentarz tekstowy wystawiony firmie',
            ]}
            color={colors.primary}
            styles={styles}
          />
        </View>

        {/* ── 3. Cele przetwarzania ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="bullseye"
            title="3. Cele i podstawy przetwarzania"
            colors={colors}
            styles={styles}
          />
          <NumberedList
            items={[
              {
                title: 'Świadczenie usługi',
                desc: 'Rejestracja konta, obsługa rezerwacji, wyświetlanie firm i usług, wysyłanie powiadomień push i SMS — na podstawie umowy (art. 6 ust. 1 lit. b RODO).',
              },
              {
                title: 'Utrzymanie bezpieczeństwa',
                desc: 'Monitorowanie aktywności konta, wykrywanie nadużyć — na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO).',
              },
              {
                title: 'Wyświetlanie lokalizacji firm',
                desc: 'Wykorzystanie Google Maps SDK do prezentowania firm na mapie — na podstawie umowy (art. 6 ust. 1 lit. b RODO).',
              },
              {
                title: 'Komunikacja',
                desc: 'Odpowiadanie na zapytania i obsługa wniosków o usunięcie konta — na podstawie prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).',
              },
            ]}
            colors={colors}
            styles={styles}
          />
        </View>

        {/* ── 4. Udostępnianie danych ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="share-nodes"
            title="4. Komu udostępniamy dane"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            Dane osobowe nie są sprzedawane ani udostępniane podmiotom trzecim w
            celach marketingowych. Dostęp do danych mają wyłącznie:
          </Text>
          <BulletList
            items={[
              'Supabase Inc. — dostawca infrastruktury (baza danych, uwierzytelnianie, przechowywanie plików). Dane przechowywane na serwerach AWS w regionie Unii Europejskiej.',
              'Google LLC — Google Maps SDK wykorzystywane do wyświetlania map i lokalizacji firm.',
              'Dostawca usług SMS — do wysyłania powiadomień SMS o rezerwacjach.',
              'Expo (EAS) — do dostarczania powiadomień push na urządzenia mobilne.',
            ]}
            color={colors.textSecondary}
            styles={styles}
          />

          <View style={styles.noteBox}>
            <FontAwesome6 name="circle-info" size={14} color={colors.primary} style={{ marginTop: 2 }} />
            <Text style={styles.noteText}>
              Firmy korzystające z Timelly widzą dane klientów, którzy dokonali
              u nich rezerwacji: nazwę użytkownika oraz numer telefonu (jeśli
              podany). Klienci widzą dane publiczne firmy: nazwę, adres,
              usługi, godziny pracy i zdjęcia.
            </Text>
          </View>
        </View>

        {/* ── 5. Przechowywanie danych ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="server"
            title="5. Gdzie przechowujemy dane"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            Dane osobowe są przechowywane na serwerach Supabase (AWS) w regionie
            Unii Europejskiej. Pliki (zdjęcia profilowe, portfolio, zdjęcia
            informacyjne) są przechowywane w Supabase Storage w tym samym
            regionie.
          </Text>
          <Text style={styles.textMuted}>
            Korzystanie z Google Maps SDK oraz usług push notification może
            wiązać się z przekazywaniem ograniczonych danych technicznych
            (np. współrzędnych, tokenów urządzenia) do serwerów Google i Expo
            zlokalizowanych poza UE, zgodnie z ich politykami prywatności i
            odpowiednimi mechanizmami transferu danych.
          </Text>
        </View>

        {/* ── 6. Okres przechowywania ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="hourglass-half"
            title="6. Jak długo przechowujemy dane"
            colors={colors}
            styles={styles}
          />
          <BulletList
            items={[
              'Dane konta — przez cały okres korzystania z usługi, do momentu usunięcia konta.',
              'Dane rezerwacji — przez okres trwania konta. Po usunięciu konta rezerwacje są anulowane i usuwane.',
              'Zdjęcia — usuwane wraz z kontem lub firmą.',
              'Dane techniczne (logi, kopie zapasowe) — przechowywane tymczasowo zgodnie z cyklem retencji dostawcy (zwykle do 30 dni).',
              'Dane wymagane prawem — przechowywane tak długo, jak wymaga tego obowiązujące prawo.',
            ]}
            color={colors.textSecondary}
            styles={styles}
          />
        </View>

        {/* ── 7. Prawa użytkownika ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="scale-balanced"
            title="7. Twoje prawa"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            Zgodnie z RODO przysługują Ci następujące prawa:
          </Text>
          <NumberedList
            items={[
              {
                title: 'Prawo dostępu',
                desc: 'Możesz zażądać informacji o tym, jakie dane przetwarzamy.',
              },
              {
                title: 'Prawo do sprostowania',
                desc: 'Możesz poprawić swoje dane w ustawieniach aplikacji lub kontaktując się z nami.',
              },
              {
                title: 'Prawo do usunięcia',
                desc: 'Możesz usunąć konto z poziomu aplikacji (Profil → Ustawienia → Usuń konto) lub wysyłając e‑mail.',
              },
              {
                title: 'Prawo do ograniczenia przetwarzania',
                desc: 'Możesz zażądać ograniczenia przetwarzania danych w określonych sytuacjach.',
              },
              {
                title: 'Prawo do przenoszenia danych',
                desc: 'Możesz zażądać kopii swoich danych w formacie nadającym się do odczytu maszynowego.',
              },
              {
                title: 'Prawo sprzeciwu',
                desc: 'Możesz sprzeciwić się przetwarzaniu danych opartemu na prawnie uzasadnionym interesie.',
              },
              {
                title: 'Prawo do skargi',
                desc: 'Masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).',
              },
            ]}
            colors={colors}
            styles={styles}
          />
          <Text style={[styles.text, { marginTop: 16 }]}>
            Aby skorzystać z powyższych praw, skontaktuj się z nami: <EmailLink />
          </Text>
        </View>

        {/* ── 8. Pliki cookie ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="cookie-bite"
            title="8. Pliki cookie"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            Strona internetowa Timelly może wykorzystywać pliki cookie
            niezbędne do prawidłowego działania serwisu (np. sesja
            uwierzytelniania Supabase). Nie stosujemy plików cookie do celów
            analitycznych ani reklamowych.
          </Text>
        </View>

        {/* ── 9. Bezpieczeństwo ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="lock"
            title="9. Bezpieczeństwo danych"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            Stosujemy odpowiednie środki techniczne i organizacyjne w celu
            ochrony danych osobowych, w tym:
          </Text>
          <BulletList
            items={[
              'Szyfrowanie połączeń (HTTPS/TLS)',
              'Row Level Security (RLS) w bazie danych — użytkownicy mają dostęp wyłącznie do swoich danych',
              'Haszowanie haseł po stronie Supabase Auth',
              'Kontrola dostępu oparta na rolach (właściciel, pracownik, klient)',
            ]}
            color={colors.primary}
            styles={styles}
          />
        </View>

        {/* ── 10. Dzieci ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="child"
            title="10. Dzieci"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            Aplikacja Timelly nie jest przeznaczona dla osób poniżej 16. roku
            życia. Nie zbieramy świadomie danych od dzieci. Jeśli
            stwierdzimy, że zostały zebrane dane osoby poniżej 16. roku
            życia, zostaną one niezwłocznie usunięte.
          </Text>
        </View>

        {/* ── 11. Zmiany ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="pen-to-square"
            title="11. Zmiany w polityce prywatności"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            Administrator zastrzega sobie prawo do aktualizacji niniejszej
            polityki prywatności. O istotnych zmianach użytkownicy zostaną
            poinformowani za pośrednictwem aplikacji lub drogą e‑mailową.
            Aktualna wersja polityki jest zawsze dostępna pod adresem strony
            internetowej Timelly.
          </Text>
        </View>

        {/* ── 12. Ranking i widoczność profilu ── */}
        <View style={styles.card} nativeID="ranking">
          <SectionHeader
            icon="trophy"
            title="12. Ranking i widoczność profilu"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            Aplikacja Timelly udostępnia opcjonalny miesięczny ranking
            użytkowników bazujący na punktach zdobywanych za zrealizowane
            wizyty. Sekcja opisuje jakie dane są publikowane i na jakiej
            podstawie prawnej.
          </Text>

          <Text style={styles.subheading}>Jakie dane pokazujemy innym</Text>
          <BulletList
            items={[
              'Twoje imię (pierwszy człon pola „nazwa użytkownika") — np. „Mateusz".',
              'Twoje zdjęcie profilowe (jeśli zostało dodane).',
              'Liczbę punktów zdobytych w bieżącym miesiącu kalendarzowym.',
              'Twoją ligę (Brąz, Srebro, Złoto, Platyna, Diament — wyliczana z punktów).',
              'Twoją pozycję w rankingu miesięcznym.',
            ]}
            color={colors.primary}
            styles={styles}
          />

          <Text style={styles.subheading}>Podstawa prawna</Text>
          <NumberedList
            items={[
              {
                title: 'Zgoda na uczestnictwo w rankingu (art. 6 ust. 1 lit. a RODO)',
                desc: 'Wyświetlanie Twojej pozycji, punktów i ligi w miesięcznym rankingu — w trybie z cenzurą (M*****z, bez avatara) lub pełnym (imię + avatar) — odbywa się wyłącznie po wyrażeniu przez Ciebie zgody w aplikacji przy pierwszym wejściu w sekcję rankingu.',
              },
              {
                title: 'Zgoda na rozpowszechnianie wizerunku (art. 81 ust. 1 Prawa autorskiego)',
                desc: 'Pokazanie Twojego zdjęcia profilowego innym użytkownikom (tylko tryb pełny) wymaga odrębnej, świadomej zgody na rozpowszechnianie wizerunku. Wybierając „Pełne imię + avatar" w aplikacji potwierdzasz tę zgodę. W trybie z cenzurą zdjęcie nie jest pokazywane i ta zgoda nie jest wymagana.',
              },
            ]}
            colors={colors}
            styles={styles}
          />

          <Text style={styles.subheading}>Dwa tryby widoczności (Twój wybór)</Text>
          <BulletList
            items={[
              'Tryb pełny — inni widzą Twoje imię (pierwszy człon nazwy użytkownika) oraz Twoje zdjęcie profilowe. Ten tryb wymaga osobnej zgody na rozpowszechnianie wizerunku (art. 81 ust. 1 Prawa autorskiego).',
              'Tryb z cenzurą (domyślny dla nowych użytkowników) — inni widzą Cię z maskowanym imieniem (np. „M*****z") oraz bez zdjęcia profilowego. Pozostajesz w rankingu, ale Twoje dane osobowe nie są pokazywane. Wystarczy do tego ogólna zgoda na uczestnictwo w rankingu.',
              'Tryb możesz zmienić w każdej chwili: Profil → toggle „Pokaż mnie w rankingu" lub Profil → Ustawienia → „Ranking i prywatność". Zmiana zaczyna obowiązywać od razu.',
              'Niezależnie od trybu, swoją własną pozycję w rankingu zawsze widzisz w postaci pełnej (po Twojej stronie aplikacji).',
            ]}
            color={colors.textSecondary}
            styles={styles}
          />

          <Text style={styles.subheading}>Wycofanie zgody i pełne usunięcie z rankingu</Text>
          <BulletList
            items={[
              'Wycofanie zgody na publikację pełnych danych = przejście w tryb z cenzurą. Twoje imię i zdjęcie przestają być pokazywane innym, ale Twoje punkty nadal liczą się w rankingu (jako anonimowy wpis).',
              'Pełne usunięcie profilu z rankingu (zniknięcie z listy) wymaga wniosku do Administratora pod adresem support@timelly.pl — usuwamy bez zbędnej zwłoki.',
              'Administrator zastrzega sobie prawo do całkowitego usunięcia profilu z rankingu w przypadku naruszenia regulaminu (np. nadużycia punktowego).',
              'Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano przed jej wycofaniem.',
            ]}
            color={colors.textSecondary}
            styles={styles}
          />

          <View style={styles.noteBox}>
            <FontAwesome6 name="circle-info" size={14} color={colors.primary} style={{ marginTop: 2 }} />
            <Text style={styles.noteText}>
              Ranking nie jest widoczny dla osób trzecich spoza aplikacji
              Timelly — widzą go wyłącznie inni zalogowani użytkownicy. Dane
              rankingu nie są udostępniane firmom prowadzącym profile w
              Timelly ani podmiotom zewnętrznym.
            </Text>
          </View>
        </View>

        {/* ── 13. Kontakt ── */}
        <View style={styles.card}>
          <SectionHeader
            icon="headset"
            title="13. Kontakt"
            colors={colors}
            styles={styles}
          />
          <Text style={styles.text}>
            W sprawach związanych z ochroną danych osobowych skontaktuj się z
            Administratorem:
          </Text>
          <View style={styles.contactBox}>
            <Text style={styles.contactLabel}>Administrator</Text>
            <Text style={styles.contactValue}>Stanisław Kryński</Text>
          </View>
          <View style={styles.contactBox}>
            <Text style={styles.contactLabel}>E‑mail</Text>
            <Text
              style={[styles.contactValue, styles.link]}
              onPress={() => Linking.openURL(`mailto:${CONTACT_EMAIL}`)}
            >
              {CONTACT_EMAIL}
            </Text>
          </View>
        </View>

        <View style={{ width: '100%' }}>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}

// ══════════════════════════════════════════
// Sub-components
// ══════════════════════════════════════════

function SectionHeader({
  icon,
  title,
  colors,
  styles,
}: {
  icon: string;
  title: string;
  colors: ThemeColors;
  styles: ReturnType<typeof createStyles>;
}) {
  return (
    <View style={styles.cardHeader}>
      <View style={styles.cardIconWrap}>
        <FontAwesome6 name={icon} size={18} color={colors.primary} />
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
}

function BulletList({
  items,
  color,
  styles,
}: {
  items: string[];
  color: string;
  styles: ReturnType<typeof createStyles>;
}) {
  return (
    <View style={{ marginBottom: 8 }}>
      {items.map((item, i) => (
        <View key={i} style={styles.bulletRow}>
          <View style={[styles.bulletDot, { backgroundColor: color }]} />
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function NumberedList({
  items,
  colors,
  styles,
}: {
  items: { title: string; desc: string }[];
  colors: ThemeColors;
  styles: ReturnType<typeof createStyles>;
}) {
  return (
    <View style={{ gap: 14 }}>
      {items.map((item, i) => (
        <View key={i} style={styles.numberedRow}>
          <View style={styles.numberedCircle}>
            <Text style={[styles.numberedNumber, { color: colors.primary }]}>
              {i + 1}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.numberedTitle}>{item.title}</Text>
            <Text style={styles.numberedDesc}>{item.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

// ══════════════════════════════════════════
// Styles
// ══════════════════════════════════════════

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      alignItems: 'center',
      paddingBottom: 0,
    },

    // ── Page header ──
    pageHeader: {
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingTop: 48,
      paddingBottom: 32,
      maxWidth: 600,
    },
    iconCircle: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: colors.primary + '15',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    pageTitle: {
      fontSize: 28,
      fontWeight: '800',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 8,
    },
    pageSubtitle: {
      fontSize: 14,
      color: colors.textSecondary,
      textAlign: 'center',
    },

    // ── Card ──
    card: {
      width: '100%',
      maxWidth: 600,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      padding: 24,
      marginBottom: 16,
      marginHorizontal: 24,
      borderWidth: 1,
      borderColor: colors.border,
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16,
    },
    cardIconWrap: {
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: colors.primary + '15',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
      flex: 1,
    },

    // ── Text ──
    text: {
      fontSize: 15,
      color: colors.text,
      lineHeight: 24,
      marginBottom: 8,
    },
    textMuted: {
      fontSize: 14,
      color: colors.textSecondary,
      lineHeight: 22,
      marginTop: 8,
    },
    subheading: {
      fontSize: 15,
      fontWeight: '700',
      color: colors.text,
      marginTop: 16,
      marginBottom: 10,
    },
    link: {
      color: colors.primary,
      fontWeight: '600',
    },

    // ── Bullets ──
    bulletRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
      marginBottom: 8,
    },
    bulletDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      marginTop: 9,
    },
    bulletText: {
      fontSize: 14,
      color: colors.text,
      lineHeight: 22,
      flex: 1,
    },

    // ── Numbered list ──
    numberedRow: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'flex-start',
    },
    numberedCircle: {
      width: 28,
      height: 28,
      borderRadius: 8,
      backgroundColor: colors.primary + '15',
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberedNumber: {
      fontSize: 13,
      fontWeight: '800',
    },
    numberedTitle: {
      fontSize: 15,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 2,
    },
    numberedDesc: {
      fontSize: 14,
      color: colors.textSecondary,
      lineHeight: 22,
    },

    // ── Note box ──
    noteBox: {
      flexDirection: 'row',
      gap: 10,
      backgroundColor: colors.primary + '08',
      borderRadius: 10,
      padding: 14,
      borderWidth: 1,
      borderColor: colors.primary + '20',
      marginTop: 12,
    },
    noteText: {
      fontSize: 13,
      color: colors.textSecondary,
      lineHeight: 20,
      flex: 1,
    },

    // ── Contact boxes ──
    contactBox: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      backgroundColor: colors.background,
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: colors.border,
      marginTop: 8,
    },
    contactLabel: {
      fontSize: 13,
      fontWeight: '600',
      color: colors.textSecondary,
      minWidth: 90,
    },
    contactValue: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.text,
      flex: 1,
    },
  });