// F01. Laske summa kahdesta numerosta
function laskeSumma(a, b) {
    return a + b;
}

console.log(laskeSumma(3, 5));

// F02. Laske neliön pinta-ala sivun pituuden perusteella
function laskeNelionPintaAla(sivunPituus) {
    return sivunPituus * sivunPituus;
}

console.log(laskeNelionPintaAla(4));

// F03. Laske ympyrän pinta-ala säteen perusteella
function laskeYmpyranPintaAla(sade) {
    return Math.PI * sade * sade;
}

console.log(laskeYmpyranPintaAla(5));

// F04. Laske taulukon numeroiden keskiarvo
function laskeKeskiarvo(taulukko) {
    var summa = taulukko.reduce(function (a, b) {
        return a + b;
    }, 0);
    return summa / taulukko.length;
}

console.log(laskeKeskiarvo([1, 2, 3, 4, 5]));

// F05. Tarkista, onko luku parillinen
function onkoParillinen(luku) {
    return luku % 2 === 0;
}

console.log(onkoParillinen(6)); // true
console.log(onkoParillinen(7)); // false

// F06. Laske merkkijonon pituus
function laskeMerkkijononPituus(merkkijono) {
    return merkkijono.length;
}

console.log(laskeMerkkijononPituus("Hello, world!"));

// F07. Tarkista, onko merkkijono tyhjä
function onkoMerkkijonoTyhja(merkkijono) {
    return merkkijono.trim() === "";
}

console.log(onkoMerkkijonoTyhja("")); // true
console.log(onkoMerkkijonoTyhja("Ei ole tyhjä")); // false

// F08. Etsi taulukosta suurin luku
function laskeSuurin(taulukko) {
    return Math.max.apply(null, taulukko);
}

console.log(laskeSuurin([2, 7, 1, 9, 3]));

// F09. Etsi taulukosta pienin luku
function laskePienin(taulukko) {
    return Math.min.apply(null, taulukko);
}

console.log(laskePienin([2, 7, 1, 9, 3]));

// F10. Laske taulukon numeroiden summa
function laskeTaulukonSumma(taulukko) {
    return taulukko.reduce(function (a, b) {
        return a + b;
    }, 0);
}

console.log(laskeTaulukonSumma([1, 2, 3, 4, 5]));

// F11. Laske potenssi
function laskePotenssi(kantaluku, eksponentti) {
    return Math.pow(kantaluku, eksponentti);
}

console.log(laskePotenssi(2, 3));

// F12. Tarkista, onko luku alkuluku
function onkoAlkuluku(luku) {
    if (luku <= 1) return false;
    if (luku <= 3) return true;

    if (luku % 2 === 0 || luku % 3 === 0) return false;

    for (var i = 5; i * i <= luku; i += 6) {
        if (luku % i === 0 || luku % (i + 2) === 0) return false;
    }

    return true;
}

console.log(onkoAlkuluku(17)); // true
console.log(onkoAlkuluku(25)); // false

// F13. Käännä merkkijono
function kaannaMerkkijono(merkkijono) {
    return merkkijono.split("").reverse().join("");
}

console.log(kaannaMerkkijono("Hello, world!"));

// F14. Tarkista, onko merkkijono palindromi
function onkoPalindromi(merkkijono) {
    var puhdistettu = merkkijono.toLowerCase().replace(/[^a-z0-9]/g, "");
    var kaannetty = kaannaMerkkijono(puhdistettu);
    return puhdistettu === kaannetty;
}

console.log(onkoPalindromi("A man, a plan, a canal, Panama")); // true
console.log(onkoPalindromi("Hello, world!")); // false

// F15. Tarkista, ovatko kaksi merkkijonoa anagrammeja
function onkoAnagrammi(merkkijono1, merkkijono2) {
    var puhdistettu1 = merkkijono1.toLowerCase().replace(/[^a-z0-9]/g, "");
    var puhdistettu2 = merkkijono2.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (puhdistettu1.length !== puhdistettu2.length) return false;

    var jasen1 = puhdistettu1.split("").sort().join("");
    var jasen2 = puhdistettu2.split("").sort().join("");

    return jasen1 === jasen2;
}

console.log(onkoAnagrammi("listen", "silent")); // true
console.log(onkoAnagrammi("hello", "world")); // false

// F16. Laske taulukon numeroiden keskiarvo
function laskeTaulukonKeskiarvo(taulukko) {
    var summa = taulukko.reduce(function (a, b) {
        return a + b;
    }, 0);
    return summa / taulukko.length;
}

console.log(laskeTaulukonKeskiarvo([1, 2, 3, 4, 5]));

// F17. Tarkista, onko vuosi karkausvuosi
function onkoKarkausvuosi(vuosi) {
    return (vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0);
}

console.log(onkoKarkausvuosi(2024)); // true
console.log(onkoKarkausvuosi(2022)); // false

// F18. Tarkista, onko taulukko järjestetty nousevaan järjestykseen
function onkoTaulukkoJarjestetty(taulukko) {
    for (var i = 1; i < taulukko.length; i++) {
        if (taulukko[i - 1] > taulukko[i]) return false;
    }
    return true;
}

console.log(onkoTaulukkoJarjestetty([1, 2, 3, 4, 5])); // true
console.log(onkoTaulukkoJarjestetty([5, 4, 3, 2, 1])); // false

// F19. Muuta ensimmäinen kirjain isoksi
function muutaEkaKirjainIsoksi(merkkijono) {
    return merkkijono.charAt(0).toUpperCase() + merkkijono.slice(1);
}

console.log(muutaEkaKirjainIsoksi("hello, world!"));

// F20. Laske Fibonacci-sarjan jäsen
function laskeFibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    var a = 0;
    var b = 1;
    for (var i = 2; i <= n; i++) {
        var temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(laskeFibonacci(7));
