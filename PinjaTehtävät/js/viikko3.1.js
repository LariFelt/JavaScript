
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



