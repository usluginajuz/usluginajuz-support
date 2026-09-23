import {
  AlertTriangle,
  Bell,
  CalendarCheck,
  Copyright,
  DoorOpen,
  Download,
  FileLock,
  FileText,
  Flag,
  Handshake,
  ListChecks,
  MailOpen,
  Megaphone,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  SquarePen,
  Star,
  Store,
  Ticket,
  Trophy,
  UserPlus,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, PageHero, PageShell } from '../components/legal';

const EFFECTIVE_DATE = '24 września 2026';

type Clause = string | { text: string; sub: string[] };

interface Section {
  icon: LucideIcon;
  title: string;
  clauses: Clause[];
}

const SECTIONS: Section[] = [
  {
    icon: FileText,
    title: '§1. Postanowienia ogólne i definicje',
    clauses: [
      'Niniejszy Regulamin określa zasady korzystania z aplikacji mobilnej i internetowej Timelly (dalej: „Aplikacja"), w tym prawa i obowiązki jej użytkowników oraz zakres odpowiedzialności Usługodawcy.',
      'Usługodawcą i właścicielem Aplikacji jest Stanisław Kryński (dalej: „Usługodawca"), kontakt: support@timelly.pl. Usługodawca nie prowadzi w związku z Aplikacją zarejestrowanej działalności gospodarczej.',
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
          'Panel Firmy — część Aplikacji dostępna dla Firmy i jej Pracowników (m.in. kalendarz, lista klientów, powiadomienia, wiadomości marketingowe);',
          'Rezerwacja — dokonana przez Klienta albo przez Firmę w jego imieniu rezerwacja terminu usługi, miejsca lub zasobu (np. stolika) oferowanego przez Firmę;',
          'Usługa Firmy — świadczenie wykonywane przez Firmę na rzecz Klienta poza Aplikacją;',
          'Treści — dane, teksty, zdjęcia, opinie i inne materiały zamieszczane przez Użytkowników;',
          'Punkty — punkty grywalizacyjne przyznawane Klientowi za zrealizowane wizyty;',
          'Zgoda marketingowa — zgoda Klienta, udzielona konkretnej Firmie, na otrzymywanie od niej informacji handlowych (§12);',
          'Umowa powierzenia — umowa powierzenia przetwarzania danych osobowych między Firmą a Usługodawcą, stanowiąca Załącznik nr 1 do Regulaminu.',
        ],
      },
    ],
  },
  {
    icon: Handshake,
    title: '§2. Charakter usługi',
    clauses: [
      'Aplikacja jest narzędziem, które umożliwia Klientom wyszukiwanie Firm oraz dokonywanie Rezerwacji, a Firmom — prezentację oferty, zarządzanie Rezerwacjami oraz kontakt z klientami. Usługodawca świadczy usługę drogą elektroniczną w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.',
      'Usługodawca nie jest stroną umowy o wykonanie Usługi Firmy. Umowa ta zawierana jest bezpośrednio między Klientem a Firmą, a za jej należyte wykonanie, jakość, cenę, terminy oraz rozliczenia odpowiada wyłącznie Firma.',
      'Usługodawca nie pośredniczy w płatnościach za Usługi Firm ani ich nie przyjmuje.',
      'Cena prezentowana w Aplikacji jest informacją Firmy. Ostateczną kwotę wynagrodzenia za Usługę Firmy ustalają Klient i Firma bezpośrednio. Firma odpowiada za prawdziwość i aktualność prezentowanych cen.',
      'Korzystanie z Aplikacji jest bezpłatne. Usługodawca może w przyszłości wprowadzić płatne funkcje dodatkowe dla Firm; z płatnej funkcji Firma korzysta wyłącznie po odrębnym jej zamówieniu i akceptacji cennika. Wprowadzenie płatnych funkcji nie zmienia bezpłatnego charakteru funkcji udostępnionych wcześniej.',
      'Usługodawca nie gwarantuje dostępności, kompletności ani prawdziwości ofert prezentowanych przez Firmy, ani zawarcia lub wykonania umowy między Klientem a Firmą.',
    ],
  },
  {
    icon: Smartphone,
    title: '§3. Wymagania techniczne',
    clauses: [
      'Korzystanie z Aplikacji wymaga urządzenia z dostępem do Internetu oraz aktualnego systemu operacyjnego iOS lub Android, albo przeglądarki internetowej obsługującej standardy HTML5.',
      'Do rejestracji i korzystania z części funkcji niezbędny jest aktywny numer telefonu (Klient) lub adres e‑mail (Firma).',
      'Usługodawca dokłada starań, by Aplikacja działała poprawnie, lecz nie gwarantuje nieprzerwanej i bezbłędnej dostępności, w szczególności w czasie prac konserwacyjnych, aktualizacji lub z przyczyn niezależnych od Usługodawcy.',
    ],
  },
  {
    icon: UserPlus,
    title: '§4. Konto i rejestracja',
    clauses: [
      'Korzystanie z większości funkcji Aplikacji wymaga założenia Konta. Klient rejestruje się przy użyciu numeru telefonu potwierdzanego kodem SMS (OTP). Firma rejestruje się przy użyciu adresu e‑mail i hasła.',
      'Z Aplikacji mogą korzystać wyłącznie osoby pełnoletnie (które ukończyły 18 lat).',
      'Użytkownik zobowiązany jest podać dane prawdziwe, aktualne i kompletne oraz aktualizować je w razie zmiany. Zakładanie Konta na dane osoby trzeciej bez jej upoważnienia jest zabronione.',
      'Konto jest przypisane do Użytkownika i nie może być udostępniane osobom trzecim. Użytkownik odpowiada za zachowanie poufności danych dostępowych.',
      'Konto Firmy może obejmować konta Pracowników, działających w imieniu i na odpowiedzialność Firmy. Dostęp Pracowników może być zabezpieczony kodem PIN. Firma odpowiada za to, którym Pracownikom udziela dostępu do Panelu Firmy i do danych klientów.',
    ],
  },
  {
    icon: ListChecks,
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
          'wykorzystywanie Aplikacji do przesyłania informacji handlowej bez zgody odbiorcy (spam).',
        ],
      },
      'W razie naruszenia Regulaminu Usługodawca może czasowo ograniczyć dostęp do funkcji, zawiesić lub usunąć Konto, na zasadach z §19.',
    ],
  },
  {
    icon: CalendarCheck,
    title: '§6. Rezerwacje',
    clauses: [
      'Klient dokonuje Rezerwacji wybierając Firmę, usługę, termin oraz — jeśli Firma to udostępnia — Pracownika, miejsce lub zasób (np. stolik). Rezerwacja stanowi skierowane do Firmy żądanie zawarcia umowy o Usługę Firmy.',
      'Umowa o Usługę Firmy zostaje zawarta między Klientem a Firmą z chwilą potwierdzenia Rezerwacji przez Firmę — automatycznie przez Aplikację albo ręcznie przez Firmę. Zmiana lub anulowanie Rezerwacji następuje na zasadach ustalonych przez Firmę. Usługodawca udostępnia jedynie narzędzie do obsługi tego procesu.',
      'Dane Firmy (nazwa, adres, dane kontaktowe) potrzebne do kontaktu i złożenia reklamacji dotyczącej Usługi Firmy są dostępne na profilu Firmy w Aplikacji.',
      'Zasady Firmy dotyczące Rezerwacji nie wyłączają ani nie ograniczają uprawnień przysługujących Klientowi jako konsumentowi na podstawie przepisów prawa. Wobec Klienta z tytułu Usługi Firmy, w tym jej reklamacji, odpowiada Firma.',
      'Klient zobowiązany jest stawić się na zarezerwowany termin lub odwołać Rezerwację w rozsądnym czasie. Niestawienie się (no‑show) lub powtarzające się naruszenia mogą skutkować ograniczeniem możliwości rezerwacji u danej Firmy.',
      'Firma może zablokować możliwość dokonywania Rezerwacji przez określonego Klienta w razie nadużyć (np. powtarzających się nieobecności). Blokada dotyczy wyłącznie relacji z daną Firmą.',
      'Firma może wprowadzić Rezerwację w imieniu Klienta tymczasowego (osoby bez Konta). Za zgodność z prawem przetwarzania danych takiej osoby, w tym za podstawę ich wprowadzenia i poinformowanie jej o przetwarzaniu, odpowiada Firma.',
    ],
  },
  {
    icon: Store,
    title: '§7. Firmy — obowiązki i zasady prezentacji',
    clauses: [
      'Firma zobowiązana jest podawać prawdziwe i aktualne dane (nazwa, adres, dane kontaktowe, zakres i ceny usług, godziny pracy) oraz prezentować ofertę zgodnie z prawem.',
      'Firma oświadcza, że przysługują jej prawa do zamieszczanych Treści, w tym zdjęć i opisów, oraz że ich publikacja w Aplikacji nie narusza praw osób trzecich. Firma ponosi odpowiedzialność wobec Klientów za realizację Usług Firmy oraz za zgodność oferty z obowiązującymi przepisami.',
      {
        text: 'Zasady kolejności Firm (plasowanie). Lista Firm prezentowana Klientowi jest porządkowana według następujących parametrów, w kolejności od najważniejszego:',
        sub: [
          'a) rezerwacje danego Klienta w Firmie — wyżej wyświetlane są Firmy, w których Klient rezerwował częściej i niedawno;',
          'b) popularność Firmy — liczba i świeżość Rezerwacji dokonanych w Firmie przez wszystkich Klientów w ostatnich miesiącach (odwołane Rezerwacje nie są liczone);',
          'c) nazwa Firmy w porządku alfabetycznym — dla Firm, które nie różnią się parametrami z lit. a i b.',
        ],
      },
      'Klient może zawęzić listę Firm filtrami (kategoria, wyszukiwana fraza lub rodzaj usługi, ulubione). Po wybraniu filtra terminu lista jest porządkowana według najbliższego wolnego terminu. Mapa prezentuje Firmy według ich położenia i nie ustala między nimi kolejności.',
      'Usługodawca nie stosuje płatnego pozycjonowania — kolejność prezentacji Firm nie zależy od jakichkolwiek opłat wnoszonych przez Firmy.',
      'Usługodawca może czasowo ograniczyć, zawiesić lub usunąć Konto Firmy w razie naruszenia Regulaminu lub prawa, na zasadach z §19.',
    ],
  },
  {
    icon: Star,
    title: '§8. Opinie',
    clauses: [
      'Opinię (ocenę w skali 1–5 i opcjonalny komentarz) może wystawić wyłącznie Klient, na którego Koncie została dokonana Rezerwacja, po terminie tej Rezerwacji, o ile nie została ona odwołana ani oznaczona jako nieodbyta. Do jednej Rezerwacji można wystawić jedną opinię.',
      'Usługodawca w ten sposób weryfikuje, że opinie pochodzą od Klientów, którzy dokonali Rezerwacji w danej Firmie. Usługodawca nie publikuje opinii pochodzących z innych źródeł. Średnia ocen Firmy jest średnią arytmetyczną wszystkich opublikowanych opinii o Firmie i obejmuje wyłącznie tak zweryfikowane opinie.',
      'Opinie publikowane są automatycznie. Klient może edytować i usunąć swoją opinię w każdej chwili. Usługodawca nie redaguje opinii.',
      'Firma nie może usuwać, ukrywać ani edytować opinii o sobie.',
      {
        text: 'Zabronione jest:',
        sub: [
          'wystawianie opinii nieprawdziwych, obraźliwych, naruszających prawa osób trzecich lub niezwiązanych z Usługą Firmy;',
          'wystawianie opinii o własnej Firmie, przez jej właściciela lub Pracowników, w tym opinii wzajemnych;',
          'oferowanie, żądanie lub przyjmowanie korzyści (rabatu, produktu, bonu, pieniędzy) w zamian za wystawienie opinii albo za opinię określonej treści.',
        ],
      },
      'Usługodawca może usunąć opinię wyłącznie wtedy, gdy narusza ona ust. 5, Regulamin lub prawo — w całości, bez zmiany jej treści. Usługodawca nie usuwa opinii z tego powodu, że jest negatywna. Autor opinii otrzymuje informację o usunięciu wraz z uzasadnieniem (w Aplikacji lub SMS-em) i może się od tej decyzji odwołać w trybie §17.',
    ],
  },
  {
    icon: Trophy,
    title: '§9. Ranking i Punkty',
    clauses: [
      'Aplikacja udostępnia Klientom funkcję grywalizacyjną: za zrealizowane wizyty Klient otrzymuje Punkty, na podstawie których wyznaczana jest jego pozycja w miesięcznym Rankingu oraz liga.',
      'Punkty nie stanowią środka płatniczego, nie mają wartości pieniężnej, nie podlegają wymianie na gotówkę ani przeniesieniu na inną osobę. Punkty mogą podlegać okresowemu rozliczeniu lub resetowi (np. w cyklu miesięcznym).',
      'Udział w Rankingu odbywa się w trybie domyślnie ograniczonym (z maskowaniem imienia i bez zdjęcia) na podstawie prawnie uzasadnionego interesu Usługodawcy. Klient może w każdej chwili wybrać tryb pełny (imię i zdjęcie) albo całkowicie wyłączyć swoją widoczność. Szczegóły przetwarzania danych w Rankingu, w tym podstawy prawne i prawo sprzeciwu, opisuje Polityka prywatności.',
      'Usługodawca może odebrać Punkty lub usunąć Klienta z Rankingu w razie nadużyć, o których mowa w §5 ust. 2.',
    ],
  },
  {
    icon: Ticket,
    title: '§10. Wydarzenia i listy oczekujących',
    clauses: [
      'Firma może udostępniać w Aplikacji wydarzenia oraz terminy o ograniczonej liczbie miejsc, na które Klient może się zapisać.',
      'W razie braku wolnych miejsc Klient może dołączyć do listy oczekujących. Zwolnienie miejsca może skutkować powiadomieniem Klienta z listy. Zapis na wydarzenie lub listę oczekujących nie gwarantuje realizacji Usługi Firmy.',
    ],
  },
  {
    icon: Bell,
    title: '§11. Powiadomienia o Rezerwacjach',
    clauses: [
      'W związku z Rezerwacjami Aplikacja wysyła powiadomienia o charakterze transakcyjnym (np. potwierdzenia, przypomnienia, zmiany i odwołania Rezerwacji) za pośrednictwem powiadomień push oraz wiadomości SMS.',
      'Powiadomienia o Rezerwacjach zawierają wyłącznie informacje dotyczące Rezerwacji i nie zawierają treści marketingowych; mogą jedynie zawierać link do udzielenia Zgody marketingowej, o którym mowa w §12 ust. 5. Do ich otrzymywania nie jest potrzebna Zgoda marketingowa.',
      'Powiadomienia SMS mogą być wysyłane z numeru telefonu Firmy, jeżeli Firma korzysta z aplikacji towarzyszącej Timelly Bramka, albo przez operatora bramki SMS Usługodawcy.',
      'Powiadomienia SMS oraz push związane z obsługą Rezerwacji są niezbędne do świadczenia usługi. Powiadomienia push Użytkownik może wyłączyć w ustawieniach systemu operacyjnego urządzenia.',
    ],
  },
  {
    icon: Megaphone,
    title: '§12. Informacje handlowe od Firm (marketing)',
    clauses: [
      'Firma może za pośrednictwem Aplikacji przesyłać swoim klientom informacje handlowe, w szczególności wiadomości SMS o swoich usługach, wolnych terminach i promocjach — wyłącznie do osób, które udzieliły tej Firmie Zgody marketingowej. Wiadomości mogą być wysyłane także automatycznie, w momencie dopasowanym do historii wizyt Klienta w tej Firmie (np. z propozycją wolnych terminów u Pracownika, u którego Klient zwykle bywa).',
      'Zgoda marketingowa jest udzielana konkretnej Firmie, a nie Usługodawcy ani wszystkim Firmom w Aplikacji. Aplikacja zbiera ją w imieniu Firmy. Treść zgody wskazuje nazwę i adres Firmy, zakres informacji, kanały komunikacji (SMS, powiadomienie w Aplikacji, e‑mail) oraz sposób jej wycofania.',
      'Jeżeli Firma udostępniła możliwość otrzymywania od niej ofert, przy pierwszej Rezerwacji dokonywanej przez Klienta w Aplikacji w tej Firmie od tego momentu, przed jej potwierdzeniem, Aplikacja pyta Klienta, czy chce otrzymywać oferty od tej Firmy. Odpowiedzi „Tak" i „Nie" są przedstawione jako równorzędne. Odpowiedź nie ma wpływu na Rezerwację ani na warunki Usługi Firmy. Aplikacja zapamiętuje odpowiedź i nie ponawia pytania.',
      'Klient może w każdej chwili udzielić albo wycofać Zgodę marketingową na profilu Firmy w Aplikacji, a wycofać ją także klikając link zamieszczony w każdej wiadomości marketingowej. Wycofanie jest skuteczne natychmiast i obejmuje także wiadomości oczekujące na wysłanie. Wycofanie zgody nie wpływa na zgodność z prawem wiadomości wysłanych przed jej wycofaniem.',
      'Klient tymczasowy może udzielić Zgody marketingowej pod linkiem, który Aplikacja dołącza do powiadomienia o jego Rezerwacji w danej Firmie (§11). Zaproszenie nie jest wysyłane w osobnej wiadomości i nie zawiera oferty. Link dotyczy jednej Firmy, jest jednorazowy i ma ograniczony czas ważności. Zgoda powstaje dopiero po potwierdzeniu jej przez tę osobę pod linkiem; brak odpowiedzi, odmowa lub wygaśnięcie linku oznaczają brak zgody, a zaproszenie nie jest ponawiane. Klient tymczasowy wycofuje zgodę linkiem zamieszczonym w każdej wiadomości marketingowej, bez potrzeby zakładania Konta.',
      'Zgody marketingowej nie może zaznaczyć ani wprowadzić za Klienta Firma ani Pracownik, w tym przy imporcie danych klientów z innego systemu.',
      'Firma jest nadawcą informacji handlowej i administratorem danych przetwarzanych w celach marketingowych. Firma odpowiada za treść wiadomości, za jej zgodność z prawem, w tym z art. 398 ustawy — Prawo komunikacji elektronicznej, oraz za oznaczenie jej jako informacji handlowej. Aplikacja dołącza do każdej wiadomości marketingowej nazwę Firmy i link do wycofania zgody.',
      'Usługodawca może ograniczać liczbę wiadomości marketingowych wysyłanych przez Firmę w ciągu dnia oraz wstrzymać Firmie możliwość wysyłki w razie naruszenia Regulaminu lub prawa, w szczególności przy wysyłce treści bezprawnych lub zgłoszeniach od odbiorców.',
      'Odpowiedź „STOP" lub inna wiadomość zwrotna nie jest sposobem wycofania zgody — służy do tego link, o którym mowa w ust. 4.',
    ],
  },
  {
    icon: ShieldCheck,
    title: '§13. Dane osobowe — role Usługodawcy i Firm',
    clauses: [
      'Usługodawca jest administratorem danych osobowych związanych z Kontem Użytkownika w Aplikacji. Zasady przetwarzania opisuje Polityka prywatności.',
      'Dane Klienta przekazywane Firmie w związku z Rezerwacją (m.in. imię i numer telefonu) Firma przetwarza od chwili ich otrzymania we własnych celach, jako odrębny administrator. Dotyczy to także Zgód marketingowych udzielanych Firmie.',
      'W zakresie danych przetwarzanych w Panelu Firmy — w tym danych Klientów tymczasowych i innych osób wprowadzonych przez Firmę, notatek, historii wizyt oraz wysyłki powiadomień i wiadomości marketingowych — administratorem jest Firma, a Usługodawca przetwarza te dane w jej imieniu jako podmiot przetwarzający, na podstawie Umowy powierzenia (Załącznik nr 1).',
      'Umowa powierzenia zostaje zawarta z chwilą akceptacji Regulaminu przez Firmę i obowiązuje przez czas korzystania przez Firmę z Aplikacji.',
      'Firma wykonuje obowiązek informacyjny wobec osób, których dane wprowadza do Aplikacji samodzielnie, w tym wobec Klientów tymczasowych, oraz odpowiada za posiadanie podstawy prawnej przetwarzania tych danych.',
    ],
  },
  {
    icon: Download,
    title: '§14. Dane Firmy — eksport i zakończenie korzystania',
    clauses: [
      'Firma może w każdej chwili zażądać przekazania kopii danych przetwarzanych w Panelu Firmy (m.in. klienci, usługi, Rezerwacje), wysyłając wiadomość z adresu e‑mail właściciela Konta Firmy na adres support@timelly.pl. Usługodawca przekazuje dane w powszechnie używanym formacie elektronicznym w terminie do 30 dni.',
      'Przed usunięciem Konta Firmy Firma powinna zażądać eksportu danych, jeżeli chce je zachować. Po usunięciu Konta Firmy dane przetwarzane w Panelu Firmy są usuwane niezwłocznie, nie później niż w terminie 3 miesięcy, z wyjątkiem danych, które Usługodawca musi zachować na podstawie przepisów prawa.',
      'Opinie wystawione Firmie przez Klientów nie są przedmiotem eksportu na potrzeby publikacji w innych serwisach.',
    ],
  },
  {
    icon: Copyright,
    title: '§15. Własność intelektualna',
    clauses: [
      'Aplikacja, jej nazwa, logo, układ, kod oraz pozostałe elementy stanowią własność Usługodawcy lub są wykorzystywane na podstawie odpowiednich uprawnień i podlegają ochronie prawnej. Korzystanie z nich poza zakresem dozwolonym Regulaminem wymaga zgody Usługodawcy.',
      'Zamieszczając Treści, Użytkownik udziela Usługodawcy niewyłącznej, nieodpłatnej licencji na ich przechowywanie, zwielokrotnianie i prezentowanie w Aplikacji — w tym w tłumaczeniu na inne języki — w zakresie niezbędnym do świadczenia usługi. Licencja wygasa z chwilą usunięcia Treści lub Konta. Użytkownik oświadcza, że jest uprawniony do udzielenia takiej licencji.',
    ],
  },
  {
    icon: AlertTriangle,
    title: '§16. Odpowiedzialność',
    clauses: [
      'Aplikacja udostępniana jest w modelu „takim, jaka jest". Usługodawca dokłada należytej staranności w jej utrzymaniu, lecz nie gwarantuje nieprzerwanej dostępności ani przydatności do określonego celu.',
      'Usługodawca nie ponosi odpowiedzialności za Usługi Firm, ich jakość, wykonanie, ceny i rozliczenia, ani za Treści zamieszczane przez Użytkowników, w tym za treść wiadomości marketingowych Firm. Odpowiedzialność wobec Klienta z tytułu Usługi Firmy ponosi wyłącznie Firma.',
      'Firma zwalnia Usługodawcę z odpowiedzialności wobec osób trzecich za roszczenia wynikające z Treści zamieszczonych przez Firmę, z wiadomości wysłanych przez Firmę oraz z przetwarzania przez Firmę danych osobowych niezgodnie z prawem.',
      'Usługodawca nie odpowiada za szkody wynikłe z korzystania z Aplikacji niezgodnie z Regulaminem, z podania nieprawdziwych danych ani z przyczyn leżących po stronie Użytkownika lub osób trzecich.',
      'Postanowienia ust. 1–4 nie wyłączają ani nie ograniczają odpowiedzialności Usługodawcy w zakresie, w jakim jest to niedopuszczalne na podstawie bezwzględnie obowiązujących przepisów prawa, w szczególności wobec konsumentów oraz za szkody wyrządzone umyślnie.',
    ],
  },
  {
    icon: ShieldAlert,
    title: '§17. Zgłaszanie nielegalnych treści i odwołania',
    clauses: [
      'Punktem kontaktowym Usługodawcy dla Użytkowników i organów, w tym w rozumieniu rozporządzenia (UE) 2022/2065 (akt o usługach cyfrowych), jest adres support@timelly.pl. Komunikacja odbywa się w języku polskim lub angielskim.',
      'Każdy, także osoba bez Konta, może zgłosić Treść, którą uważa za nielegalną lub niezgodną z Regulaminem (np. opinię, opis lub zdjęcie Firmy), na adres support@timelly.pl. Zgłoszenie powinno zawierać wskazanie Treści (np. nazwę Firmy i fragment opinii), wyjaśnienie, dlaczego zgłaszający uważa ją za nielegalną, oraz jego imię i adres e‑mail, chyba że zgłoszenie dotyczy przestępstw, dla których prawo tego nie wymaga.',
      'Usługodawca rozpatruje zgłoszenie bez zbędnej zwłoki i informuje zgłaszającego o decyzji. Jeżeli Usługodawca usunie Treść lub ograniczy do niej dostęp albo zawiesi Konto, przekazuje autorowi Treści uzasadnienie wskazujące podstawę decyzji i punkt Regulaminu lub przepis, którego dotyczy.',
      'Autor Treści oraz zgłaszający mogą odwołać się od decyzji w terminie 6 miesięcy, na adres support@timelly.pl. Odwołanie rozpatruje osoba, która nie podjęła pierwotnej decyzji, jeżeli jest to możliwe, w terminie 14 dni. Nie wyłącza to prawa do dochodzenia roszczeń przed sądem.',
    ],
  },
  {
    icon: MailOpen,
    title: '§18. Reklamacje i skargi',
    clauses: [
      'Reklamacje dotyczące działania Aplikacji Użytkownik, w tym Firma, może składać na adres support@timelly.pl. Reklamacja powinna zawierać opis problemu oraz dane umożliwiające kontakt.',
      'Usługodawca rozpatruje reklamacje niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania, a w sprawach szczególnie złożonych — nie później niż w terminie 30 dni, informując Użytkownika o przyczynie opóźnienia.',
      'Reklamacje dotyczące Usług Firm Klient kieruje bezpośrednio do Firmy.',
    ],
  },
  {
    icon: DoorOpen,
    title: '§19. Zawieszenie i rozwiązanie umowy',
    clauses: [
      'Użytkownik może w każdej chwili zakończyć korzystanie z Aplikacji i usunąć Konto z poziomu Aplikacji (Profil → Ustawienia → Usuń konto) lub kontaktując się na adres support@timelly.pl. Usunięcie Konta skutkuje rozwiązaniem umowy o świadczenie usług drogą elektroniczną.',
      'Usługodawca może ograniczyć dostęp do funkcji, zawiesić lub usunąć Konto, jeżeli Użytkownik narusza Regulamin lub przepisy prawa, po uprzednim wezwaniu do zaprzestania naruszeń — chyba że naruszenie jest rażące lub wymaga natychmiastowej reakcji ze względów bezpieczeństwa lub prawnych.',
      'O ograniczeniu, zawieszeniu lub usunięciu Konta Usługodawca informuje Użytkownika wraz z uzasadnieniem, a Firmę — na trwałym nośniku (e‑mailem), najpóźniej z chwilą, gdy środek zaczyna obowiązywać. Firma może się od tej decyzji odwołać w trybie §17 ust. 4.',
      'Usługodawca może zakończyć świadczenie usługi na rzecz Firmy z innych przyczyn niż naruszenie, powiadamiając ją na trwałym nośniku z co najmniej 30-dniowym wyprzedzeniem, wraz z uzasadnieniem.',
      'Rozwiązanie umowy nie wpływa na czynności dokonane przed jego skutkiem, w tym na Rezerwacje wymagające rozliczenia między Klientem a Firmą.',
    ],
  },
  {
    icon: SquarePen,
    title: '§20. Zmiany Regulaminu',
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
      'O zmianie Regulaminu Usługodawca powiadamia Firmy na trwałym nośniku (pocztą elektroniczną) nie później niż na 15 dni przed wejściem zmiany w życie. Powiadomienie zawiera informację o zakresie zmian, dacie ich wejścia w życie oraz dostęp do treści nowej wersji.',
      'Z dniem wejścia zmiany w życie Aplikacja przedstawia każdemu Użytkownikowi nową wersję Regulaminu wraz z informacją o zakresie zmian i prosi o jej akceptację. Nowa wersja wiąże Użytkownika dopiero od chwili jej akceptacji; do tego czasu nie może on korzystać z funkcji wymagających Konta.',
      'Jeżeli Użytkownik nie akceptuje zmian, może w każdej chwili wypowiedzieć umowę i usunąć Konto bez ponoszenia kosztów — w Aplikacji przed dniem wejścia zmian w życie, a później przez stronę www.timelly.pl/delete-account lub na adres support@timelly.pl.',
      'Firma może zrzec się okresu, o którym mowa w ust. 2, akceptując nową wersję Regulaminu w Aplikacji przed jego upływem. Nowa wersja wiąże wtedy Firmę od chwili akceptacji.',
      'Okresu, o którym mowa w ust. 2, nie stosuje się, gdy zmiana wynika z obowiązku prawnego, który wymaga wprowadzenia jej w krótszym terminie, albo gdy jest konieczna, by przeciwdziałać nieprzewidzianemu i bezpośredniemu zagrożeniu dla Aplikacji lub Użytkowników, w szczególności oszustwom, złośliwemu oprogramowaniu lub spamowi.',
    ],
  },
  {
    icon: Flag,
    title: '§21. Postanowienia końcowe',
    clauses: [
      'W sprawach dotyczących ochrony danych osobowych zastosowanie ma Polityka prywatności Timelly, dostępna pod adresem www.timelly.pl/privacy-policy.',
      'Regulamin wraz z Załącznikiem nr 1 udostępniany jest nieodpłatnie w sposób umożliwiający jego pozyskanie, odtworzenie i utrwalenie (zapisanie i wydruk) za pośrednictwem Aplikacji.',
      'Prawem właściwym jest prawo polskie. Konsument może korzystać z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń, w szczególności za pośrednictwem miejskiego lub powiatowego rzecznika konsumentów oraz wojewódzkich inspektoratów Inspekcji Handlowej.',
      'Jeżeli którekolwiek postanowienie Regulaminu okaże się nieważne lub bezskuteczne, pozostałe postanowienia zachowują moc.',
      `Regulamin wchodzi w życie z dniem ${EFFECTIVE_DATE} r.`,
    ],
  },
  {
    icon: FileLock,
    title: 'Załącznik nr 1 — Umowa powierzenia przetwarzania danych osobowych',
    clauses: [
      'Umowa zostaje zawarta między Firmą jako administratorem (dalej: „Administrator") a Usługodawcą jako podmiotem przetwarzającym (dalej: „Procesor") na podstawie art. 28 rozporządzenia (UE) 2016/679 (RODO), z chwilą akceptacji Regulaminu przez Firmę, i obowiązuje przez czas korzystania przez Firmę z Aplikacji.',
      'Przedmiot i cel: Procesor przetwarza dane w zakresie określonym w §13 ust. 3 Regulaminu, wyłącznie w celu świadczenia Firmie funkcji Aplikacji — prowadzenia kalendarza i Rezerwacji, listy klientów i notatek, wysyłki powiadomień o Rezerwacjach oraz, na polecenie Firmy, wiadomości marketingowych.',
      'Rodzaj danych: imię i nazwisko lub nazwa, numer telefonu, adres e‑mail (jeśli podany), historia Rezerwacji, notatki Firmy, informacja o Zgodzie marketingowej (udzielenie, odmowa lub wycofanie, data i sposób, a przy odpowiedzi przez link — adres IP i typ przeglądarki) oraz treść i metadane wysłanych wiadomości. Kategorie osób: klienci Firmy, w tym Klienci tymczasowi, oraz Pracownicy Firmy.',
      'Procesor przetwarza dane wyłącznie na udokumentowane polecenie Administratora. Poleceniem jest korzystanie z funkcji Aplikacji przez Firmę i jej Pracowników. Procesor informuje Administratora, jeżeli jego zdaniem polecenie narusza prawo.',
      'Procesor zapewnia, że osoby upoważnione do przetwarzania danych zobowiązały się do zachowania tajemnicy, oraz stosuje środki bezpieczeństwa, o których mowa w art. 32 RODO, opisane w Polityce prywatności (m.in. szyfrowanie połączeń, kontrola dostępu na poziomie wierszy bazy danych, kontrola dostępu oparta na rolach).',
      'Administrator udziela Procesorowi ogólnej zgody na korzystanie z dalszych podmiotów przetwarzających wymienionych w Polityce prywatności (infrastruktura, wysyłka SMS i powiadomień push, raportowanie błędów). O zamiarze dodania lub zmiany dalszego podmiotu Procesor informuje Administratora z co najmniej 7-dniowym wyprzedzeniem; Administrator może w tym czasie zgłosić sprzeciw, a w razie jego nieuwzględnienia — rozwiązać umowę. Procesor nakłada na dalsze podmioty te same obowiązki ochrony danych.',
      'Przy wysyłce SMS z telefonu Firmy za pośrednictwem aplikacji Timelly Bramka wiadomość wysyła urządzenie i karta SIM Firmy; operator telekomunikacyjny Firmy nie jest dalszym podmiotem przetwarzającym Procesora.',
      'Procesor pomaga Administratorowi, w miarę możliwości, w realizacji praw osób, których dane dotyczą, oraz obowiązków z art. 32–36 RODO. Żądanie osoby skierowane do Procesora, a dotyczące danych Administratora, Procesor przekazuje Administratorowi. Sprzeciw wobec marketingu lub wycofanie Zgody marketingowej zgłoszone Procesorowi Procesor wykonuje od razu w Aplikacji, blokując dalszą wysyłkę wiadomości marketingowych tej Firmy do tej osoby, i informuje o tym Administratora.',
      'Procesor zgłasza Administratorowi naruszenie ochrony danych bez zbędnej zwłoki, nie później niż w ciągu 48 godzin od jego stwierdzenia, przekazując informacje potrzebne do zgłoszenia go organowi nadzorczemu.',
      'Procesor udostępnia Administratorowi informacje niezbędne do wykazania spełnienia obowiązków z art. 28 RODO. Audyt odbywa się w pierwszej kolejności w formie pisemnych pytań; inspekcja jest możliwa, gdy odpowiedzi nie wystarczą, nie częściej niż raz w roku, po uprzedzeniu z co najmniej 14-dniowym wyprzedzeniem i na koszt Administratora.',
      'Dane przetwarzane są w Europejskim Obszarze Gospodarczym. Przekazanie danych poza EOG przez dalsze podmioty następuje wyłącznie na podstawie mechanizmów z rozdziału V RODO, opisanych w Polityce prywatności.',
      'Po zakończeniu umowy Procesor usuwa dane zgodnie z §14 Regulaminu, po umożliwieniu Administratorowi ich eksportu, chyba że prawo nakazuje ich dalsze przechowywanie.',
      'Administrator odpowiada za posiadanie podstawy prawnej przetwarzania powierzonych danych, w tym Zgód marketingowych, oraz za wykonanie obowiązku informacyjnego wobec osób, których dane wprowadza samodzielnie.',
    ],
  },
];

export default function Terms() {
  return (
    <PageShell>
      <PageHero
        icon={FileText}
        title="Regulamin"
        subtitle={`Data wejścia w życie: ${EFFECTIVE_DATE}`}
      />

      {SECTIONS.map((section) => (
        <Card key={section.title}>
          <CardHeader icon={section.icon} title={section.title} />
          <div className="space-y-3">
            {section.clauses.map((clause, i) => {
              const text = typeof clause === 'string' ? clause : clause.text;
              const sub = typeof clause === 'string' ? null : clause.sub;
              return (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="min-w-[22px] text-[15px] font-bold leading-6 text-ink dark:text-accent">
                    {i + 1}.
                  </span>
                  <div className="flex-1">
                    <p className="text-[15px] leading-6 text-neutral-800 dark:text-neutral-200">
                      {text}
                    </p>
                    {sub
                      ? sub.map((item, j) => (
                          <div key={j} className="mt-2 flex items-start gap-2.5 pl-1">
                            <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-ink dark:bg-accent" />
                            <p className="flex-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                              {item}
                            </p>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      ))}
    </PageShell>
  );
}
