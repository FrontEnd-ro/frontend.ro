# Aplicatii web pentru incepatori
######  Autor : Oancea Ionut Eugen

![HACKED.io: Hands on FirefoxOS](https://arcturus.github.io/firefoxos-hackedio/img/html5_css_javascript.png)

Orice aplicatie web acesibila intr-un browser foloseste o combinatie de 3 limbaje pentru a ajunge la forma sa finala (HTML + CSS + JavaScript). 
Pentru a continua ne este indeajuns sa intelegem pe scurt rolul fiecarui limbaj intr-o aplicatie
Nu ne vom arunca prea mult inca in detalii la acest punct.

- *Am adaugat un link catre wikipedia cu niste explicatii, pentru cei care doresc insa acest lucru.*

#### - HTML ( Hyper text markup language )
[HTML Wikipedia]([https://ro.wikipedia.org/wiki/HyperText_Markup_Language](https://ro.wikipedia.org/wiki/HyperText_Markup_Language))
Este folosit pentru a crea pagini web simple ce pot fi afișate într-un browser.
Scopul HTML este  in general prezentarea informațiilor – paragrafe fonturi, tabele ș.a.m.d si este limitat la acest lucru de unul singur.

#### - CSS ( Cascading Style Sheets )
[CSS Wikipedia]([https://ro.wikipedia.org/wiki/Cascading_Style_Sheets](https://ro.wikipedia.org/wiki/Cascading_Style_Sheets))
 CSS formateaza HTML-ul scris, si cu ajutorul unui set de prorietati se pot pozitiona elemente in pagina, se pot face animatii, ș.a.m.d

#### - JS (JavaScript)
 ##### A nu se confunda cu Java ("Java is to JavaScript what car is to carpet")

[JS Wikipedia]([https://ro.wikipedia.org/wiki/JavaScript](https://ro.wikipedia.org/wiki/JavaScript))
 Este un limbaj de programare ce poate fi folosit pentru realizarea logicii unei pagini web ( formulare autentificare, ce se intampla cand apesi un buton, ș.a.m.d) precum si diverse aplicatii, jocuri, animatii  ș.a.m.d.

Aceste 3 lucruri combinate pot avea ca rezultat o [aplicatie web]([https://ro.wikipedia.org/wiki/Aplica%C8%9Bie_web](https://ro.wikipedia.org/wiki/Aplica%C8%9Bie_web))

## HTML

O aplicatie web nu poate functiona fara macar o boaba de HTML asa ca vom incepe cu acest lucru.

- Sa presupunem ca dorim sa creeam o pagina web care sa contina poezii
Avem asignata cate o poezie pentru fiecare pagina, si deasemenea dorim sa afisam un tabel cu date despre fiecare poezie pe pagina ei
Deasemenea vom dori ca aceasta pagina web sa contina o sectiune ce va permite navigarea intre poezii,

HTML este un limbaj de interpretare.
Acest lucru ne spune ca HTML e un format de text cu anumite componente ce sunt interpretate de browser pentru a fi afisate in mod corespunzator.

De exemplu ne putem gandi aici la relatia dintre un cititor si un poet.
Poetul scrie o poezie de sucess cu gandul la dragoste, si fericire, dintr-o experienta trecuta.
Vine citirorul, se apuca de citit si datorita experientelor sale diferite acesta interpreteaza poezia ca fiind una trista, si o povesteste mai departe ca atare.
In cazul de fata cititorul nostru este browserul, iar scriitorul fiind cel care creaza o pagina web

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
De aceasta data la deschiderea fisierului in browser vom vedea afisat pe ecram textul `Hello world !`.
Felicitari  ! Tocmai ati creat prima dumneavoastra pagina web.

