import {
  Baby,
  Cookie,
  Megaphone,
  Database,
  Headphones,
  Hourglass,
  Lock,
  Scale,
  Server,
  Share2,
  ShieldCheck,
  SquarePen,
  Target,
  Trophy,
  UserRoundCheck,
} from 'lucide-react';
import {
  Bullets,
  Card,
  CardHeader,
  NoteBox,
  Numbered,
  PageHero,
  PageShell,
  Para,
  Subheading,
} from '../components/legal';
import { CONTACT_EMAIL } from '../lib/constants';

const LAST_UPDATED = '24 września 2026';

function EmailLink() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="font-semibold text-ink underline-offset-2 hover:underline dark:text-accent"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <PageHero
        icon={ShieldCheck}
        title="Polityka Prywatności"
        subtitle={`Ostatnia aktualizacja: ${LAST_UPDATED}`}
      />

      {/* ── 1. Administrator danych ── */}
      <Card>
        <CardHeader icon={UserRoundCheck} title="1. Administrator danych" />
        <Para>
          Administratorem danych osobowych związanych z Twoim kontem w aplikacji Timelly jest
          Stanisław Kryński (dalej: „Administrator" lub „Timelly").
        </Para>
        <Para>
          Kontakt z Administratorem: <EmailLink />
        </Para>
        <Subheading>Kiedy administratorem jest firma</Subheading>
        <Bullets
          muted
          items={[
            'Gdy rezerwujesz wizytę, firma otrzymuje Twoje dane potrzebne do jej obsługi (m.in. imię i numer telefonu). Od tej chwili firma przetwarza je we własnych celach jako odrębny administrator — np. do wykonania usługi, rozliczeń i prowadzenia historii wizyt. Dotyczy to także zgody marketingowej, której udzielasz firmie.',
            'Dane, które firma wprowadza i prowadzi w swoim panelu — np. klienci dodani ręcznie (bez konta), notatki, historia wizyt, wysyłka powiadomień i wiadomości marketingowych — przetwarza firma jako administrator, a Timelly robi to w jej imieniu jako podmiot przetwarzający, na podstawie umowy powierzenia (Załącznik nr 1 do Regulaminu).',
            'W sprawach danych, których administratorem jest firma, możesz zwrócić się bezpośrednio do firmy (dane kontaktowe znajdziesz na jej profilu) albo do nas — przekażemy żądanie firmie.',
          ]}
        />
        <Para muted>
          Aplikacja Timelly nie jest powiązana z zarejestrowaną działalnością gospodarczą.
          Korzystanie z niej jest bezpłatne.
        </Para>
      </Card>

      {/* ── 2. Jakie dane zbieramy ── */}
      <Card>
        <CardHeader icon={Database} title="2. Jakie dane zbieramy" />

        <Subheading>Konto klienta (użytkownik indywidualny)</Subheading>
        <Bullets
          items={[
            'Nazwa użytkownika (np. imię i nazwisko)',
            'Numer telefonu',
            'Zdjęcie profilowe (opcjonalnie)',
          ]}
        />

        <Subheading>Konto firmowe</Subheading>
        <Bullets
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
        />

        <Subheading>Rezerwacje</Subheading>
        <Bullets
          items={[
            'Data, godzina, status rezerwacji',
            'Wybrane usługi i przypisany pracownik',
            'Notatki do rezerwacji (opcjonalnie)',
          ]}
        />

        <Subheading>Dane techniczne</Subheading>
        <Bullets
          items={[
            'Data ostatniego logowania do aplikacji',
            'Dzienne wejścia do aplikacji (data i platforma) — wyłącznie dla zalogowanych użytkowników; nie stosujemy trwałych identyfikatorów urządzenia',
            'Licznik uruchomień aplikacji (w celu wykrywania nieaktywnych kont)',
            'Tokeny push notification (do wysyłania powiadomień)',
            'Zapisy nieudanych prób logowania (np. blokady PIN) — w celach bezpieczeństwa',
            'Raporty błędów aplikacji: opis błędu, model i system urządzenia, wersja aplikacji, identyfikator konta oraz — tylko dla sesji, w której wystąpił błąd — zapis przebiegu ekranu z zamaskowanymi tekstami i obrazami',
          ]}
        />

        <Subheading>Opinie</Subheading>
        <Bullets items={['Ocena (1–5) i komentarz tekstowy wystawiony firmie']} />

        <Subheading>Klienci tymczasowi (rezerwacje bez konta)</Subheading>
        <Bullets
          items={[
            'Imię, numer telefonu i notatki osoby bez konta, którą firma dodaje do rezerwacji w swoim imieniu',
          ]}
        />

        <Subheading>Aktywność i preferencje</Subheading>
        <Bullets
          items={[
            'Ulubione firmy',
            'Zapisy na wydarzenia oraz listy oczekujących (na co i kiedy się zapisałeś)',
            'Historia punktów i ewentualnego salda (rejestr naliczeń za zrealizowane wizyty)',
          ]}
        />

        <Subheading>Komunikacja i wnioski</Subheading>
        <Bullets
          items={[
            'Treść i metadane wysłanych powiadomień push i SMS (np. treść przypomnienia o wizycie, numer telefonu odbiorcy)',
            'Treść wiadomości z formularza kontaktu wraz z numerem telefonu (jeśli podany)',
            'Dane wniosku o założenie profilu firmy: proponowana nazwa, opis i numer telefonu kontaktowy',
          ]}
        />

        <Subheading>Zgody</Subheading>
        <Bullets
          items={[
            'Rejestr akceptacji dokumentów (regulamin, polityka prywatności): typ dokumentu, wersja, data, platforma oraz wersja aplikacji — jako dowód spełnienia obowiązków prawnych',
            'Zgody marketingowe udzielone poszczególnym firmom: firma, odpowiedź (zgoda albo odmowa) i jej późniejsze wycofanie, wersja treści zgody, data, sposób (w aplikacji albo przez link z SMS-a), platforma oraz wersja aplikacji, a przy odpowiedzi przez link także adres IP i typ przeglądarki — jako dowód udzielenia lub wycofania zgody',
          ]}
        />
      </Card>

      {/* ── 3. Cele przetwarzania ── */}
      <Card>
        <CardHeader icon={Target} title="3. Cele i podstawy przetwarzania" />
        <Numbered
          items={[
            {
              title: 'Świadczenie usługi',
              desc: 'Rejestracja konta, obsługa rezerwacji, wyświetlanie firm i usług, wysyłanie powiadomień push i SMS — na podstawie umowy (art. 6 ust. 1 lit. b RODO).',
            },
            {
              title: 'Utrzymanie bezpieczeństwa',
              desc: 'Monitorowanie aktywności konta, wykrywanie nadużyć oraz ograniczanie liczby nieudanych prób logowania (np. blokady PIN) — na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO).',
            },
            {
              title: 'Funkcje grywalizacyjne (ranking i punkty)',
              desc: 'Naliczanie punktów za zrealizowane wizyty oraz prowadzenie miesięcznego rankingu w trybie ograniczonym — na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO), z prawem sprzeciwu. Tryb pełny (imię i zdjęcie) — na podstawie zgody (art. 81 Prawa autorskiego).',
            },
            {
              title: 'Wyświetlanie lokalizacji firm',
              desc: 'Wykorzystanie Google Maps SDK do prezentowania firm na mapie — na podstawie umowy (art. 6 ust. 1 lit. b RODO).',
            },
            {
              title: 'Komunikacja',
              desc: 'Odpowiadanie na zapytania, obsługa wiadomości z formularza kontaktu, wniosków o założenie profilu firmy oraz wniosków o usunięcie konta — na podstawie prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).',
            },
            {
              title: 'Wykrywanie i naprawa błędów',
              desc: 'Zbieranie raportów błędów aplikacji w celu ich naprawy — na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO).',
            },
            {
              title: 'Dokumentowanie zgód',
              desc: 'Przechowywanie rejestru akceptacji regulaminu i polityki prywatności (kto, którą wersję i kiedy zaakceptował) — w celu wykazania zgodności, na podstawie obowiązku prawnego oraz prawnie uzasadnionego interesu (art. 6 ust. 1 lit. c i f RODO).',
            },
            {
              title: 'Marketing firm (tylko za Twoją zgodą)',
              desc: 'Wysyłka informacji handlowych przez firmę, której udzieliłeś zgody marketingowej. Administratorem jest firma, a Timelly przetwarza dane w jej imieniu. Szczegóły w sekcji „Wiadomości marketingowe od firm".',
            },
          ]}
        />
      </Card>

      {/* ── 4. Udostępnianie danych ── */}
      <Card>
        <CardHeader icon={Share2} title="4. Komu udostępniamy dane" />
        <Para>
          Nie sprzedajemy danych osobowych i nie wysyłamy własnych wiadomości marketingowych.
          Dostęp do danych mają:
        </Para>
        <Bullets
          muted
          items={[
            'Firmy, w których rezerwujesz — jako odrębni administratorzy (sekcja 1): nazwa użytkownika, numer telefonu, dane rezerwacji oraz informacja, czy udzieliłeś im zgody marketingowej.',
            'Supabase Inc. — dostawca infrastruktury (baza danych, uwierzytelnianie, przechowywanie plików). Dane przechowywane na serwerach AWS w regionie Unii Europejskiej.',
            'Operator bramki SMS (SMSPlanet) — do wysyłania wiadomości SMS.',
            'Expo (EAS) — do dostarczania powiadomień push na urządzenia mobilne.',
            'Functional Software, Inc. (Sentry) — raportowanie błędów aplikacji; dane przechowywane w regionie Unii Europejskiej (Niemcy).',
            'Google LLC — Google Maps SDK wykorzystywane do wyświetlania map i lokalizacji firm.',
            'DeepL SE — tłumaczenie treści publikowanych przez firmy (np. opisów usług) na inne języki; nie przekazujemy do tłumaczenia danych klientów.',
          ]}
        />
        <NoteBox>
          Jeśli firma korzysta z aplikacji Timelly Bramka, wiadomości SMS do Ciebie (przypomnienia
          o wizycie i — za Twoją zgodą — wiadomości marketingowe) wysyła telefon firmy z jej
          numeru. Klienci widzą dane publiczne firmy: nazwę, adres, usługi, godziny pracy i
          zdjęcia.
        </NoteBox>
      </Card>

      {/* ── 5. Przechowywanie danych ── */}
      <Card>
        <CardHeader icon={Server} title="5. Gdzie przechowujemy dane" />
        <Para>
          Dane osobowe są przechowywane na serwerach Supabase (AWS) w regionie Unii Europejskiej.
          Pliki (zdjęcia profilowe, portfolio, zdjęcia informacyjne) są przechowywane w Supabase
          Storage w tym samym regionie.
        </Para>
        <Para muted>
          Korzystanie z Google Maps SDK oraz usług push notification może wiązać się z
          przekazywaniem ograniczonych danych technicznych (np. współrzędnych, tokenów urządzenia)
          do serwerów Google, Expo i Sentry zlokalizowanych poza UE, zgodnie z ich politykami prywatności i
          odpowiednimi mechanizmami transferu danych.
        </Para>
      </Card>

      {/* ── 6. Okres przechowywania ── */}
      <Card>
        <CardHeader icon={Hourglass} title="6. Jak długo przechowujemy dane" />
        <Bullets
          muted
          items={[
            'Dane konta — przez cały okres korzystania z usługi, do momentu usunięcia konta.',
            'Dane rezerwacji — po usunięciu konta rezerwacje pozostają u firmy bez powiązania z Twoim kontem, na potrzeby rozliczeń firmy i ewentualnych roszczeń; ich dalsze przechowywanie należy do firmy jako administratora.',
            'Opinie — po usunięciu konta pozostają opublikowane jako anonimowe, bez powiązania z Twoim kontem.',
            'Rejestr akceptacji dokumentów i zgód marketingowych — po usunięciu konta pozostaje jako wpis bez powiązania z kontem, na potrzeby wykazania zgodności (art. 17 ust. 3 lit. b i e RODO), nie dłużej niż do upływu okresu przedawnienia roszczeń.',
            'Zgoda marketingowa — do jej wycofania albo do usunięcia konta firmy.',
            'Raporty błędów — do 90 dni.',
            'Zdjęcia — usuwane wraz z kontem lub firmą.',
            'Dane techniczne (logi, kopie zapasowe) — przechowywane tymczasowo zgodnie z cyklem retencji dostawcy (zwykle do 30 dni).',
            'Dane wymagane prawem — przechowywane tak długo, jak wymaga tego obowiązujące prawo.',
          ]}
        />
      </Card>

      {/* ── 7. Prawa użytkownika ── */}
      <Card>
        <CardHeader icon={Scale} title="7. Twoje prawa" />
        <Para>Zgodnie z RODO przysługują Ci następujące prawa:</Para>
        <Numbered
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
              title: 'Prawo do wycofania zgody',
              desc: 'Zgodę (np. marketingową dla firmy lub na tryb pełny w rankingu) możesz wycofać w każdej chwili, bez wpływu na zgodność z prawem przetwarzania przed jej wycofaniem.',
            },
            {
              title: 'Prawo do skargi',
              desc: 'Masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).',
            },
          ]}
        />
        <Para>
          Aby skorzystać z powyższych praw, skontaktuj się z nami: <EmailLink />
        </Para>
      </Card>

      {/* ── 8. Pliki cookie ── */}
      <Card>
        <CardHeader icon={Cookie} title="8. Pliki cookie" />
        <Para>
          Strona internetowa Timelly może wykorzystywać pliki cookie niezbędne do prawidłowego
          działania serwisu (np. sesja uwierzytelniania Supabase). Nie stosujemy plików cookie do
          celów analitycznych ani reklamowych.
        </Para>
      </Card>

      {/* ── 9. Bezpieczeństwo ── */}
      <Card>
        <CardHeader icon={Lock} title="9. Bezpieczeństwo danych" />
        <Para>
          Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych,
          w tym:
        </Para>
        <Bullets
          items={[
            'Szyfrowanie połączeń (HTTPS/TLS)',
            'Row Level Security (RLS) w bazie danych — użytkownicy mają dostęp wyłącznie do swoich danych',
            'Haszowanie haseł po stronie Supabase Auth',
            'Kontrola dostępu oparta na rolach (właściciel, pracownik, klient)',
          ]}
        />
      </Card>

      {/* ── 10. Dzieci ── */}
      <Card>
        <CardHeader icon={Baby} title="10. Dzieci" />
        <Para>
          Z aplikacji Timelly mogą korzystać wyłącznie osoby pełnoletnie. Nie zbieramy świadomie
          danych osób niepełnoletnich. Jeśli stwierdzimy, że konto założyła osoba poniżej 18. roku
          życia, zostanie ono niezwłocznie usunięte.
        </Para>
      </Card>

      {/* ── 11. Zmiany ── */}
      <Card>
        <CardHeader icon={SquarePen} title="11. Zmiany w polityce prywatności" />
        <Para>
          Administrator zastrzega sobie prawo do aktualizacji niniejszej polityki prywatności. O
          istotnych zmianach użytkownicy zostaną poinformowani za pośrednictwem aplikacji lub drogą
          e‑mailową. Aktualna wersja polityki jest zawsze dostępna pod adresem strony internetowej
          Timelly.
        </Para>
      </Card>

      {/* ── 12. Ranking i widoczność profilu ── */}
      <Card id="ranking">
        <CardHeader icon={Trophy} title="12. Ranking i widoczność profilu" />
        <Para>
          Aplikacja Timelly prowadzi miesięczny ranking użytkowników bazujący na punktach
          zdobywanych za zrealizowane wizyty. Udział jest domyślny i odbywa się w trybie
          ograniczonym (z maskowaniem imienia i bez zdjęcia), z prawem sprzeciwu. Sekcja opisuje,
          jakie dane są publikowane i na jakiej podstawie prawnej.
        </Para>

        <Subheading>Jakie dane pokazujemy innym</Subheading>
        <Bullets
          items={[
            'Twoje imię (pierwszy człon pola „nazwa użytkownika") — np. „Mateusz".',
            'Twoje zdjęcie profilowe (jeśli zostało dodane).',
            'Liczbę punktów zdobytych w bieżącym miesiącu kalendarzowym.',
            'Twoją ligę (Brąz, Srebro, Złoto, Platyna, Diament — wyliczana z punktów).',
            'Twoją pozycję w rankingu miesięcznym.',
          ]}
        />

        <Subheading>Podstawa prawna</Subheading>
        <Numbered
          items={[
            {
              title: 'Uczestnictwo w rankingu — prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO)',
              desc: 'Wyświetlanie Twojej pozycji, punktów i ligi w miesięcznym rankingu w trybie ograniczonym (zamaskowane imię „M*****z", bez zdjęcia) opiera się na prawnie uzasadnionym interesie Administratora, jakim jest prowadzenie funkcji grywalizacyjnej. Przysługuje Ci prawo sprzeciwu (art. 21 RODO) — realizujesz je wyłączając swoją widoczność w aplikacji lub wnioskując o usunięcie z rankingu.',
            },
            {
              title: 'Tryb pełny — zgoda na rozpowszechnianie wizerunku (art. 81 ust. 1 Prawa autorskiego)',
              desc: 'Pokazanie innym użytkownikom Twojego imienia i zdjęcia profilowego (tylko tryb pełny) odbywa się na podstawie Twojej zgody na rozpowszechnianie wizerunku. Udzielasz jej, wybierając w aplikacji tryb „Pełne imię + zdjęcie", i możesz ją w każdej chwili wycofać, wracając do trybu ograniczonego. W trybie ograniczonym zdjęcie nie jest pokazywane i ta zgoda nie jest wymagana.',
            },
          ]}
        />

        <Subheading>Dwa tryby widoczności (Twój wybór)</Subheading>
        <Bullets
          muted
          items={[
            'Tryb pełny — inni widzą Twoje imię (pierwszy człon nazwy użytkownika) oraz Twoje zdjęcie profilowe. Ten tryb wymaga osobnej zgody na rozpowszechnianie wizerunku (art. 81 ust. 1 Prawa autorskiego).',
            'Tryb ograniczony (domyślny) — inni widzą Cię z maskowanym imieniem (np. „M*****z") oraz bez zdjęcia profilowego. Pozostajesz w rankingu, ale Twoje dane osobowe nie są pokazywane. Podstawą udziału w tym trybie jest prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO).',
            'Tryb możesz zmienić w każdej chwili: Profil → toggle „Pokaż mnie w rankingu" lub Profil → Ustawienia → „Ranking i prywatność". Zmiana zaczyna obowiązywać od razu.',
            'Niezależnie od trybu, swoją własną pozycję w rankingu zawsze widzisz w postaci pełnej (po Twojej stronie aplikacji).',
          ]}
        />

        <Subheading>Sprzeciw, wycofanie zgody i usunięcie z rankingu</Subheading>
        <Bullets
          muted
          items={[
            'Powrót z trybu pełnego do trybu ograniczonego = wycofanie zgody na publikację imienia i zdjęcia. Przestają być one pokazywane innym, ale Twoje punkty nadal liczą się w rankingu (jako wpis zanonimizowany).',
            'Sprzeciw wobec udziału w rankingu (art. 21 RODO) realizujesz wyłączając swoją widoczność w aplikacji albo wnioskując o całkowite usunięcie z rankingu pod adresem support@timelly.pl — usuwamy bez zbędnej zwłoki.',
            'Administrator zastrzega sobie prawo do całkowitego usunięcia profilu z rankingu w przypadku naruszenia regulaminu (np. nadużycia punktowego).',
            'Wycofanie zgody na rozpowszechnianie wizerunku nie wpływa na zgodność z prawem przetwarzania, którego dokonano przed jej wycofaniem.',
          ]}
        />

        <NoteBox>
          Ranking nie jest widoczny dla osób trzecich spoza aplikacji Timelly — widzą go wyłącznie
          inni zalogowani użytkownicy. Dane rankingu nie są udostępniane firmom prowadzącym profile
          w Timelly ani podmiotom zewnętrznym.
        </NoteBox>
      </Card>

      {/* ── 13. Marketing firm ── */}
      <Card id="marketing">
        <CardHeader icon={Megaphone} title="13. Wiadomości marketingowe od firm" />
        <Para>
          Firma może wysyłać Ci oferty (np. SMS-y o wolnych terminach i promocjach) wyłącznie
          wtedy, gdy udzielisz zgody właśnie tej firmie. Zgoda jest osobna dla każdej firmy —
          zgoda dla jednej nie obejmuje innych. Zgoda jest przypisana do Twojego numeru telefonu w tej firmie: jeśli masz konto, a firma dopisała Cię też ręcznie pod tym samym numerem, jest to jedna zgoda i jedno wypisanie.
        </Para>
        <Bullets
          muted
          items={[
            'Jeśli firma włączyła wysyłanie ofert, pytamy o zgodę w jej imieniu przy pierwszej rezerwacji u niej od tego momentu, przed jej potwierdzeniem. „Tak" i „Nie" są równorzędne, a odpowiedź nie wpływa na rezerwację. Nie pytamy ponownie.',
            'Jeśli nie masz konta, link do udzielenia zgody może być dołączony do SMS-a o Twojej wizycie w tej firmie — nigdy w osobnej wiadomości. Link jest jednorazowy, dotyczy jednej firmy i wygasa; nie wysyłamy go ponownie. Zgoda powstaje tylko wtedy, gdy sam ją potwierdzisz. Pracownik firmy nie może zaznaczyć zgody za Ciebie.',
            'Podstawa prawna: Twoja zgoda na otrzymywanie informacji handlowych (art. 398 ustawy — Prawo komunikacji elektronicznej) oraz prawnie uzasadniony interes firmy w marketingu bezpośrednim (art. 6 ust. 1 lit. f RODO). Administratorem jest firma; Timelly wysyła wiadomości w jej imieniu.',
            'Zgodę wycofasz w każdej chwili: na profilu firmy w aplikacji albo klikając link w każdej wiadomości marketingowej. Wycofanie działa od razu, także dla wiadomości oczekujących na wysłanie. Odpowiedź „STOP" na SMS-a nie wycofuje zgody.',
            'Firma może wysyłać wiadomości automatycznie, gdy z historii Twoich wizyt w tej firmie wynika, że zbliża się pora kolejnej (np. z wolnymi terminami u osoby, u której zwykle bywasz). Korzystamy tylko z historii wizyt w tej jednej firmie. Możesz się temu sprzeciwić, wycofując zgodę.',
            'Powiadomienia o Twoich rezerwacjach (potwierdzenia, przypomnienia, zmiany) nie są marketingiem i nie wymagają tej zgody.',
          ]}
        />
      </Card>

      {/* ── 14. Kontakt ── */}
      <Card>
        <CardHeader icon={Headphones} title="14. Kontakt" />
        <Para>W sprawach związanych z ochroną danych osobowych skontaktuj się z Administratorem:</Para>
        <div className="mt-2 flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 dark:border-white/15 dark:bg-white/5">
          <span className="min-w-[90px] text-[13px] font-semibold text-neutral-500 dark:text-neutral-400">
            Administrator
          </span>
          <span className="flex-1 text-[15px] font-semibold text-ink dark:text-white">
            Stanisław Kryński
          </span>
        </div>
        <div className="mt-2 flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 dark:border-white/15 dark:bg-white/5">
          <span className="min-w-[90px] text-[13px] font-semibold text-neutral-500 dark:text-neutral-400">
            E‑mail
          </span>
          <EmailLink />
        </div>
      </Card>
    </PageShell>
  );
}
