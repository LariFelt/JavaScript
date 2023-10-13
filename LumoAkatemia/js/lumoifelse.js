// IE01. Suuremman luvun etsiminen kahdesta luvusta
function suurempiLuku(luku1, luku2) {
    if (luku1 > luku2) {
        return luku1;
    } else {
        return luku2;
    }
}

// IE02. Suurimman luvun etsiminen kolmesta luvusta
function suurinLuku(luku1, luku2, luku3) {
    if (luku1 >= luku2 && luku1 >= luku3) {
        return luku1;
    } else if (luku2 >= luku1 && luku2 >= luku3) {
        return luku2;
    } else {
        return luku3;
    }
}

// IE03. Luvun tarkistaminen negatiiviseksi, nollaksi tai positiiviseksi
function tarkistaLuku(luku) {
    if (luku < 0) {
        return "Negatiivinen";
    } else if (luku === 0) {
        return "Nolla";
    } else {
        return "Positiivinen";
    }
}

// IE04. Luvun tarkistaminen jaollisuus 5:llä tai 11:stä
function tarkistaJaollisuus(luku) {
    if (luku % 5 === 0 || luku % 11 === 0) {
        return "Jaollinen";
    } else {
        return "Ei jaollinen";
    }
}

// IE05. Tarkista, onko annettu luku karkausvuosi vai ei
function tarkistaKarkausvuosi(vuosi) {
    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
        return "Karkausvuosi";
    } else {
        return "Ei karkausvuosi";
    }
}

// IE06. Tarkista, onko annettu luku parillinen vai pariton
function tarkistaParillisuus(luku) {
    if (luku % 2 === 0) {
        return "Parillinen";
    } else {
        return "Pariton";
    }
}

// IE07. Tarkista, onko annettu merkki kirjain vai ei
function tarkistaKirjain(merkki) {
    if ((merkki >= 'a' && merkki <= 'z') || (merkki >= 'A' && merkki <= 'Z')) {
        return "Kirjain";
    } else {
        return "Ei kirjain";
    }
}

// IE08. Tarkista, onko annettu kirjain vokaali vai konsonantti
function tarkistaVokaali(kirjain) {
    if (
        kirjain === 'a' ||
        kirjain === 'e' ||
        kirjain === 'i' ||
        kirjain === 'o' ||
        kirjain === 'u' ||
        kirjain === 'A' ||
        kirjain === 'E' ||
        kirjain === 'I' ||
        kirjain === 'O' ||
        kirjain === 'U'
    ) {
        return "Vokaali";
    } else {
        return "Konsonantti";
    }
}

// IE09. Tarkista, onko annettu merkki kirjain, numero vai erikoismerkki
function tarkistaMerkki(merkki) {
    if ((merkki >= 'a' && merkki <= 'z') || (merkki >= 'A' && merkki <= 'Z')) {
        return "Kirjain";
    } else if (merkki >= '0' && merkki <= '9') {
        return "Numero";
    } else {
        return "Erikoismerkki";
    }
}

// IE10. Tarkista, onko annettu kirjain iso vai pieni
function tarkistaKirjaimenKoko(kirjain) {
    if (kirjain >= 'a' && kirjain <= 'z') {
        return "Pieni kirjain";
    } else if (kirjain >= 'A' && kirjain <= 'Z') {
        return "Iso kirjain";
    } else {
        return "Ei kirjain";
    }
}

// IE11. Laske voitto tai tappio myynti- ja ostoluvuista
function laskeVoittoTaiTappio(myynti, ostot) {
    if (myynti > ostot) {
        return "Voitto";
    } else if (myynti < ostot) {
        return "Tappio";
    } else {
        return "Ei voittoa eikä tappiota";
    }
}

// IE12. Arvioi kokeiden pisteiden perusteella
function arvioiKokeet(pisteet) {
    if (pisteet > 90) {
        return "K5";
    } else if (pisteet > 80) {
        return "H4";
    } else if (pisteet > 70) {
        return "H3";
    } else if (pisteet > 60) {
        return "T2";
    } else if (pisteet > 50) {
        return "T1";
    } else {
        return "Hylätty";
    }
}

// IE13. Tulosta viikonpäivät annetun vkpnumeron perusteella
function tulostaViikonpaiva(vkpnumero) {
    if (vkpnumero === 1) {
        return "Maanantai";
    } else if (vkpnumero === 2) {
        return "Tiistai";
    } else if (vkpnumero === 3) {
        return "Keskiviikko";
    } else if (vkpnumero === 4) {
        return "Torstai";
    } else if (vkpnumero === 5) {
        return "Perjantai";
    } else if (vkpnumero === 6) {
        return "Launtai";
    } else if (vkpnumero === 7) {
        return "Sunnuntai";
    } else {
        return "Virheellinen vkpnumero";
    }
}

// IE14. Tarkista, ovatko annetut luvut samat
function tarkistaSamuus(luku1, luku2) {
    if (luku1 === luku2) {
        return "Luvut ovat samat";
    } else {
        return "Luvut eivät ole samat";
    }
}

// IE15. Tarkista, voiko käyttäjä äänestää iän perusteella (18 tai vanhempi)
function tarkistaAaanestysika(ika) {
    if (ika >= 18) {
        return "Voit äänestää";
    } else {
        return "Et voi äänestää";
    }
}

// IE16. Tulosta kuukauden päivien määrä kuukauden numeron perusteella
function tulostaKuukaudenPaivat(kuukausi) {
    switch (kuukausi) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "Kuukaudessa on 31 päivää";
        case 4:
        case 6:
        case 9:
        case 11:
            return "Kuukaudessa on 30 päivää";
        case 2:
            return "Kuukaudessa on 28 tai 29 päivää";
        default:
            return "Virheellinen kuukauden numero";
    }
}

// IE17. Muunna annettu arvo rahaksi setelien ja kolikoiden avulla
function muunnaRahaksi(summa) {
    let seteli500 = Math.floor(summa / 500);
    summa %= 500;
    let seteli100 = Math.floor(summa / 100);
    summa %= 100;
    let seteli50 = Math.floor(summa / 50);
    summa %= 50;
    let seteli20 = Math.floor(summa / 20);
    summa %= 20;
    let kolikko5 = Math.floor(summa / 5);

    return `500 x ${seteli500} + 100 x ${seteli100} + 50 x ${seteli50} + 20 x ${seteli20} + 5 x ${kolikko5}`;
}

// IE18. Tarkista, voiko kolmio piirtää annettujen kulma-astelukujen perusteella
function tarkistaKolmio(kulma1, kulma2, kulma3) {
    if (kulma1 + kulma2 + kulma3 === 180 && kulma1 > 0 && kulma2 > 0 && kulma3 > 0) {
        return "Kolmio on piirrettävissä";
    } else {
        return "Kolmiota ei voi piirtää";
    }
}
console.log(tarkistaKolmio(60, 60, 60));

console.log(suurempiLuku(5, 8));
console.log(suurinLuku(10, 5, 8));
console.log(tarkistaLuku(-5));
console.log(tarkistaJaollisuus(22));
console.log(tarkistaKarkausvuosi(2024));
console.log(tarkistaParillisuus(7));
console.log(tarkistaKirjain('A'));
console.log(tarkistaVokaali('e'));
console.log(tarkistaMerkki('$'));
console.log(tarkistaKirjaimenKoko('D'));
console.log(laskeVoittoTaiTappio(1500, 1000));
console.log(arvioiKokeet(85));
console.log(tulostaViikonpaiva(3));
console.log(tarkistaSamuus(10, 10));
console.log(tarkistaAaanestysika(20));
console.log(tulostaKuukaudenPaivat(2));
console.log(muunnaRahaksi(1295));
