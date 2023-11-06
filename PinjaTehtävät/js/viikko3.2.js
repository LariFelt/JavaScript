function laskeKirjainPisteet() {
    var sanaElementti = document.getElementById("sana");
    var sana = sanaElementti.value.toUpperCase(); 

    var kirjainPisteet = {
        'A': 1, 'E': 1, 'I': 1, 'N': 1, 'S': 1, 'T': 1,
        'O': 2, 'Ä': 2, 'K': 2, 'L': 2,
        'U': 3, 'M': 3,
        'Y': 4, 'H': 4, 'J': 4, 'P': 4, 'R': 4, 'V': 4,
        'Ö': 7, 'D': 7,
        'B': 8, 'F': 8, 'G': 8,
        'C': 10
    };

    var pisteet = 0;
    for (var i = 0; i < sana.length; i++) {
        var kirjain = sana[i];
        if (kirjain in kirjainPisteet) {
            pisteet += kirjainPisteet[kirjain];
        } else {
            pisteet += 12;
        }
    }

    var pisteetElementti = document.getElementById("pisteet");
    pisteetElementti.textContent = "Sanan pisteet: " + pisteet;
}

function arvoLottonumerot() {
    var lottonumerot = [];
    while (lottonumerot.length < 7) {
        var numero = Math.floor(Math.random() * 40) + 1;
        if (lottonumerot.indexOf(numero) === -1) {
            lottonumerot.push(numero);
        }
    }

    var lottonumerotElementti = document.getElementById("lottonumerot");
    lottonumerotElementti.textContent = "Lottonumerot: " + lottonumerot.join(", ");
}

function muunnaTaulukoksi() {
    var taulukko = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];

    var taulukkoElementti = document.getElementById("taulukko");
    taulukkoElementti.innerHTML = "";

    for (var i = 0; i < taulukko.length; i++) {
        var rivi = taulukko[i];
        var riviElementti = document.createElement("tr");

        for (var j = 0; j < rivi.length; j++) {
            var solu = rivi[j];
            var soluElementti = document.createElement("td");
            soluElementti.textContent = solu;
            riviElementti.appendChild(soluElementti);
        }
        taulukkoElementti.appendChild(riviElementti);
    }
}


function arvoKortit() {
    var maa = ["Hertta", "Ruutu", "Pata", "Risti"];
    var kortti = ["Ässä", "Kakka", "Kolmonen", "Nelonen", "Viitonen", "Kuutonen", "Seiska", "Kasi", "Ysi", "Kymppi", "Jätkä", "Akka", "Kunkku"];

    var arvotutKortit = [];
    while (arvotutKortit.length < 5) {
        var satunnainenMaa = maa[Math.floor(Math.random() * maa.length)];
        var satunnainenKortti = kortti[Math.floor(Math.random() * kortti.length)];
        var arvottuKortti = satunnainenMaa + " " + satunnainenKortti;
        if (arvotutKortit.indexOf(arvottuKortti) === -1) {
            arvotutKortit.push(arvottuKortti);
        }
    }

    var arvotutKortitElementti = document.getElementById("arvotutKortit");
    arvotutKortitElementti.textContent = "Arvotut kortit: " + arvotutKortit.join(", ");
}

