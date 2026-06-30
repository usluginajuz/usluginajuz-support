import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useTheme } from '@/theme/ThemeProvider';
import { ThemeColors } from '@/theme/colors';
import { CONTACT_EMAIL } from '@/utils/supabase';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const EFFECTIVE_DATE = '1 lipca 2026';

type Clause = string | { text: string; sub: string[] };

interface Section {
  icon: string;
  title: string;
  clauses: Clause[];
}

const SECTIONS: Section[] = [
  {
    icon: 'file-contract',
    title: '§1. Postanowienia ogólne i definicje',
    clauses: [
      'Niniejszy Regulamin określa zasady korzystania z aplikacji mobilnej i internetowej Timelly (dalej: „Aplikacja"), w tym prawa i obowiązki jej użytkowników oraz zakres odpowiedzialności Usługodawcy.',
      'Usługodawcą i właścicielem Aplikacji jest Stanisław Kryński (dalej: „Usługodawca"), kontakt: support@timelly.pl. Usługodawca udostępnia Aplikację nieodpłatnie i nie prowadzi w związku z nią zarejestrowanej działalności gospodarczej.',
      'Aplikacja dostępna jest w wersji mobilnej (iOS, Android) oraz internetowej pod adresem app.timelly.pl.',
      {
        text: 'Określenia użyte w Regulaminie oznaczają:',
        sub: [
          'Użytkownik — osoba korzystająca z Aplikacji na podstawie Konta;',
          'Klient — Użytkownik korzystający z Aplikacji w celu wyszukiwania Firm i dokonywania Rezerwacji;',
          'Firma — przedsiębiorca prezentujący w Aplikacji swoją ofertę i przyjmujący Rezerwacje;',
          'Pracownik — osoba działająca w Aplikacji w imieniu Firmy, na koncie powiązanym z Firmą;',
          'Klient tymczasowy — osoba bez Konta, której dane (imię, numer telefonu, notatki) Firma wprowadza do Aplikacji w celu obsługi Rezerwacji w jej imieniu;',
          'Konto — zbiór zasobów i uprawnień przypisanych Użytkownikowi po rejestracji;',
          'Rezerwacja — dokonana przez Klienta rezerwacja terminu usługi, miejsca lub zasobu (np. stolika) oferowanego przez Firmę;',
          'Usługa Firmy — świadczenie wykonywane przez Firmę na rzecz Klienta poza Aplikacją;',
          'Treści — dane, teksty, zdjęcia, opinie i inne materiały zamieszczane przez Użytkowników;',
          'Punkty — punkty grywalizacyjne przyznawane Klientowi za zrealizowane wizyty.',
        ],
      },
    ],
  },
  {
    icon: 'handshake-angle',
    title: '§2. Charakter usługi',
    clauses: [
      'Aplikacja jest bezpłatnym narzędziem pośredniczącym, które umożliwia Klientom wyszukiwanie Firm oraz dokonywanie Rezerwacji, a Firmom — prezentację oferty i zarządzanie Rezerwacjami. Usługodawca świadczy usługę drogą elektroniczną w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.',
      'Usługodawca nie jest stroną umowy o Usługę Firmy zawieranej między Klientem a Firmą. Umowa o wykonanie Usługi Firmy zawierana jest bezpośrednio między Klientem a Firmą, a za jej należyte wykonanie, jakość, cenę, terminy oraz rozliczenia odpowiada wyłącznie Firma.',
      'Usługodawca nie pośredniczy w płatnościach za Usługi Firm i nie pobiera od Użytkowników żadnych opłat za korzystanie z Aplikacji.',
      'Usługodawca nie gwarantuje dostępności, kompletności ani prawdziwości ofert prezentowanych przez Firmy, ani zawarcia lub wykonania umowy między Klientem a Firmą.',
    ],
  },
  {
    icon: 'mobile-screen',
    title: '§3. Wymagania techniczne',
    clauses: [
      'Korzystanie z Aplikacji wymaga urządzenia z dostępem do Internetu oraz aktualnego systemu operacyjnego iOS lub Android, albo przeglądarki internetowej obsługującej standardy HTML5.',
      'Do rejestracji i korzystania z części funkcji niezbędny jest aktywny numer telefonu (Klient) lub adres e‑mail (Firma).',
      'Usługodawca dokłada starań, by Aplikacja działała poprawnie, lecz nie gwarantuje nieprzerwanej i bezbłędnej dostępności, w szczególności w czasie prac konserwacyjnych, aktualizacji lub z przyczyn niezależnych od Usługodawcy.',
    ],
  },
  {
    icon: 'user-plus',
    title: '§4. Konto i rejestracja',
    clauses: [
      'Korzystanie z większości funkcji Aplikacji wymaga założenia Konta. Klient rejestruje się przy użyciu numeru telefonu potwierdzanego kodem SMS (OTP). Firma rejestruje się przy użyciu adresu e‑mail i hasła.',
      'Z Aplikacji mogą korzystać osoby, które ukończyły 16 lat. Osoby ograniczone w zdolności do czynności prawnych korzystają z Aplikacji za zgodą przedstawiciela ustawowego.',
      'Użytkownik zobowiązany jest podać dane prawdziwe, aktualne i kompletne oraz aktualizować je w razie zmiany. Zakładanie Konta na dane osoby trzeciej bez jej upoważnienia jest zabronione.',
      'Konto jest przypisane do Użytkownika i nie może być udostępniane osobom trzecim. Użytkownik odpowiada za zachowanie poufności danych dostępowych.',
      'Konto Firmy może obejmować konta Pracowników, działających w imieniu i na odpowiedzialność Firmy. Dostęp Pracowników może być zabezpieczony kodem PIN.',
    ],
  },
  {
    icon: 'list-check',
    title: '§5. Zasady korzystania',
    clauses: [
      'Użytkownik zobowiązuje się korzystać z Aplikacji zgodnie z prawem, dobrymi obyczajami i Regulaminem oraz nie naruszać praw osób trzecich.',
      {
        text: 'Zabronione jest w szczególności:',
        sub: [
          'zamieszczanie Treści bezprawnych, nieprawdziwych, obraźliwych, naruszających prawa autorskie, dobra osobiste lub dane osobowe innych osób;',
          'podszywanie się pod inne osoby lub podmioty;',
          'działania zakłócające funkcjonowanie Aplikacji, w tym automatyczne pobieranie danych, próby obejścia zabezpieczeń, przeciążanie systemu;',
          'dokonywanie Rezerwacji w złej wierze, fikcyjnych lub w celu szkodzenia Firmom;',
          'manipulowanie systemem Punktów i Rankingu, w tym tworzenie fikcyjnych wizyt lub kont w celu zdobycia Punktów;',
          'wykorzystywanie Aplikacji do niezamówionej informacji handlowej (spam).',
        ],
      },
      'W razie naruszenia Regulaminu Usługodawca może czasowo ograniczyć dostęp do funkcji, zawiesić lub usunąć Konto, na zasadach z §15.',
    ],
  },
  {
    icon: 'calendar-check',
    title: '§6. Rezerwacje',
    clauses: [
      'Klient dokonuje Rezerwacji wybierając Firmę, usługę, termin oraz — jeśli Firma to udostępnia — Pracownika, miejsce lub zasób (np. stolik). Rezerwacja stanowi skierowane do Firmy żądanie zawarcia umowy o Usługę Firmy.',
      'Potwierdzenie, odrzucenie, zmiana lub anulowanie Rezerwacji następuje na zasadach ustalonych przez Firmę. Usługodawca udostępnia jedynie narzędzie do obsługi tego procesu.',
      'Klient zobowiązany jest stawić się na zarezerwowany termin lub odwołać Rezerwację w rozsądnym czasie. Niestawienie się (no‑show) lub powtarzające się naruszenia mogą skutkować ograniczeniem możliwości rezerwacji u danej Firmy.',
      'Firma może zablokować możliwość dokonywania Rezerwacji przez określonego Klienta w razie nadużyć (np. powtarzających się nieobecności). Blokada dotyczy wyłącznie relacji z daną Firmą.',
      'Firma może wprowadzić Rezerwację w imieniu Klienta tymczasowego (osoby bez Konta). Za zgodność z prawem przetwarzania danych takiej osoby, w tym za podstawę ich podania, odpowiada Firma.',
    ],
  },
  {
    icon: 'store',
    title: '§7. Firmy — obowiązki i zasady prezentacji',
    clauses: [
      'Firma zobowiązana jest podawać prawdziwe i aktualne dane (nazwa, adres, dane kontaktowe, zakres i ceny usług, godziny pracy) oraz prezentować ofertę zgodnie z prawem.',
      'Firma oświadcza, że przysługują jej prawa do zamieszczanych Treści, w tym zdjęć i opisów, oraz że ich publikacja w Aplikacji nie narusza praw osób trzecich. Firma ponosi odpowiedzialność wobec Klientów za realizację Usług Firmy oraz za zgodność oferty z obowiązującymi przepisami.',
      {
        text: 'Zasady prezentacji i kolejności Firm (plasowanie). Lista oraz mapa Firm prezentowane Klientowi są porządkowane przede wszystkim według:',
        sub: [
          'a) bliskości geograficznej względem lokalizacji Klienta lub obszaru wyszukiwania,',
          'b) dopasowania do zapytania i wybranej kategorii usług,',
          'c) dostępności (np. aktualnych godzin pracy i wolnych terminów).',
        ],
      },
      'Usługodawca nie stosuje płatnego pozycjonowania — kolejność prezentacji Firm nie zależy od jakichkolwiek opłat wnoszonych przez Firmy.',
      'Usługodawca może czasowo ograniczyć, zawiesić lub usunąć Konto Firmy w razie naruszenia Regulaminu lub prawa, na zasadach z §15.',
    ],
  },
  {
    icon: 'star',
    title: '§8. Opinie',
    clauses: [
      'Klient może wystawić Firmie ocenę (w skali 1–5) wraz z komentarzem po zrealizowanej wizycie. Uprawnienie do wystawienia opinii powstaje wyłącznie w odniesieniu do faktycznie zrealizowanej Usługi Firmy.',
      'Opinia powinna być rzetelna i zgodna z doświadczeniem Klienta. Zabronione są opinie nieprawdziwe, obraźliwe, naruszające prawa osób trzecich lub niezwiązane z Usługą Firmy.',
      'Usługodawca może usunąć opinię naruszającą Regulamin lub prawo. Usługodawca nie redaguje opinii w celu wpływania na ich wydźwięk.',
    ],
  },
  {
    icon: 'trophy',
    title: '§9. Ranking i Punkty',
    clauses: [
      'Aplikacja udostępnia Klientom funkcję grywalizacyjną: za zrealizowane wizyty Klient otrzymuje Punkty, na podstawie których wyznaczana jest jego pozycja w miesięcznym Rankingu oraz liga.',
      'Punkty nie stanowią środka płatniczego, nie mają wartości pieniężnej, nie podlegają wymianie na gotówkę ani przeniesieniu na inną osobę. Punkty mogą podlegać okresowemu rozliczeniu lub resetowi (np. w cyklu miesięcznym).',
      'Udział w Rankingu odbywa się w trybie domyślnie ograniczonym (z maskowaniem imienia i bez zdjęcia) na podstawie prawnie uzasadnionego interesu Usługodawcy. Klient może w każdej chwili wybrać tryb pełny (imię i zdjęcie) albo całkowicie wyłączyć swoją widoczność. Szczegóły przetwarzania danych w Rankingu, w tym podstawy prawne i prawo sprzeciwu, opisuje Polityka prywatności.',
      'Usługodawca może odebrać Punkty lub usunąć Klienta z Rankingu w razie nadużyć, o których mowa w §5 ust. 2.',
    ],
  },
  {
    icon: 'ticket',
    title: '§10. Wydarzenia i listy oczekujących',
    clauses: [
      'Firma może udostępniać w Aplikacji wydarzenia oraz terminy o ograniczonej liczbie miejsc, na które Klient może się zapisać.',
      'W razie braku wolnych miejsc Klient może dołączyć do listy oczekujących. Zwolnienie miejsca może skutkować zaproszeniem Klienta z listy zgodnie z kolejnością. Zapis na wydarzenie lub listę oczekujących nie gwarantuje realizacji Usługi Firmy.',
    ],
  },
  {
    icon: 'bell',
    title: '§11. Powiadomienia',
    clauses: [
      'W związku z korzystaniem z Aplikacji Usługodawca wysyła powiadomienia o charakterze transakcyjnym (np. potwierdzenia, przypomnienia i zmiany Rezerwacji) za pośrednictwem powiadomień push oraz wiadomości SMS.',
      'Powiadomienia SMS oraz push związane z obsługą Rezerwacji są niezbędne do świadczenia usługi. Powiadomienia push Użytkownik może wyłączyć w ustawieniach systemu operacyjnego urządzenia.',
    ],
  },
  {
    icon: 'copyright',
    title: '§12. Własność intelektualna',
    clauses: [
      'Aplikacja, jej nazwa, logo, układ, kod oraz pozostałe elementy stanowią własność Usługodawcy lub są wykorzystywane na podstawie odpowiednich uprawnień i podlegają ochronie prawnej. Korzystanie z nich poza zakresem dozwolonym Regulaminem wymaga zgody Usługodawcy.',
      'Zamieszczając Treści, Użytkownik udziela Usługodawcy niewyłącznej, nieodpłatnej licencji na ich przechowywanie, zwielokrotnianie i prezentowanie w Aplikacji w zakresie niezbędnym do świadczenia usługi. Użytkownik oświadcza, że jest uprawniony do udzielenia takiej licencji.',
    ],
  },
  {
    icon: 'triangle-exclamation',
    title: '§13. Odpowiedzialność',
    clauses: [
      'Aplikacja udostępniana jest nieodpłatnie, w modelu „takim, jaka jest". Usługodawca dokłada należytej staranności w jej utrzymaniu, lecz nie gwarantuje nieprzerwanej dostępności ani przydatności do określonego celu.',
      'Usługodawca nie ponosi odpowiedzialności za Usługi Firm, ich jakość, wykonanie, ceny i rozliczenia, ani za Treści zamieszczane przez Użytkowników. Odpowiedzialność wobec Klienta z tytułu Usługi Firmy ponosi wyłącznie Firma.',
      'Usługodawca nie odpowiada za szkody wynikłe z korzystania z Aplikacji niezgodnie z Regulaminem, z podania nieprawdziwych danych ani z przyczyn leżących po stronie Użytkownika lub osób trzecich.',
      'Postanowienia ust. 1–3 nie wyłączają ani nie ograniczają odpowiedzialności Usługodawcy w zakresie, w jakim jest to niedopuszczalne na podstawie bezwzględnie obowiązujących przepisów prawa, w szczególności wobec konsumentów oraz za szkody wyrządzone umyślnie.',
    ],
  },
  {
    icon: 'envelope-open-text',
    title: '§14. Reklamacje',
    clauses: [
      'Reklamacje dotyczące działania Aplikacji Użytkownik może składać na adres support@timelly.pl. Reklamacja powinna zawierać opis problemu oraz dane umożliwiające kontakt.',
      'Usługodawca rozpatruje reklamacje niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania, a w sprawach szczególnie złożonych — nie później niż w terminie 30 dni, informując Użytkownika o przyczynie opóźnienia.',
      'Reklamacje dotyczące Usług Firm Klient kieruje bezpośrednio do Firmy.',
    ],
  },
  {
    icon: 'door-open',
    title: '§15. Zawieszenie i rozwiązanie umowy',
    clauses: [
      'Użytkownik może w każdej chwili zakończyć korzystanie z Aplikacji i usunąć Konto z poziomu Aplikacji (Profil → Ustawienia → Usuń konto) lub kontaktując się na adres support@timelly.pl. Usunięcie Konta skutkuje rozwiązaniem umowy o świadczenie usług drogą elektroniczną.',
      'Usługodawca może zawiesić lub usunąć Konto, jeżeli Użytkownik narusza Regulamin lub przepisy prawa, po uprzednim wezwaniu do zaprzestania naruszeń — chyba że naruszenie jest rażące lub wymaga natychmiastowej reakcji ze względów bezpieczeństwa lub prawnych.',
      'Rozwiązanie umowy nie wpływa na czynności dokonane przed jego skutkiem, w tym na Rezerwacje wymagające rozliczenia między Klientem a Firmą.',
    ],
  },
  {
    icon: 'pen-to-square',
    title: '§16. Zmiany Regulaminu',
    clauses: [
      {
        text: 'Usługodawca może zmienić Regulamin wyłącznie z ważnych przyczyn, którymi są:',
        sub: [
          'a) zmiana powszechnie obowiązujących przepisów prawa lub konieczność dostosowania do nich;',
          'b) zmiana, rozszerzenie lub ograniczenie zakresu funkcji Aplikacji albo sposobu świadczenia usługi;',
          'c) względy bezpieczeństwa lub przeciwdziałanie nadużyciom;',
          'd) zmiany techniczne lub technologiczne dotyczące Aplikacji;',
          'e) zmiana danych Usługodawcy lub formy prawnej prowadzenia Aplikacji (np. rozpoczęcie działalności gospodarczej).',
        ],
      },
      'O zmianie Regulaminu Usługodawca powiadamia Użytkowników z wyprzedzeniem: za pośrednictwem Aplikacji — nie później niż na 14 dni przed wejściem zmiany w życie, a Firmy dodatkowo na trwałym nośniku (pocztą elektroniczną) — nie później niż na 15 dni przed wejściem zmiany w życie. Powiadomienie zawiera informację o zakresie zmian, dacie ich wejścia w życie oraz dostęp do treści nowej wersji.',
      'Zmiana wchodzi w życie w terminie wskazanym w powiadomieniu, nie wcześniej niż po upływie okresów, o których mowa w ust. 2. Do tego czasu Użytkownika wiąże dotychczasowa wersja Regulaminu.',
      'Jeżeli Użytkownik nie akceptuje zmian, może wypowiedzieć umowę i usunąć Konto bez ponoszenia kosztów przed dniem wejścia zmian w życie. Dalsze korzystanie z Aplikacji po wejściu zmian w życie oznacza akceptację nowej wersji Regulaminu.',
      'Zmiany wynikające bezpośrednio z obowiązku nałożonego przepisami prawa mogą wejść w życie w terminie krótszym, jeżeli wymaga tego przepis.',
    ],
  },
  {
    icon: 'flag-checkered',
    title: '§17. Postanowienia końcowe',
    clauses: [
      'W sprawach dotyczących ochrony danych osobowych zastosowanie ma Polityka prywatności Timelly, dostępna pod adresem www.timelly.pl/privacy-policy.',
      'Regulamin udostępniany jest nieodpłatnie w sposób umożliwiający jego pozyskanie, odtworzenie i utrwalenie (zapisanie i wydruk) za pośrednictwem Aplikacji.',
      'Prawem właściwym jest prawo polskie. Konsument może korzystać z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń, w szczególności za pośrednictwem miejskiego lub powiatowego rzecznika konsumentów oraz wojewódzkich inspektoratów Inspekcji Handlowej.',
      'Jeżeli którekolwiek postanowienie Regulaminu okaże się nieważne lub bezskuteczne, pozostałe postanowienia zachowują moc.',
      `Regulamin wchodzi w życie z dniem ${EFFECTIVE_DATE} r.`,
    ],
  },
];

export default function TermsScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.page}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pageHeader}>
          <View style={styles.iconCircle}>
            <FontAwesome6 name="file-contract" size={24} color={colors.primary} />
          </View>
          <Text style={styles.pageTitle}>Regulamin</Text>
          <Text style={styles.pageSubtitle}>Data wejścia w życie: {EFFECTIVE_DATE}</Text>
        </View>

        {SECTIONS.map((section) => (
          <View key={section.title} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardIconWrap}>
                <FontAwesome6 name={section.icon} size={18} color={colors.primary} />
              </View>
              <Text style={styles.cardTitle}>{section.title}</Text>
            </View>

            {section.clauses.map((clause, i) => {
              const text = typeof clause === 'string' ? clause : clause.text;
              const sub = typeof clause === 'string' ? null : clause.sub;
              return (
                <View key={i} style={styles.clauseRow}>
                  <Text style={styles.clauseNumber}>{i + 1}.</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.clauseText}>{text}</Text>
                    {sub
                      ? sub.map((item, j) => (
                          <View key={j} style={styles.subRow}>
                            <View style={styles.subDot} />
                            <Text style={styles.subText}>{item}</Text>
                          </View>
                        ))
                      : null}
                  </View>
                </View>
              );
            })}
          </View>
        ))}

        <View style={{ width: '100%' }}>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}

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
    clauseRow: {
      flexDirection: 'row',
      gap: 10,
      marginBottom: 12,
      alignItems: 'flex-start',
    },
    clauseNumber: {
      fontSize: 15,
      fontWeight: '700',
      color: colors.primary,
      lineHeight: 24,
      minWidth: 22,
    },
    clauseText: {
      fontSize: 15,
      color: colors.text,
      lineHeight: 24,
    },
    subRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
      marginTop: 8,
      paddingLeft: 4,
    },
    subDot: {
      width: 5,
      height: 5,
      borderRadius: 3,
      backgroundColor: colors.primary,
      marginTop: 9,
    },
    subText: {
      fontSize: 14,
      color: colors.textSecondary,
      lineHeight: 22,
      flex: 1,
    },
  });
