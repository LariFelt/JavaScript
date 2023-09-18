function pieninSuurin(taulukko) {
    
    const pienin = Math.min(...taulukko);
    const suurin = Math.max(...taulukko);
    const ensimmainen = taulukko[0];
    const viimeinen = taulukko[taulukko.length - 1];

    return `Pienin: ${pienin} ja Suurin: ${suurin}. Ensimmäinen: ${ensimmainen} ja Viimeinen: ${viimeinen}`;
}

const taulukko = [8, 4, 9, 6, 2];
const tulos = pieninSuurin(taulukko);
console.log(tulos);

