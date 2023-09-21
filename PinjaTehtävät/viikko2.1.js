
function jarjesta() {
    var ekaNumero = parseFloat(document.getElementById('eka').value);
    var tokaNumero = parseFloat(document.getElementById('toka').value);
    var kolmasNumero = parseFloat(document.getElementById('kolmas').value);

    if (!isNaN(ekaNumero) && !isNaN(tokaNumero) && !isNaN(kolmasNumero)) {
        var jarjestetytNumerot = [ekaNumero, tokaNumero, kolmasNumero].sort(function (a, b) {
            return a - b;
        });

        alert("Järjestetyt numerot ovat: " + jarjestetytNumerot.join(", "));
    } else {
        alert('Anna kelvolliset numerot.');
    }
}



function etsiSuurin() {
    var luku1 = parseFloat(document.getElementById('luku1').value);
    var luku2 = parseFloat(document.getElementById('luku2').value);
    var luku3 = parseFloat(document.getElementById('luku3').value);
    var luku4 = parseFloat(document.getElementById('luku4').value);
    var luku5 = parseFloat(document.getElementById('luku5').value);

    var suurin = Math.max(luku1, luku2, luku3, luku4, luku5);

    alert("Suurin luku on: " + suurin);
}


function paritonParillinen() {
    var luku = parseInt(document.getElementById('luku').value);

    if (!isNaN(luku)) {
        if (luku % 2 === 0) {
            alert("Luku " + luku + " on parillinen.");
        } else {
            alert("Luku " + luku + " on pariton.");
        }
    } else {
        alert('Anna kelvollinen luku.');
    }
}


function ajoneuvo() {
    var ika = parseInt(document.getElementById('ika').value);

    if (!isNaN(ika)) {
        if (ika < 16) {
            alert("Voit ajaa polkupyörää.");
        } else if (ika < 18) {
            alert("Voit ajaa mopoa.");
        } else {
            alert("Voit ajaa autoa.");
        }
    } else {
        alert('Anna kelvollinen ikä.');
    }
}


function kaanna() {
    var kieli = document.getElementById('kieli').value;
    var kaannos = '';

    switch (kieli) {
        case 'eng':
            kaannos = 'Hello world';
            break;
        case 'swe':
            kaannos = 'Hej världen';
            break;
        case 'esp':
            kaannos = 'Hola mundo';
            break;
        default:
            kaannos = 'Valitse kieli';
    }

    alert(kaannos);
}

