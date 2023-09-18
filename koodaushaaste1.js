function pieninSuurin(taulukko) {
    
    var pienin = Math.min(...taulukko);
    var suurin = Math.max(...taulukko);
    var ensimmainen = taulukko[0];
    var viimeinen = taulukko[taulukko.length - 1];

    return `Pienin: ${pienin} ja Suurin: ${suurin}. Ensimmäinen: ${ensimmainen} ja Viimeinen: ${viimeinen}`;
}

var taulukko = [8, 4, 9, 6, 2, 7, 1, 5];
var tulos = pieninSuurin(taulukko);
console.log(tulos);



function ParTon(numero) {
    if (numero % 2 === 0) {
        return "parillinen";
    } else {
        return "pariton";
    }
}

var vastaus = ParTon(12)
console.log(vastaus);



function kuukausi(kuukaudenNumero) {
    var kuukaudet = [
        "tammikuu",
        "helmikuu",
        "maaliskuu",
        "huhtikuu",
        "toukokuu",
        "kesäkuu",
        "heinäkuu",
        "elokuu",
        "syyskuu",
        "lokakuu",
        "marraskuu",
        "joulukuu"
    ];

    if (kuukaudenNumero >= 1 && kuukaudenNumero <= 12) {
        return kuukaudet[kuukaudenNumero - 1];
    }
}
var kuukausiNimi = kuukausi(9)
console.log(kuukausiNimi);



function yhteystiedot(henkilot) {
    var osoitelista = [];

    for (var henkilo of henkilot) {
        var { etunimi, sukunimi, lahiosoite, postinumero, postitoimipaikka, puhelin, sahkoposti } = henkilo;

        var osoitetieto = {
            Etunimi: etunimi,
            Sukunimi: sukunimi,
            Lahiosoite: lahiosoite,
            Postinumero: postinumero,
            Postitoimipaikka: postitoimipaikka,
            Puhelin: puhelin,
            Sahkoposti: sahkoposti
        };

        osoitelista.push(osoitetieto);
    }

    return osoitelista;
}

var henkilo1 = {
    etunimi: "Matti",
    sukunimi: "Menninkäinen",
    lahiosoite: "Kivenkolo 1",
    postinumero: "99500",
    postitoimipaikka: "Metsä",
    puhelin: "0401234567",
    sahkoposti: "matti.menninkäinen@esimerkki.fi"
};

var henkilo2 = {
    etunimi: "Anna",
    sukunimi: "Mäki",
    lahiosoite: "Risuinentie 56",
    postinumero: "04300",
    postitoimipaikka: "Tuusula",
    puhelin: "0409876543",
    sahkoposti: "mäen.anna@esimerkki.fi"
};

var henkilo3 = {
    etunimi: "Tero",
    sukunimi: "Testaaja",
    lahiosoite: "Keskikatu 3",
    postinumero: "04200",
    postitoimipaikka: "Kerava",
    puhelin: "0401122334",
    sahkoposti: "testo.tero@esimerkki.fi"
};

var henkilot = [henkilo1, henkilo2, henkilo3];

var osoitteet = yhteystiedot(henkilot);

console.log(osoitteet);
