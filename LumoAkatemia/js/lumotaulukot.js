<<<<<<< HEAD
﻿// T01. Luo taulukko nimeltä 'kauppalista' ja lisää siihen joitakin ostettavia tuotteita. Tulosta koko kauppalista konsoliin.
var kauppalista = ['maito', 'leipä', 'omenat'];
console.log(kauppalista);

// T02. Luo taulukko, joka sisältää viisi eri nimeä ja tulosta taulukko konsoliin.
var nimet = ['Matti', 'Anna', 'Eeva', 'Mikko', 'Liisa'];
console.log(nimet);

// T03. Laske taulukon pituus, kun taulukko = [1, 2, 3, 4, 5]. Tulosta pituus konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var pituus = taulukko.length;
console.log(pituus);

// T04. Lisää uusi nimi taulukkoon (["Matti", "Anna", "Eeva"]) ja tulosta taulukko.
var lisattavaNimi = 'Jussi';
var nimet = ['Matti', 'Anna', 'Eeva'];
nimet.push(lisattavaNimi);
console.log(nimet);

// T05. Yhdistä seuraavat taulukot ja tulosta yhdistetty taulukko konsoliin.
var taul1 = [1, 2, 3];
var taul2 = [4, 5, 6];
var yhdistettyTaulukko = taul1.concat(taul2);
console.log(yhdistettyTaulukko);

// T06. Luo uusi taulukko, joka sisältää vain parilliset numerot alkuperäisestä taulukosta ja tulosta uusi taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var parillisetNumerot = alkuperainenTaulukko.filter(function (numero) {
    return numero % 2 === 0;
});
console.log(parillisetNumerot);

// T07. Lajittele taulukko ([5, 2, 9, 1, 5, 8, 3]) nousevaan järjestykseen ja tulosta lajiteltu taulukko konsoliin.
var lajiteltuTaulukko = [5, 2, 9, 1, 5, 8, 3].sort(function (a, b) {
    return a - b;
});
console.log(lajiteltuTaulukko);

// T08. Käännä taulukko ([1, 2, 3, 4, 5]) ympäri niin, että viimeisestä alkiosta tulee ensimmäinen ja päinvastoin ja tulosta käännetty taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 3, 4, 5];
var kaannettyTaulukko = alkuperainenTaulukko.reverse();
console.log(kaannettyTaulukko);

// T09. Muuta taulukko (["Matti", "Anna", "Eeva"]) merkkijonoksi, jossa alkiot ovat pilkuilla eroteltuja ja tulosta merkkijono konsoliin.
var taulukko = ["Matti", "Anna", "Eeva"];
var merkkijono = taulukko.join(', ');
console.log(merkkijono);

// T10. Poista taulukosta ([1, 2, 3, 4, 5]) kolmas alkio ja tulosta taulukko konsoliin.
var taulukko = [1, 2, 3, 4, 5];
taulukko.splice(2, 1); // Poistetaan kolmas alkio (indeksi 2)
console.log(taulukko);

// T11. Etsi taulukosta tietty alkio ja palauta sen indeksi konsoliin. Palauta myös viesti, jos alkiota ei löytynyt.
var taulukko = [1, 2, 3, 4, 5];
var etsittavaAlkio = 3;
var indeksi = taulukko.indexOf(etsittavaAlkio);
if (indeksi !== -1) {
    console.log('Alkio löytyi indeksistä ' + indeksi);
} else {
    console.log('Alkiota ei löytynyt');
}

// T12. Kopioi taulukosta ([1, 2, 3, 4, 5]) kaksi viimeisintä uuteen taulukkoon ja tulosta uusi taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 3, 4, 5];
var uusiTaulukko = alkuperainenTaulukko.slice(-2); // Otetaan kaksi viimeistä alkiota
console.log(uusiTaulukko);

// T13. Muuta taulukon ([1, 2, 3, 4, 5]) keskimmäinen jäsen 6:ksi ja tulosta taulukko konsoliin.
var taulukko = [1, 2, 3, 4, 5];
taulukko[2] = 6; // Keskimmainen alkio (indeksi 2) muutetaan
console.log(taulukko);

// T14. Laske taulukon ([1, 2, 3, 4, 5]) arvot yhteen ja tulosta summa konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var summa = taulukko.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(summa);

// T15. Laske taulukon ([1, 2, 3, 4, 5]) arvojen keskiarvo ja tulosta se konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var keskiarvo = taulukko.reduce(function (a, b) {
    return a + b;
}, 0) / taulukko.length;
console.log(keskiarvo);

// T16. Luo uusi taulukko, jossa on alkuperäisen taulukon ([1, 2, 3]) arvot monistettu 3 kertaa ja tulosta uusi taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 3];
var monistettuTaulukko = alkuperainenTaulukko.flatMap(function (arvo) {
    return [arvo, arvo, arvo];
});
console.log(monistettuTaulukko);

// T17. Luo uusi taulukko, joka sisältää uniikit arvot alkuperäisestä taulukosta ([1, 2, 2, 3, 4, 4, 5]) ja tulosta uusi taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 2, 3, 4, 4, 5];
var uniikitTaulukko = Array.from(new Set(alkuperainenTaulukko));
console.log(uniikitTaulukko);

// T18. Vaihda taulukon ([1, 2, 3, 4, 5]) ensimmäisen ja viimeisen alkion paikkoja ja tulosta taulukko konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var ensimmainen = taulukko[0];
var viimeinen = taulukko[taulukko.length - 1];
taulukko[0] = viimeinen;
taulukko[taulukko.length - 1] = ensimmainen;
console.log(taulukko);

// T19. Muunna taulukon (["Matti", "Anna", "Eeva"]) merkkijonojen kaikki kirjaimet isoiksi ja tulosta taulukko konsoliin.
var taulukko = ["Matti", "Anna", "Eeva"];
var isoillaKirjaimilla = taulukko.map(function (nimi) {
    return nimi.toUpperCase();
});
console.log(isoillaKirjaimilla);

// T20. Poista taulukosta ([1, 2, 3, 4, 5]) kaikki neljää pienemmät numerot ja tulosta taulukko konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var suuremmatNumerot = taulukko.filter(function (numero) {
    return numero > 4;
});
console.log(suuremmatNumerot);
=======
﻿// T01. Luo taulukko nimeltä 'kauppalista' ja lisää siihen joitakin ostettavia tuotteita. Tulosta koko kauppalista konsoliin.
var kauppalista = ['maito', 'leipä', 'omenat'];
console.log(kauppalista);

// T02. Luo taulukko, joka sisältää viisi eri nimeä ja tulosta taulukko konsoliin.
var nimet = ['Matti', 'Anna', 'Eeva', 'Mikko', 'Liisa'];
console.log(nimet);

// T03. Laske taulukon pituus, kun taulukko = [1, 2, 3, 4, 5]. Tulosta pituus konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var pituus = taulukko.length;
console.log(pituus);

// T04. Lisää uusi nimi taulukkoon (["Matti", "Anna", "Eeva"]) ja tulosta taulukko.
var lisattavaNimi = 'Jussi';
var nimet = ['Matti', 'Anna', 'Eeva'];
nimet.push(lisattavaNimi);
console.log(nimet);

// T05. Yhdistä seuraavat taulukot ja tulosta yhdistetty taulukko konsoliin.
var taul1 = [1, 2, 3];
var taul2 = [4, 5, 6];
var yhdistettyTaulukko = taul1.concat(taul2);
console.log(yhdistettyTaulukko);

// T06. Luo uusi taulukko, joka sisältää vain parilliset numerot alkuperäisestä taulukosta ja tulosta uusi taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var parillisetNumerot = alkuperainenTaulukko.filter(function (numero) {
    return numero % 2 === 0;
});
console.log(parillisetNumerot);

// T07. Lajittele taulukko ([5, 2, 9, 1, 5, 8, 3]) nousevaan järjestykseen ja tulosta lajiteltu taulukko konsoliin.
var lajiteltuTaulukko = [5, 2, 9, 1, 5, 8, 3].sort(function (a, b) {
    return a - b;
});
console.log(lajiteltuTaulukko);

// T08. Käännä taulukko ([1, 2, 3, 4, 5]) ympäri niin, että viimeisestä alkiosta tulee ensimmäinen ja päinvastoin ja tulosta käännetty taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 3, 4, 5];
var kaannettyTaulukko = alkuperainenTaulukko.reverse();
console.log(kaannettyTaulukko);

// T09. Muuta taulukko (["Matti", "Anna", "Eeva"]) merkkijonoksi, jossa alkiot ovat pilkuilla eroteltuja ja tulosta merkkijono konsoliin.
var taulukko = ["Matti", "Anna", "Eeva"];
var merkkijono = taulukko.join(', ');
console.log(merkkijono);

// T10. Poista taulukosta ([1, 2, 3, 4, 5]) kolmas alkio ja tulosta taulukko konsoliin.
var taulukko = [1, 2, 3, 4, 5];
taulukko.splice(2, 1); // Poistetaan kolmas alkio (indeksi 2)
console.log(taulukko);

// T11. Etsi taulukosta tietty alkio ja palauta sen indeksi konsoliin. Palauta myös viesti, jos alkiota ei löytynyt.
var taulukko = [1, 2, 3, 4, 5];
var etsittavaAlkio = 3;
var indeksi = taulukko.indexOf(etsittavaAlkio);
if (indeksi !== -1) {
    console.log('Alkio löytyi indeksistä ' + indeksi);
} else {
    console.log('Alkiota ei löytynyt');
}

// T12. Kopioi taulukosta ([1, 2, 3, 4, 5]) kaksi viimeisintä uuteen taulukkoon ja tulosta uusi taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 3, 4, 5];
var uusiTaulukko = alkuperainenTaulukko.slice(-2); // Otetaan kaksi viimeistä alkiota
console.log(uusiTaulukko);

// T13. Muuta taulukon ([1, 2, 3, 4, 5]) keskimmäinen jäsen 6:ksi ja tulosta taulukko konsoliin.
var taulukko = [1, 2, 3, 4, 5];
taulukko[2] = 6; // Keskimmainen alkio (indeksi 2) muutetaan
console.log(taulukko);

// T14. Laske taulukon ([1, 2, 3, 4, 5]) arvot yhteen ja tulosta summa konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var summa = taulukko.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(summa);

// T15. Laske taulukon ([1, 2, 3, 4, 5]) arvojen keskiarvo ja tulosta se konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var keskiarvo = taulukko.reduce(function (a, b) {
    return a + b;
}, 0) / taulukko.length;
console.log(keskiarvo);

// T16. Luo uusi taulukko, jossa on alkuperäisen taulukon ([1, 2, 3]) arvot monistettu 3 kertaa ja tulosta uusi taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 3];
var monistettuTaulukko = alkuperainenTaulukko.flatMap(function (arvo) {
    return [arvo, arvo, arvo];
});
console.log(monistettuTaulukko);

// T17. Luo uusi taulukko, joka sisältää uniikit arvot alkuperäisestä taulukosta ([1, 2, 2, 3, 4, 4, 5]) ja tulosta uusi taulukko konsoliin.
var alkuperainenTaulukko = [1, 2, 2, 3, 4, 4, 5];
var uniikitTaulukko = Array.from(new Set(alkuperainenTaulukko));
console.log(uniikitTaulukko);

// T18. Vaihda taulukon ([1, 2, 3, 4, 5]) ensimmäisen ja viimeisen alkion paikkoja ja tulosta taulukko konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var ensimmainen = taulukko[0];
var viimeinen = taulukko[taulukko.length - 1];
taulukko[0] = viimeinen;
taulukko[taulukko.length - 1] = ensimmainen;
console.log(taulukko);

// T19. Muunna taulukon (["Matti", "Anna", "Eeva"]) merkkijonojen kaikki kirjaimet isoiksi ja tulosta taulukko konsoliin.
var taulukko = ["Matti", "Anna", "Eeva"];
var isoillaKirjaimilla = taulukko.map(function (nimi) {
    return nimi.toUpperCase();
});
console.log(isoillaKirjaimilla);

// T20. Poista taulukosta ([1, 2, 3, 4, 5]) kaikki neljää pienemmät numerot ja tulosta taulukko konsoliin.
var taulukko = [1, 2, 3, 4, 5];
var suuremmatNumerot = taulukko.filter(function (numero) {
    return numero > 4;
});
console.log(suuremmatNumerot);
>>>>>>> 127c811b2435b8a055d1418b87b0ebca3c51c8cb
