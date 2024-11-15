```bash

    git clone https://github.com/c00kie86/ai.git

    npm run ai
    npm run start

```

### Zadanie rekrutacyjne
#### Junior AI Developer
Twoim zadaniem jest stworzenie prostej aplikacji w Pythonie lub JavaScript (do wyboru), która:
1. Łączy się z API OpenAI;
2. Odczytuje plik tekstowy z artykułem – tu znajdziesz [plik do pobrania](https://cdn.oxido.pl/hr/Zadanie%20dla%20JJunior%20AI%20Developera%20-%20tresc%20artykulu.txt) ;
3. Treść artykułu wraz z promptem przekazuje do OpenAI w celu obróbki (opisane poniżej);
4. Zapisuje otrzymany od OpenAI kod w pliku artykul.html.
Kod artykułu wygenerowany przez AI powinien spełniać następujące wytyczne:
• Użycie odpowiednich tagów HTML do strukturyzacji treści.
• Określenie wspólnie z AI miejsc, gdzie warto wstawić grafiki – oznaczamy je z użyciem
tagu <img> z atrybutem src="image_placeholder.jpg". Dodaj atrybut alt do
każdego obrazka z dokładnym promptem, który możemy użyć do wygenerowania grafiki.
Umieść podpisy pod grafikami używając odpowiedniego tagu HTML.
• Brak kodu CSS ani JavaScript. Zwrócony kod powinien zawierać wyłącznie zawartość do
wstawienia pomiędzy tagami <body> i </body>. Nie dołączaj znaczników <html>,
<head> ani <body>.
Wygenerowany kod HTML zapisz w pliku artykul.html – naturalnie nie będzie on
walidowalny bez nagłówków HTML czy sekcji <head>, ale to nie szkodzi.
Cały kod aplikacji, przykładowy artykuł i wygenerowany plik artykul.html wrzuć do
repozytorium. Więcej informacji w sekcji „Jak odesłać zadanie?”.

---

### query
```bash

- Keep above text structure and add semantic markup html to article such as header or section where each must contain figure, img src="image_placeholder.jpg" alt="title", figcaption (title), h1 or h2 (title), p (description). Use footer for last sentence

- użyj znaczników HTML do semantycznej strukturyzacji podanej treści artykułu dodaj obrazy z wartościami poszczególnych nagłówków użyj stopki dla ostatniego zdania

```

---

### artykul.txt
```
Sztuczna inteligencja: wpływ i wyzwania

Sztuczna inteligencja to dziedzina nauki i technologii zajmująca się tworzeniem maszyn i programów zdolnych do wykonywania zadań wymagających ludzkiej inteligencji, takich jak uczenie się, rozumienie języka naturalnego i podejmowanie decyzji. AI stała się integralną częścią naszego codziennego życia, od asystentów głosowych w smartfonach, jak Siri czy Google Assistant, po systemy rekomendacyjne na platformach streamingowych, takich jak Netflix czy Spotify. Wspiera nas w planowaniu tras, automatyzacji domowych urządzeń oraz w komunikacji. Obecnie jest o niej bardzo głośno chociażby za sprawą dużych modeli językowych, jak ChatGPT. 

Rozwój uczenia maszynowego i głębokiego uczenia umożliwił tworzenie zaawansowanych modeli, które potrafią samodzielnie rozwiązywać skomplikowane problemy. Sieci neuronowe analizują ogromne ilości danych w obszarach takich jak rozpoznawanie obrazów czy przetwarzanie języka naturalnego. Dzięki temu AI nie tylko przetwarza dane, ale także podejmuje decyzje, wcześniej zarezerwowane dla ludzi.

Wyzwania etyczne i społeczne

Kluczowym wyzwaniem jest zapewnienie etycznego i odpowiedzialnego rozwoju AI. Należy zwracać uwagę na uprzedzenia w danych treningowych, które mogą prowadzić do dyskryminacji, oraz na wpływ AI na prywatność i nierówności społeczne. Ważne jest opracowanie ram etycznych i mechanizmów nadzoru regulujących rozwój i wdrażanie AI, a także włączanie różnych grup społecznych w ten proces. Transparentność działań firm i instytucji może pomóc w budowaniu zaufania do technologii.

Badacze pracują nad rozwiązaniami umożliwiającymi harmonijne współistnienie ludzi i AI, koncentrując się na tworzeniu systemów wspierających człowieka, a nie go zastępujących. Istotne jest opracowywanie mechanizmów współpracy między człowiekiem a maszyną, co sprzyja synergii i skutecznej komunikacji.

Automatyzacja i przyszłość rynku pracy

Automatyzacja procesów dzięki AI przynosi korzyści w postaci zwiększonej efektywności i redukcji kosztów. Jednak istnieją obawy dotyczące wpływu na rynek pracy i potencjalnego zastąpienia ludzi przez maszyny. Kluczowe jest przemyślane podejście do transformacji rynku pracy, inwestycja w edukację i przekwalifikowanie pracowników, aby mogli oni znaleźć nowe role w gospodarce przyszłości.

Specjaliści powinni być gotowi na ciągłe doskonalenie swoich umiejętności, ucząc się m.in. zasad działania algorytmów AI. Przyszłość pracy będzie wymagać nie tylko umiejętności technicznych, ale także kompetencji miękkich, takich jak kreatywność i zdolność rozwiązywania problemów.

Nasza zdolność do adaptacji i innowacji zdecyduje o tym, jak AI wpłynie na przyszłość ludzkości. Wspólnie możemy kształtować tę przyszłość, wykorzystując AI dla dobra wszystkich.

*Tekst opracowany przez AI. W Oxido nie mamy aż tak cukierkowego spojrzenia na sztuczną inteligencję... ;)

Keep above text structure and add semantic markup html to article such as header or section where each must contain figure, img src="image_placeholder.jpg" alt="title", figcaption (title), h1 or h2 (title), p (description). Use footer for last sentence
```

---

### artukul.html
```html
<article>
  <header>
    <figure>
      <img src="image_placeholder.jpg" alt="Sztuczna inteligencja: wpływ i wyzwania" />
      <figcaption>Sztuczna inteligencja: wpływ i wyzwania</figcaption>
    </figure>
    <h1>Sztuczna inteligencja: wpływ i wyzwania</h1>
    <p>Sztuczna inteligencja to dziedzina nauki i technologii zajmująca się tworzeniem maszyn i programów zdolnych do wykonywania zadań wymagających ludzkiej inteligencji, takich jak uczenie się, rozumienie języka naturalnego i podejmowanie decyzji. AI stała się integralną częścią naszego codziennego życia, od asystentów głosowych w smartfonach, jak Siri czy Google Assistant, po systemy rekomendacyjne na platformach streamingowych, takich jak Netflix czy Spotify. Wspiera nas w planowaniu tras, automatyzacji domowych urządzeń oraz w komunikacji. Obecnie jest o niej bardzo głośno chociażby za sprawą dużych modeli językowych, jak ChatGPT.</p>
    <p>Rozwój uczenia maszynowego i głębokiego uczenia umożliwił tworzenie zaawansowanych modeli, które potrafią samodzielnie rozwiązywać skomplikowane problemy. Sieci neuronowe analizują ogromne ilości danych w obszarach takich jak rozpoznawanie obrazów czy przetwarzanie języka naturalnego. Dzięki temu AI nie tylko przetwarza dane, ale także podejmuje decyzje, wcześniej zarezerwowane dla ludzi.</p>
  </header>
  
  <section>
  <figure>
  <img src="image_placeholder.jpg" alt="Wyzwania etyczne i społeczne" />
  <figcaption>Wyzwania etyczne i społeczne</figcaption>
  </figure>
  <h2>Wyzwania etyczne i społeczne</h2>
  <p>Kluczowym wyzwaniem jest zapewnienie etycznego i odpowiedzialnego rozwoju AI. Należy zwracać uwagę na uprzedzenia w danych treningowych, które mogą prowadzić do dyskryminacji, oraz na wpływ AI na prywatność i nierówności społeczne. Ważne jest opracowanie ram etycznych i mechanizmów nadzoru regulujących rozwój i wdrażanie AI, a także włączanie różnych grup społecznych w ten proces. Transparentność działań firm i instytucji może pomóc w budowaniu zaufania do technologii.</p>
  <p>Badacze pracują nad rozwiązaniami umożliwiającymi harmonijne współistnienie ludzi i AI, koncentrując się na tworzeniu systemów wspierających człowieka, a nie go zastępujących. Istotne jest opracowywanie mechanizmów współpracy między człowiekiem a maszyną, co sprzyja synergii i skutecznej komunikacji.</p>
  </section>
  
  <section>
    <figure>
      <img src="image_placeholder.jpg" alt="Automatyzacja i przyszłość rynku pracy" />
      <figcaption>Automatyzacja i przyszłość rynku pracy</figcaption>
    </figure>
    <h2>Automatyzacja i przyszłość rynku pracy</h2>
    <p>Automatyzacja procesów dzięki AI przynosi korzyści w postaci zwiększonej efektywności i redukcji kosztów. Jednak istnieją obawy dotyczące wpływu na rynek pracy i potencjalnego zastąpienia ludzi przez maszyny. Kluczowe jest przemyślane podejście do transformacji rynku pracy, inwestycja w edukację i przekwalifikowanie pracowników, aby mogli oni znaleźć nowe role w gospodarce przyszłości.</p>
    <p>Specjaliści powinni być gotowi na ciągłe doskonalenie swoich umiejętności, ucząc się m.in. zasad działania algorytmów AI. Przyszłość pracy będzie wymagać nie tylko umiejętności technicznych, ale także kompetencji miękkich, takich jak kreatywność i zdolność rozwiązywania problemów.</p>
    <p>Nasza zdolność do adaptacji i innowacji zdecyduje o tym, jak AI wpłynie na przyszłość ludzkości. Wspólnie możemy kształtować tę przyszłość, wykorzystując AI dla dobra wszystkich.</p>
  </section>
  
  <footer>
    <p>*Tekst opracowany przez AI. W Oxido nie mamy aż tak cukierkowego spojrzenia na sztuczną inteligencję... ;)</p>
  </footer>
</article>
```

---

### szablon.html
```html
<!DOCTYPE html>
<html lang="pl-PL">
<head>
<meta charset="utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>artykul</title>
<meta name="description" content="artykul" />
<meta name="theme-color" content="#222222" />
<meta name="keywords" content="artykul" />
<meta name="google-site-verification" content="" />
<meta name="robots" content="nosnippet, noindex, nofollow" />
<meta property="og:url" content="http://127.0.0.1" />
<meta property="og:type" content="Progresive" />
<meta property="og:title" content="artykul" />
<meta property="og:description" content="artykul" />
<link rel="canonical" href="http://127.0.0.1" />
<link rel="icon" href="http://127.0.0.1/favicon.ico" type="image/x-icon" />
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

</body>
</html>
```

---

```bash


https://oxido.pl/praca/junior-ai-developer/zadanie-rekrutacyjne/


```