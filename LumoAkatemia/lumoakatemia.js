console.log("Hei maailma");


var num1, num2, summa;
num1 = 7
num2 = 5
summa = num1 + num2
console.log(summa);


var num3, num4, erotus;
num3 = 12
num4 = 11
erotus = num3 - num4
console.log(erotus);


var num5, num6, tulo;
num5 = 8
num6 = 7
tulo = num5 * num6
console.log(tulo);


var num7, num8, osam;
num7 = 40
num8 = 8
osam = num7 / num8
console.log(osam);


var cels, fahr;
cels = 26
fahr = cels * 9 / 5 + 32
console.log(fahr);


var fahr1, cels1;
fahr1 = 72
cels1 = (fahr1 - 32) * 5 / 9
console.log(cels1);


var km, mile;
km = 60
mile = km / 1.609
console.log(mile);


var tuuma, sentti
sentti = 42
tuuma = sentti / 2.54
console.log(tuuma);


var metri, yardi
metri = 13
yardi = metri / 0.9144
console.log(yardi)

function etsiSuurinLuku(luku1, luku2, luku3) {
    let suurin = luku1;

    if (luku2 > suurin) {
        suurin = luku2;
    }

    if (luku3 > suurin) {
        suurin = luku3;
    }

    return suurin;
}

const luku1 = 10;
const luku2 = 5;
const luku3 = 8;

const suurinLuku = etsiSuurinLuku(luku1, luku2, luku3);
console.log(`Suurin luku on: ${suurinLuku}`);


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function laskeSumma(luku1, luku2) {
    return luku1 + luku2;
}

function laskeErotus(luku1, luku2) {
    return luku1 - luku2;
}

function laskeTulo(luku1, luku2) {
    return luku1 * luku2;
}

function laskeOsamaara(luku1, luku2) {
    if (luku2 === 0) {
        return "Ei voida jakaa nollalla";
    }
    return luku1 / luku2;
}

rl.question("Anna Fahrenheit-asteet: ", function (answer) {
    const fahrenheit = parseFloat(answer);

    if (isNaN(fahrenheit)) {
        console.log("Virheellinen syöte Fahrenheit-asteille.");
    } else {
        const celsius = fahrenheitToCelsius(fahrenheit);
        console.log(`${fahrenheit} Fahrenheit on ${celsius.toFixed(2)} Celsius-astetta.`);
    }

    rl.question("Syötä ensimmäinen luku: ", function (luku1Input) {
        rl.question("Syötä toinen luku: ", function (luku2Input) {
            const luku1 = parseFloat(luku1Input);
            const luku2 = parseFloat(luku2Input);

            if (isNaN(luku1) || isNaN(luku2)) {
                console.log("Virheellinen syöte. Syötä kaksi kelvollista lukua.");
            } else {
                const summa = laskeSumma(luku1, luku2);
                const erotus = laskeErotus(luku1, luku2);
                const tulo = laskeTulo(luku1, luku2);
                const osamaara = laskeOsamaara(luku1, luku2);

                console.log(`Summa: ${summa}`);
                console.log(`Erotus: ${erotus}`);
                console.log(`Tulo: ${tulo}`);
                console.log(`Osamäärä: ${osamaara}`);
            }

            rl.close();
        });
    });
});
