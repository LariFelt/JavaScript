<<<<<<< HEAD
﻿// SL01. Tarkista, onko merkkijono "kissa", annetussa tekstissä
console.log(/kissa/.test("Minulla on tili pankissa"));

// SL02. Tarkista, onko merkkijono "kissa" (kirjainkoolla ei ole merkitystä), annetussa tekstissä
console.log(/kissa/i.test("Poliiseja kutsutaan KISSALANpojiksi"));

// SL03. Tarkista, onko merkkijono "kissa" (kirjainkoolla ei ole merkitystä), annetussa tekstissä riippumatta siitä, missä se esiintyy
console.log(/kissa/ig.test("Opiskelen HAMKissa ja omistan kissan."));

// SL04. Tarkista, onko annettu merkkijono kokonaisluku
console.log(/^\d+$/.test("12345"));

// SL05. Etsi kaikki puhelinnumerot annetusta tekstistä
var teksti = "Ota yhteyttä (123) 456-7890 tai (987) 654-3210.";
var puhelinnumerot = teksti.match(/\(\d{3}\) \d{3}-\d{4}/g);
console.log(puhelinnumerot);

// SL06. Etsi kaikki sähköpostiosoitteet annetusta tekstistä
var teksti2 = "Lähetä sähköpostia osoitteeseen esimerkki@example.com tai toiseen osoitteeseen: testi@testi.fi.";
var sahkopostiosoitteet = teksti2.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g);
console.log(sahkopostiosoitteet);

// SL07. Etsi kaikki URL-osoitteet annetusta tekstistä
var teksti3 = "Käy sivustolla https://www.esimerkki.com/ tai lue lisää osoitteessa: www.testi.fi";
var urlOsoitteet = teksti3.match(/(https?:\/\/[^\s]+)/g);
console.log(urlOsoitteet);

// SL08. Tarkista, onko annettu merkkijono päivämäärä muodossa "dd.mm.yyyy"
console.log(/^\d{2}.\d{2}.\d{4}$/.test("15.09.2023"));

// SL09. Etsi kaikki HTML-tunnisteet annetusta HTML-tekstistä
var htmlTeksti = "<p>Tämä on <b>HTML</b>-teksti</p>";
var htmlTunnisteet = htmlTeksti.match(/<[^>]+>/g);
console.log(htmlTunnisteet);

// SL10. Tarkista, onko annettu merkkijono Suomen postinumeron muodossa (viisi numeroa)
console.log(/^\d{5}$/.test("04200"));

// SL11. Etsi kaikki "esimerkki" ja "testi" alimerkkijonot annetusta tekstistä
var teksti4 = "Tämä on esimerkki. Toinen esimerkki. Kolmas testi.";
var alimerkkijonot = teksti4.match(/(esimerkki|testi)/g);
console.log(alimerkkijonot);

// SL12. Tarkista, onko annettu merkkijono yhdistelmä kirjaimia ja numeroita
console.log(/^[a-zA-Z0-9]+$/.test("Abc123"));

// SL13. Etsi kaikki XML-tunnisteet annetusta XML-tekstistä
var xmlTeksti = "<elementti1>sisältö1</elementti1><elementti2>sisältö2</elementti2>";
var xmlTunnisteet = xmlTeksti.match(/<[^>]+>/g);
console.log(xmlTunnisteet);

// SL14. Tarkista, onko annettu merkkijono kellonaika muodossa "hh:mm:ss"
console.log(/^\d{2}:\d{2}:\d{2}$/.test("14:30:00"));

// SL15. Etsi kaikki rivinvaihdot postitusosoitteessa, joka voi sisältää useita rivejä
var postitusosoite = "Katuosoite\nPostinumero\nKaupunki";
var rivinvaihdot = postitusosoite.match(/(.+)/g);
console.log(rivinvaihdot);

// SL16. Etsi kaikki HTML-kuvatunnisteet (img) ja palauta niiden src-attribuutit
var htmlKuvat = '<img src="kuva1.jpg" alt="Kuva 1"><img src="kuva2.jpg" alt="Kuva 2">';
var kuvienSrc = htmlKuvat.match(/<img[^>]*src="([^"]*)"/g);
console.log(kuvienSrc);

// SL17. Etsi kaikki aikavyöhykkeet
var aikavyohykkeet = "Aikavyöhykkeet: GMT+02:00, UTC-08:00 ja EST-05:00.";
var aikavyohykeMatch = aikavyohykkeet.match(/([A-Z]{3}[+-]\d{2}:\d{2})/g);
console.log(aikavyohykeMatch);

// SL18. Tarkista, onko annettu merkkijono ISBN-10-koodin muodossa
console.log(/^\d{9}[\dX]$/.test("0451526538"));

// SL19. Etsi kaikki erityismerkit
var teksti5 = "Tämä on erityismerkkejä: !@#$%^&*()";
var erityismerkit = teksti5.match(/[!@#$%^&*()]/g);
console.log(erityismerkit);

// SL20. Tarkista, onko annettu merkkijono IPv4-osoitteen muodossa
console.log(/^(\d{1,3}\.){3}\d{1,3}$/.test("192.168.0.1"));
=======
﻿// SL01. Tarkista, onko merkkijono "kissa", annetussa tekstissä
console.log(/kissa/.test("Minulla on tili pankissa"));

// SL02. Tarkista, onko merkkijono "kissa" (kirjainkoolla ei ole merkitystä), annetussa tekstissä
console.log(/kissa/i.test("Poliiseja kutsutaan KISSALANpojiksi"));

// SL03. Tarkista, onko merkkijono "kissa" (kirjainkoolla ei ole merkitystä), annetussa tekstissä riippumatta siitä, missä se esiintyy
console.log(/kissa/ig.test("Opiskelen HAMKissa ja omistan kissan."));

// SL04. Tarkista, onko annettu merkkijono kokonaisluku
console.log(/^\d+$/.test("12345"));

// SL05. Etsi kaikki puhelinnumerot annetusta tekstistä
var teksti = "Ota yhteyttä (123) 456-7890 tai (987) 654-3210.";
var puhelinnumerot = teksti.match(/\(\d{3}\) \d{3}-\d{4}/g);
console.log(puhelinnumerot);

// SL06. Etsi kaikki sähköpostiosoitteet annetusta tekstistä
var teksti2 = "Lähetä sähköpostia osoitteeseen esimerkki@example.com tai toiseen osoitteeseen: testi@testi.fi.";
var sahkopostiosoitteet = teksti2.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g);
console.log(sahkopostiosoitteet);

// SL07. Etsi kaikki URL-osoitteet annetusta tekstistä
var teksti3 = "Käy sivustolla https://www.esimerkki.com/ tai lue lisää osoitteessa: www.testi.fi";
var urlOsoitteet = teksti3.match(/(https?:\/\/[^\s]+)/g);
console.log(urlOsoitteet);

// SL08. Tarkista, onko annettu merkkijono päivämäärä muodossa "dd.mm.yyyy"
console.log(/^\d{2}.\d{2}.\d{4}$/.test("15.09.2023"));

// SL09. Etsi kaikki HTML-tunnisteet annetusta HTML-tekstistä
var htmlTeksti = "<p>Tämä on <b>HTML</b>-teksti</p>";
var htmlTunnisteet = htmlTeksti.match(/<[^>]+>/g);
console.log(htmlTunnisteet);

// SL10. Tarkista, onko annettu merkkijono Suomen postinumeron muodossa (viisi numeroa)
console.log(/^\d{5}$/.test("04200"));

// SL11. Etsi kaikki "esimerkki" ja "testi" alimerkkijonot annetusta tekstistä
var teksti4 = "Tämä on esimerkki. Toinen esimerkki. Kolmas testi.";
var alimerkkijonot = teksti4.match(/(esimerkki|testi)/g);
console.log(alimerkkijonot);

// SL12. Tarkista, onko annettu merkkijono yhdistelmä kirjaimia ja numeroita
console.log(/^[a-zA-Z0-9]+$/.test("Abc123"));

// SL13. Etsi kaikki XML-tunnisteet annetusta XML-tekstistä
var xmlTeksti = "<elementti1>sisältö1</elementti1><elementti2>sisältö2</elementti2>";
var xmlTunnisteet = xmlTeksti.match(/<[^>]+>/g);
console.log(xmlTunnisteet);

// SL14. Tarkista, onko annettu merkkijono kellonaika muodossa "hh:mm:ss"
console.log(/^\d{2}:\d{2}:\d{2}$/.test("14:30:00"));

// SL15. Etsi kaikki rivinvaihdot postitusosoitteessa, joka voi sisältää useita rivejä
var postitusosoite = "Katuosoite\nPostinumero\nKaupunki";
var rivinvaihdot = postitusosoite.match(/(.+)/g);
console.log(rivinvaihdot);

// SL16. Etsi kaikki HTML-kuvatunnisteet (img) ja palauta niiden src-attribuutit
var htmlKuvat = '<img src="kuva1.jpg" alt="Kuva 1"><img src="kuva2.jpg" alt="Kuva 2">';
var kuvienSrc = htmlKuvat.match(/<img[^>]*src="([^"]*)"/g);
console.log(kuvienSrc);

// SL17. Etsi kaikki aikavyöhykkeet
var aikavyohykkeet = "Aikavyöhykkeet: GMT+02:00, UTC-08:00 ja EST-05:00.";
var aikavyohykeMatch = aikavyohykkeet.match(/([A-Z]{3}[+-]\d{2}:\d{2})/g);
console.log(aikavyohykeMatch);

// SL18. Tarkista, onko annettu merkkijono ISBN-10-koodin muodossa
console.log(/^\d{9}[\dX]$/.test("0451526538"));

// SL19. Etsi kaikki erityismerkit
var teksti5 = "Tämä on erityismerkkejä: !@#$%^&*()";
var erityismerkit = teksti5.match(/[!@#$%^&*()]/g);
console.log(erityismerkit);

// SL20. Tarkista, onko annettu merkkijono IPv4-osoitteen muodossa
console.log(/^(\d{1,3}\.){3}\d{1,3}$/.test("192.168.0.1"));
>>>>>>> 127c811b2435b8a055d1418b87b0ebca3c51c8cb
