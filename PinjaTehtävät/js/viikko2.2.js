function PosiNega() { 
var luku = parseInt(document.getElementById('luku').value);

if (!isNaN(luku)) {
    if (luku >= 0) {
        alert("Luku " + luku + " on positiivinen.");
    } else {
        alert("Luku " + luku + " on negatiivinen.");
    }
} else {
    alert('Anna kelvollinen luku.');
}
}


function ViikonPaiva() {
    var numero = parseInt(document.getElementById('numero').value);
    var vastaus = "";

    switch (numero) {
        case 1:
            vastaus = "Maanantai";
            break;
        case 2:
            vastaus = "Tiistai";
            break;
        case 3:
            vastaus = "Keskiviikko";
            break;
        case 4:
            vastaus = "Torstai";
            break;
        case 5:
            vastaus = "Perjantai";
            break;
        case 6:
            vastaus = "Lauantai";
            break;
        case 7:
            vastaus = "Sunnuntai";
            break;
        default:
            vastaus = "Anna viikonpäivän numero";
    }

    alert(vastaus);
}

function VuosiLuku() {
    var vuosi = parseInt(document.getElementById('vuosi').value);

    if (!isNaN(vuosi)) {
        if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
            alert("Vuosi on karkausvuosi");
        } else {
            alert("Vuosi ei ole karkausvuosi");
        }
    } else {
        alert("Syötä kelvollinen vuosiluku.");
    }
}

function laskeSummaJaKeskiarvo() {
    var luku1 = parseInt(document.getElementById('luku1').value);
    var luku2 = parseInt(document.getElementById('luku2').value);
    var luku3 = parseInt(document.getElementById('luku3').value);
    var luku4 = parseInt(document.getElementById('luku4').value);
    var luku5 = parseInt(document.getElementById('luku5').value);

    var summa = luku1 + luku2 + luku3 + luku4 + luku5;
    var keskiarvo = summa / 5;

    var tulos = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;

    document.getElementById('tulos').textContent = tulos;
}

function laskeKertotaulu() {
    var luku = parseInt(document.getElementById('numero2').value);
    var lause = "";

    if (!isNaN(luku)) {
        for (var i = 1; i <= 10; i++) {
            lause += luku + " x " + i + " = " + (luku * i) + "<br>";
        }
        document.getElementById('vastaus').innerHTML = lause;
    } else {
        document.getElementById('vastaus').textContent = "Syötä kelvollinen luku.";
    }
}
