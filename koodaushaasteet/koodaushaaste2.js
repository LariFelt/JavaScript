function etsiArmstronginLuvut() {
    for (let luku = 100; luku <= 999; luku++) {
        var lukuTaulukko = luku.toString().split('');

        var summa = lukuTaulukko.reduce((acc, numero) => {
            return acc + Math.pow(parseInt(numero), 3);
        }, 0);

        if (summa === luku) {
            console.log("Armstrongin luku löydetty:", luku);
        }
    }
}

etsiArmstronginLuvut();

console.log()


function tähdet(korkeus) {
    for (let i = 1; i <= korkeus; i++) {
        let rivi = "";
        for (let j = 1; j <= i; j++) {
            rivi += "* ";
        }
        console.log(rivi);
    }
}

tähdet(5);

console.log()


function KoodiKieli(teksti) {
    
    var muunnettuTeksti = teksti.replace(/a/g, '4')
        .replace(/e/g, '3')
        .replace(/o/g, '0')
        .replace(/i/g, '1')
        .replace(/s/g, '5');

    return muunnettuTeksti;
}

var alkuperainenTeksti = "ohjelmointi on hauskaa";
var muunnettuTeksti = KoodiKieli(alkuperainenTeksti);

console.log(muunnettuTeksti);

console.log()


for (let luku = 1; luku <= 100; luku++) {
    if (luku % 3 === 0 && luku % 5 === 0) {
        console.log("hik-up");
    } else if (luku % 3 === 0) {
        console.log("Hik");
    } else if (luku % 5 === 0) {
        console.log("up");
    } else {
        console.log(luku);
    }
}
