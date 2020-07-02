# Aplicatii web pentru incepatori
######  Autor : Oancea Ionut Eugen

![HACKED.io: Hands on FirefoxOS](https://arcturus.github.io/firefoxos-hackedio/img/html5_css_javascript.png)

O aplicatie web foloseste o combinatie de cele 3 limbaje pentru a ajunge la forma sa finala (HTML + CSS + JavaScript). 
Pentru a continua e indeajuns sa intelegem pe scurt rolul fiecarui limbaj intr-o aplicatie

- *Am adaugat un link catre MDN cu niste explicatii, pentru cei care doresc mai multe detalii.*

#### - HTML ( Hyper text markup language )
[HTML MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
Este folosit pentru a crea pagini web simple ce pot fi afișate într-un browser.
Scopul HTML este  in general prezentarea informațiilor – paragrafe fonturi, tabele ș.a.m.d si este limitat la acest lucru de unul singur.

#### - CSS ( Cascading Style Sheets )
[CSS MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
CSS este folosit pentru stilizarea paginilor Web. Este un limbaj extrem de puternic, cu care putem crea niste pagini cu adevarat WOW

#### - JS (JavaScript)
 ##### A nu se confunda cu Java ("Java is to JavaScript what car is to carpet")

[JS MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 Este un limbaj de programare ce poate fi folosit pentru realizarea logicii unei pagini web ( formulare autentificare, ce se intampla cand apesi un buton, ș.a.m.d) precum si diverse aplicatii, jocuri, animatii  ș.a.m.d.

Aceste 3 lucruri combinate pot avea ca rezultat o [aplicatie web]([https://ro.wikipedia.org/wiki/Aplica%C8%9Bie_web](https://ro.wikipedia.org/wiki/Aplica%C8%9Bie_web))

## Editor de cod

Pe parcursul tutorialului vei avea nevoie de un editor de cod.
El iti permite sa creezi o structura a fisierelor intrun proiect mai usor si sa editezi fisiere text, pe langa multe alte chestii pe care le poate face cu ajutorul unor pluginuri. (traducere text, encodare, decodare text, formatare cod, etc)

In tutorialul acesta folosim [Visual studio Code](https://code.visualstudio.com/)

## HTML

O aplicatie web nu poate functiona fara HTML asa ca vom incepe cu acest lucru.

- Sa presupunem ca dorim sa creeam o pagina web care sa contina poezii
Avem asignata cate o poezie pentru fiecare pagina, si deasemenea dorim sa afisam un tabel cu date despre fiecare poezie pe pagina ei
Deasemenea vom dori ca aceasta pagina web sa contina o sectiune ce va permite navigarea intre poezii,

HTML este un limbaj de interpretare.
Acest lucru ne spune ca HTML e un format de text cu anumite componente ce sunt interpretate de browser pentru a fi afisate in mod corespunzator.

Interpretorul practic traduce codul pe care il scriem noi, in elemente Html.
De exemplu `<a href='google.ro'>google</a>` va fi interpretat de browser astfel [google](google.ro)
Cu alte cuvinte un text albastru pe care daca apesi te redirectioneaza la google.ro

Un fisier HTML contine comunica cu browserul prin taguri *(mai corect spus browserul ia aceste taguri si le interpreteaza ca atare)* 

### Taguri HTML
Un element HTML este format din un `tag de inceput` niste text si un `tag de final`
Ele au rolul de a specifica browserului modul in care dorim ca textul pe care il dam sa fie interpretat
De exeplu `<p> Sunt un paragraf ! </p>` va face browserul sa interpreteze acest text ca un paragraf

- Un tag HTML este un text de forma `<` `final?` `numetag` `optiuni` `>`
- Caracterele `<>` definesc inceputul si finalul unui tag
- `final?` este defapt caracterul `/` care pus inaintea denumirii unui tag specifica faptul ca tagul dat este un tag de final
- `numetag` poate fi orice text fara spatii folosind doar caracterele de la `a-z` `A-Z` `0-9` 
- **Pentru a inchide un tag `numetag` definit la tagul de inceput trebuie sa fie acelasi ca `numetag` de la tagul de final**
(`-` *specifica toate caracterele dintre din interval. Ex `a-z` specifica toate caracterele  litere mici de la `a` la `z`*)
- `optiuni` un set de proprietati ce pot fi asignate unui tag

Cu alte cuvinte un tag HTML este orice text de forma `<numetag>`, iar un element HTML este orice text de forma `<numetag> un text random </numetag>`

#### Sa trecem la practica

Pentru inceput putem crea un folder pe desktop in care vom avea pagina noastra web.
In interiorul folderului cream un nou fisier, cu ce denumire dorim, dar cu extensia `.html` (ex `test.html`)

Putem observa cum calculatorul ne indica deja faptul ca fisierul creat poate fi deschis in browser
Daca deschidem acest fisier vom vedea o pagina goala, pentru ca nu am adaugat nimic inca.

Vom deschide acest fisier in notepad 
##### *( `click dreapta` > `open with`  > `notepad`. Daca intampinati probleme cu acest lucru puteti sari la sectiunea [editor de cod]() unde va voi ajuta cu acest lucru )*

Vom oferi browserului niste text pe care il poate interpreta
Un fisier HTML incepe cu tagul `<html>` si se termina cu `</html>` care delimiteaza inceputul si sfarsitul unui fisier html.
Un fisier HTML mai contine inca un tag in interiorul acestuia si anume `<body></body>` in care vom pune alte taguri, cu text.
In interiorul acestui tag vom pune de exemplu un paragraf (`<p>paragraf</p>`) cu textul `Hello world !`

     <html>
    	<body>
    		<p>Hello world !</p>
    	</body>
    </html>
Acum la deschiderea fisierului in browser vom vedea  `Hello world !`.
Felicitari  ! 
Tocmai ai creat prima ta pagina web :D 

Acum insa putem vrea ca o portiune a acestui text sa fie **`boldat`**. Pentru asta vom folosi tagul `<b>text</b>`sau daca vrem sa fie *`italic`* vom folosi tagul `<i>text</i>`
Deci 

     <html>
    	<body>
    		<p><i>Hello</i> <b>world</b> !</p>
    	</body>
    </html>

Acestea sunt taguri de formatare si aveti aici o lista cu acestea cu care puteti experimenta

-   `<b>`  - Text Bold
-   `<strong>`  - Important text
-   `<i>`  - Text italic
-   `<em>`  - Text accentuat
-   `<mark>`  - Text marcat
-   `<small>`  - Text mai mic
-   `<del>`  - Text sters
-   `<ins>`  - Text inserat
-   `<sub>`  - Subscript text
-   `<sup>`  - Superscript text

O lista mai completa cu toate tagurile HTML si explicatii pentru acestea le gasiti [aici]([http://www.competentedigitale.ro/html/taguri.html](http://www.competentedigitale.ro/html/taguri.html)).

### Rezolvam problema 

*- Sa presupunem ca dorim sa creeam o pagina web care sa contina poezii
Avem asignata cate o poezie pentru fiecare pagina, si deasemenea dorim sa afisam un tabel cu date despre fiecare poezie pe pagina ei
Deasemenea vom dori ca aceasta pagina web sa contina o sectiune ce va permite navigarea intre poezii,*

Plecam de la fisierul de baza

     <html>
    	<body>
    		<p><i>Hello</i> <b>world</b> !</p>
    	</body>
    </html>

Am ales ca poezie pentru prima pagina [Doina]([https://ro.wikisource.org/wiki/Doina_(variant%C4%83_Alecsandri)) de Vasile Alecsandri
Incepem prin a pune fiecare rand din poezie intrun `paragraf (<p></p>)`

    <p>Doina, doiniţă!</p>
    <p>De-aş avea o puiculiţă,</p>
    <p>Cu flori galbene-n cosiţă,</p>
    <p>Cu flori roşii pe guriţă!</p>
    
   IIn momentul asta am terminat de scris o strofa si vrem sa lasam un rand liber pentru o formatare corecta.
   Pentru asta putem folosi tagul `<br> </br>` ce poate fi scris si de forma `<br />` 
   Acesta specifica browserului sa sa lase un rand liber pe pozitia sa. (`a break`)

    <p>Doina, doiniţă!</p>
    <p>De-aş avea o puiculiţă,</p>
    <p>Cu flori galbene-n cosiţă,</p>
    <p>Cu flori roşii pe guriţă!</p>
    <br  />
    <p>De-aş avea o mândrulică</p>
    <p>Cu-ochişori de porumbică</p>
    <p>Şi cu suflet de voinică!</p>
    <br  />
    <p>De-aş avea o bălăioară</p>
    <p>Naltă, veselă, uşoară,</p>
    <p>Ca un pui de căprioară!</p>

