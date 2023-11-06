
// Funktio tarkistaa parilliset luvut
function tarkistaParilliset() {
    var syoteElementti = document.getElementById("luku");
    var syote = parseInt(syoteElementti.value);

    var tuloksetElementti = document.getElementById("parillisetTulokset").querySelector("p");
    tuloksetElementti.textContent = "";

    if (!isNaN(syote) && syote % 2 === 0 && syote > 0) {
        var parilliset = [];
        for (var i = 2; i <= syote; i += 2) {
            if (i !== 0) {
                parilliset.push(i);
            }
        }
        if (parilliset.length > 0) {
            tuloksetElementti.textContent = "Parilliset luvut: " + parilliset.join(", ");
        } else {
            tuloksetElementti.textContent = "Ei parillisia lukuja annetulle alueelle.";
        }
    } else {
        alert("Anna parillinen luku suurempi kuin 0.");
    }
}
// Funktio muuttaa sanan salasanaksi
function muunnaSalasanaksi() {
    var syoteElementti = document.getElementById("password");
    var syote = syoteElementti.value;

    var uusiPasswordElementti = document.getElementById("uusiPassword");

    if (syote) {
        var muunnettuSalasana = "";
        for (var i = 0; i < syote.length; i++) {
            muunnettuSalasana += syote[i];
            muunnettuSalasana += "Ö";
        }
        uusiPasswordElementti.textContent = "Salasana: " + muunnettuSalasana;
    } else {
        uusiPasswordElementti.textContent = "Syötä sana ensin.";
    }
}


// Funktio tarkastaa, onko sanassa "ö"-kirjainta
function tarkastaO() {
    var syoteElementti = document.getElementById("sana");
    var syote = syoteElementti.value.toLowerCase();

    var sanaTuloksetElementti = document.getElementById("sanaTulokset");

        if (syote.includes("ö")) {
            sanaTuloksetElementti.textContent = "Sanassa on ö-kirjain.";
        } else {
            sanaTuloksetElementti.textContent = "Sanassa ei ole ö-kirjainta.";
        }
}

// Funktio laskee luvun kertoman
function laskeKertoma() {
    var syoteElementti = document.getElementById("kertoma");
    var syote = parseInt(syoteElementti.value);

    var kertomaTuloksetElementti = document.getElementById("kertomaTulokset");

        if (!isNaN(syote) && syote >= 0) {
            var kertoma = 1;
            for (var i = 1; i <= syote; i++) {
                kertoma *= i;
            }
            kertomaTuloksetElementti.textContent = "Kertoma on: " + kertoma;
        } else {
            kertomaTuloksetElementti.textContent = "Anna positiivinen luku.";
        }
}

// Funktio tulostaa luvut ja noudattaa ehtoja
function tulostaNumerot() {
    var hipTulosteElementti = document.getElementById("hipTuloste");
    hipTulosteElementti.innerHTML = "";

    for (var i = 1; i <= 100; i++) {
        var tuloste = "";
        if (i % 3 === 0) {
            tuloste += "hip";
        }
        if (i % 5 === 0) {
            tuloste += "heijaa";
        }
        if (tuloste === "") {
            tuloste = i;
        }
        var tulosteElementti = document.createElement("p");
        tulosteElementti.textContent = tuloste;
        hipTulosteElementti.appendChild(tulosteElementti);
    }
}

// Funktio tulostaa 10 ensimmäistä numeroa
function tulostaekatNumerot() {
    var ekatTulosteElementti = document.getElementById("ekatTuloste");
    ekatTulosteElementti.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        var numeroElementti = document.createElement("p");
        numeroElementti.textContent = i;
        ekatTulosteElementti.appendChild(numeroElementti);
    }
}

// Funktio laskee 10 ensimmäistä numeroa yhteen
function laskeYhteen() {
    var ekatYhteenTulosteElementti = document.getElementById("ekatYhteenTuloste");
    ekatYhteenTulosteElementti.innerHTML = "";

    var summa = 0;
    for (var i = 1; i <= 10; i++) {
        summa += i;
    }

    var tulosElementti = document.createElement("p");
    tulosElementti.textContent = "Summa: " + summa;
    ekatYhteenTulosteElementti.appendChild(tulosElementti);
}

function laskePotenssi() {
    var korotettavaElementti = document.getElementById("korotettava");
    var potenssiElementti = document.getElementById("potenssi");
    var tuloksetElementti = document.getElementById("potenssiTulokset");

    var korotettava = parseFloat(korotettavaElementti.value);
    var potenssi = parseFloat(potenssiElementti.value);

    if (!isNaN(korotettava) && !isNaN(potenssi)) {
        var tulos = Math.pow(korotettava, potenssi);
        tuloksetElementti.textContent = korotettava + " ^ " + potenssi + " = " + tulos;
    } else {
        tuloksetElementti.textContent = "Anna kelvolliset luvut.";
    }
}
function laskeSuurinPienin() {
    var luku1 = parseFloat(document.getElementById("luku1").value);
    var luku2 = parseFloat(document.getElementById("luku2").value);
    var luku3 = parseFloat(document.getElementById("luku3").value);
    var luku4 = parseFloat(document.getElementById("luku4").value);
    var luku5 = parseFloat(document.getElementById("luku5").value);

    var luvut = [luku1, luku2, luku3, luku4, luku5];
    var suurin = Math.max(...luvut);
    var pienin = Math.min(...luvut);

    var tulos = "Suurin luku: " + suurin + "<br>Pienin luku: " + pienin;
    document.getElementById("tulos").innerHTML = tulos;
}

function muunnaSalasana() {
    var syoteElementti = document.getElementById("passwordInput");
    var syote = syoteElementti.value;

    var uusiSalasanaElementti = document.getElementById("uusiSalasana");

    if (syote) {
        var muunnettuSalasana = "";
        for (var i = 0; i < syote.length; i++) {
            var satunnainenKirjain = arvoSatunnainenKirjain();
            muunnettuSalasana += syote[i];
            muunnettuSalasana += satunnainenKirjain;
        }
        uusiSalasanaElementti.textContent = "Salasana: " + muunnettuSalasana;
    } else {
        uusiSalasanaElementti.textContent = "Syötä sana ensin.";
    }
}

function arvoSatunnainenKirjain() {
    var kirjaimet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var satunnainenIndeksi = Math.floor(Math.random() * kirjaimet.length);
    return kirjaimet.charAt(satunnainenIndeksi);
}

function naytaParillisetJaParittomat() {
    var pienempiElementti = document.getElementById("pienempiNumero");
    var isompiElementti = document.getElementById("isompiNumero");

    var pienempi = parseFloat(pienempiElementti.value);
    var isompi = parseFloat(isompiElementti.value);

    var parilliset = [];
    var parittomat = [];
    var parillistenSumma = 0;
    var parittomienSumma = 0;

    for (var i = pienempi; i <= isompi; i++) {
        if (i % 2 === 0) {
            parilliset.push(i);
            parillistenSumma += i;
        } else {
            parittomat.push(i);
            parittomienSumma += i;
        }
    }

    var parillisetNumerotElementti = document.getElementById("parillisetNumerot");
    var parittomatNumerotElementti = document.getElementById("parittomatNumerot");
    var parillistenSummaElementti = document.getElementById("parillistenSumma");
    var parittomienSummaElementti = document.getElementById("parittomienSumma");

    parillisetNumerotElementti.textContent = "Parilliset numerot: " + parilliset.join(", ");
    parittomatNumerotElementti.textContent = "Parittomat numerot: " + parittomat.join(", ");
    parillistenSummaElementti.textContent = "Parillisten numeroiden summa: " + parillistenSumma;
    parittomienSummaElementti.textContent = "Parittomien numeroiden summa: " + parittomienSumma;
}




