document.getElementById("ShenkiloButton").addEventListener("click", function () {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const person = data.results[0];
            const personInfo = document.getElementById("personInfo");
            personInfo.innerHTML = `
        <p>Nimi: ${person.name.first} ${person.name.last}</p>
        <p>Sukupuoli: ${person.gender}</p>
        <p>Sähköposti: ${person.email}</p>
        <img src="${person.picture.large}" alt="Kuva henkilöstä">
      `;
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const KissaButton = document.getElementById("KissaButton");
    const KoiraButton = document.getElementById("KoiraButton");
    const tuloksetDiv = document.getElementById("tulokset");

    KissaButton.addEventListener("click", () => {
        fetch("ekatAPIt.json")
            .then(response => response.json())
            .then(data => {
                const kissat = data.cats;
                const kissaLista = kissat.map(kissa => `Rotu: ${kissa.breed}, Nimi: ${kissa.name}`).join("<br>");
                tuloksetDiv.innerHTML = kissaLista;
            });
    });

    KoiraButton.addEventListener("click", () => {
        fetch("ekatAPIt.json")
            .then(response => response.json())
            .then(data => {
                const koirat = data.dogs;
                const koiraLista = koirat.map(koira => `Rotu: ${koira.breed}, Nimi: ${koira.name}`).join("<br>");
                tuloksetDiv.innerHTML = koiraLista;
            });
    });
});
