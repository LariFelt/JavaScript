// S01. Laske lainan takaisinmaksu
function lainanTakaisinmaksu(paaoma, korko, vuodet) {
    let kokonaismaksu = paaoma * (1 + korko / 100) ** vuodet;
    return kokonaismaksu;
}

console.log(lainanTakaisinmaksu(5000, 2, 2));

// S02. Laske annetun luvun kertoma
function laskeKertoma(luku) {
    let kertoma = 1;
    for (let i = 1; i <= luku; i++) {
        kertoma *= i;
    }
    return kertoma;
}

console.log(laskeKertoma(5));

// S03. Etsi luvun 3 ensimmäistä esiintymää taulukosta
function etsiEsiintymat(taulukko, etsittava) {
    let esiintymat = [];
    let laskuri = 0;
    for (let i = 0; i < taulukko.length; i++) {
        if (taulukko[i] === etsittava) {
            esiintymat.push(i);
            laskuri++;
            if (laskuri === 3) {
                break;
            }
        }
    }
    return esiintymat;
}

const taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
console.log(etsiEsiintymat(taulukko, 3));

// S04. Käännä sana toisinpäin
function kaannaSana(sana) {
    let kaannettySana = '';
    for (let i = sana.length - 1; i >= 0; i--) {
        kaannettySana += sana[i];
    }
    return kaannettySana;
}

console.log(kaannaSana('Hevonen'));

// S05. Etsi maksimiarvo taulukosta
function etsiMaksimi(taulukko) {
    let maksimi = taulukko[0];
    for (let i = 1; i < taulukko.length; i++) {
        if (taulukko[i] > maksimi) {
            maksimi = taulukko[i];
        }
    }
    return maksimi;
}

const numerot1 = [6, 7, 2, 4, 3, 8, 1];
console.log(etsiMaksimi(numerot1));

// S06. Laske keskiarvo taulukosta ilman Math-luokan metodia
function laskeKeskiarvo(taulukko) {
    let summa = 0;
    for (let i = 0; i < taulukko.length; i++) {
        summa += taulukko[i];
    }
    return summa / taulukko.length;
}

const numerot2 = [6, 7, 2, 4, 3, 8, 1];
console.log(laskeKeskiarvo(numerot2));

// S07. Tee uusi taulukko, jossa kirjaimet ovat isoja
function isojaKirjaimia(taulukko) {
    let isoTaulukko = [];
    for (let i = 0; i < taulukko.length; i++) {
        isoTaulukko.push(taulukko[i].toUpperCase());
    }
    return isoTaulukko;
}

const kirjaimet = ["a", "b", "c", "d", "e", "f"];
console.log(isojaKirjaimia(kirjaimet));

// S08. Etsi seitsemäs pariton esiintymä taulukosta
function etsiMaksimiPariton(taulukko) {
    let maksimi = taulukko[0];
    let parittomiaLaskettu = 0;
    for (let i = 0; i < taulukko.length; i++) {
        if (taulukko[i] % 2 !== 0) {
            parittomiaLaskettu++;
            if (parittomiaLaskettu === 7) {
                maksimi = taulukko[i];
                break;
            }
        }
    }
    return maksimi;
}

const numerot3 = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
console.log(etsiMaksimiPariton(numerot3));

// S09. Etsi toiseksi suurin luku taulukosta
function toiseksiSuurinLuku(taulukko) {
    let suurin = taulukko[0];
    let toiseksiSuurin = Number.MIN_VALUE;
    for (let i = 1; i < taulukko.length; i++) {
        if (taulukko[i] > suurin) {
            toiseksiSuurin = suurin;
            suurin = taulukko[i];
        } else if (taulukko[i] > toiseksiSuurin && taulukko[i] !== suurin) {
            toiseksiSuurin = taulukko[i];
        }
    }
    return toiseksiSuurin;
}

const numerot4 = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
console.log(toiseksiSuurinLuku(numerot4));

// S10. Tulosta numerot sääntöjen mukaan
function tulostaNumerot() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(15);
        } else if (i % 3 === 0) {
            console.log(3);
        } else if (i % 5 === 0) {
            console.log(5);
        } else {
            console.log(i);
        }
    }
}

tulostaNumerot();

// S11. Tulosta Fibonacci-sekvenssin 10 ensimmäistä lukua
function fibonacciSarja(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacciSarja(10));

// S12. Tarkista, onko annettu sana palindromi
function onkoPalindromi(sana) {
    let kaannettySana = '';
    for (let i = sana.length - 1; i >= 0; i--) {
        kaannettySana += sana[i];
    }
    return sana === kaannettySana;
}

console.log(onkoPalindromi('aaroporaa'));

// S13. Laske parillisten Fibonacci-lukujen summa
function parillistenFibonacciSumma(n) {
    let fib = [0, 1];
    let summa = 0;
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        if (fib[i] % 2 === 0) {
            summa += fib[i];
        }
    }
    return summa;
}

console.log(parillistenFibonacciSumma(10));

// S14. Laske parittomien Fibonacci-lukujen summa
function parittomienFibonacciSumma(n) {
    let fib = [0, 1];
    let summa = 0;
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        if (fib[i] % 2 !== 0) {
            summa += fib[i];
        }
    }
    return summa;
}

console.log(parittomienFibonacciSumma(10));

// S15. Etsi suurin yhteinen tekijä (SYT) kahdelle luvulle
function suurinYhteinenTekija(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

console.log(suurinYhteinenTekija(24, 36)); 

// S16. Pyydä käyttäjältä merkkijonoa pilkulla erotettuna ja tulosta ilman pilkkua
function poistaPilkut(merkkijono) {
    let tulos = '';
    for (let i = 0; i < merkkijono.length; i++) {
        if (merkkijono[i] !== ',') {
            tulos += merkkijono[i];
        }
    }
    return tulos;
}

const syote = '7,3,9,2,44,99,123';
console.log(poistaPilkut(syote));

