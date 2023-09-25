document.addEventListener("DOMContentLoaded", function () {
    // Funktio tarkistaa parilliset luvut
    function tarkistaParilliset() {
        var syoteElementti = document.getElementById("luku");
        var syote = parseInt(syoteElementti.value);

        var tuloksetElementti = document.getElementById("parillisetTulokset");
        tuloksetElementti.textContent = "";

        if (!isNaN(syote) && syote % 2 === 0 && syote > 0) {
            var parilliset = [];
            for (var i = 2; i <= syote; i += 2) {
                if (i !== 0) {
                    parilliset.push(i);
                }
            }
            if (parilliset.length > 0) {
                tuloksetElementti.textContent = parilliset.join(", ");
            } else {
                tuloksetElementti.textContent = "Ei parillisia lukuja annetulle alueelle.";
            }
        } else {
            alert("Anna parillinen luku suurempi kuin 0.");
        }
    }

    var tarkistaButton = document.getElementById("tarkistaButton");
    tarkistaButton.addEventListener("click", tarkistaParilliset);



    // Funktio muuntaa sanan salasanaksi
    function muunnaSalasanaksi() {
        var syoteElementti = document.getElementById("password");
        var syote = syoteElementti.value;

        var uusiPasswordElementti = document.getElementById("uusiPassword");

        if (syote) {
            var salasana = "";
            for (var i = 0; i < syote.length; i++) {
                if (i % 2 === 1) {
                    salasana += "Ö" + syote[i].toUpperCase();
                } else {
                    salasana += syote[i];
                }
            }
            uusiPasswordElementti.textContent = "Salasana: " + salasana;
        } else {
            uusiPasswordElementti.textContent = "Syötä sana ensin.";
        }
    }

    var passwordButton = document.getElementById("passwordButton");
    passwordButton.addEventListener("click", muunnaSalasanaksi);




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

     var sanaButton = document.getElementById("sanaButton");
     sanaButton.addEventListener("click", tarkastaO);


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

    var kertomaButton = document.getElementById("kertomaButton");
    kertomaButton.addEventListener("click", laskeKertoma);



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

    var heijaaButton = document.getElementById("heijaaButton");
    heijaaButton.addEventListener("click", tulostaNumerot);


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

    var ekatButton = document.getElementById("ekatButton");
    ekatButton.addEventListener("click", tulostaekatNumerot);


});




