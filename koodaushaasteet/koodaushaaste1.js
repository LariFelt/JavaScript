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

console.log()

function ParTon(numero) {
    if (numero % 2 === 0) {
        return "parillinen";
    } else {
        return "pariton";
    }
}
var tulos = ParTon(52);
console.log(tulos);

console.log()

function kuukausi(kk)
{
    switch (kk)
    {
        case 1: console.log("Tammikuu");
            break;
        case 2: console.log("Helmikuu");
            break;
        case 3: console.log("Maaliskuu");
            break;
        case 4: console.log("Huhtikuu");
            break;
        case 5: console.log("Toukokuu");
            break;
        case 6: console.log("Kesäkuu");
            break;
        case 7: console.log("Heinäkuu");
            break;
        case 8: console.log("Elokuu");
            break;
        case 9: console.log("Syyskuu");
            break;
        case 10: console.log("Lokakuu");
            break;
        case 11: console.log("Marraskuu");
            break;
        case 12: console.log("Joulukuu");
            break;
        default:
            console.log("Anna kuukauden numero 1-12")
    }
}
kuukausi(3);

console.log()




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


    function aakkoset(Sana) {

        var kirjaimet = Array.from(Sana);

        kirjaimet.sort();

        var jarjestettySana = kirjaimet.join('');

        console.log(jarjestettySana);
    }
aakkoset("webmaster");

console.log()

function arvosana(nimi, pisteet) {
    let arvosana;

    if (pisteet < 50) {
        arvosana = "Hylätty";
    } else if (pisteet < 60) {
        arvosana = "T1";
    } else if (pisteet < 70) {
        arvosana = "T2";
    } else if (pisteet < 80) {
        arvosana = "H3";
    } else if (pisteet < 90) {
        arvosana = "H4";
    } else if (pisteet <= 100) {
        arvosana = "K5";
    } else {
        arvosana = "Virheelliset pisteet";
    }

    console.log(`${nimi} ${arvosana}`);
}

arvosana("Daniel", 80);
arvosana("Viivi", 77);
arvosana("Tiina", 88);
arvosana("Ismael", 95);
arvosana("Tuomas", 68);

