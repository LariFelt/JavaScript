
﻿
function onkoEkaIso(merkkijono) {
    if (merkkijono[0] === merkkijono[0].toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

var teksti = "Tämä on lause isolla alkukirjaimella";
console.log(onkoEkaIso(teksti));

console.log()


function PoistaValit(testi) {
    return testi.trim();
}

var testiTeksti = "     Esimerkki teksti välilyöntien kanssa.     ";
console.log(PoistaValit(testiTeksti));

console.log()


function vokaaliLaskenta(merkkijono2) {
    var vokaalit = merkkijono2.match(/[aeiouy]/gi);
    return vokaalit ? vokaalit.length : 0;
}
var teksti2 = "Tässä jälleen yksi esimerkki lause";
console.log(vokaaliLaskenta(teksti2));

console.log()


function onkoAlfa(merkitjonossa) {
    return /^[a-öA-Ö0-9]+$/.test(merkitjonossa);
}

var teksti3 = "TämäOnAlfanumeerinen123";
console.log(onkoAlfa(teksti3));

console.log()


function onkoPostinro(numerojono) {
    return /^\d{5}$/.test(numerojono);
}

var postinumero = "12345";
console.log(onkoPostinro(postinumero));

console.log()

function onkoSotu(sotu) {
    return /^\d{6}[A-Za-z-][0-9A-Za-z]*$/.test(sotu);
}

var sotuTesti = "211220-930D";
console.log(onkoSotu(sotuTesti));

console.log()


function onkoHTMLTageja(htmlmerkkijono) {
    return /<[a-z][\s\S]*>/i.test(htmlmerkkijono);
}

var teksti5 = "<p>Tämä on <strong>HTML</strong></p>";
﻿
