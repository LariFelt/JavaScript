document.addEventListener("DOMContentLoaded", function () {
    fetch("OmaApi.json")
        .then(response => response.json())
        .then(data => {
            const kysymyksetContainer = document.getElementById("kysymykset-container");

            data.forEach((kysymys, index) => {
                const kysymysLaatikko = document.createElement("div");
                kysymysLaatikko.className = "kysymys-laatikko";

                const koodiElementti = document.createElement("div");
                koodiElementti.className = "koodi";
                koodiElementti.innerHTML = kysymys.koodi;
                kysymysLaatikko.appendChild(koodiElementti);

                // Lis‰t‰‰n radio-napit
                const vastausNapit = document.createElement("div");
                vastausNapit.className = "vastaus-napit";
                Object.values(kysymys).forEach((vaihtoehto, vaihtoehtoIndex) => {
                    if (typeof vaihtoehto === "string" && vaihtoehtoIndex !== 0) {
                        const radioInput = document.createElement("input");
                        radioInput.type = "radio";
                        radioInput.name = `kysymys${index + 1}`;
                        radioInput.value = vaihtoehto;
                        radioInput.className = "vastaus-radio";
                        radioInput.addEventListener("change", () => {
                            console.log(`Kysymys ${index + 1}, Vastaus: ${vaihtoehto}`);
                        });

                        const label = document.createElement("label");
                        label.textContent = vaihtoehto;
                        label.appendChild(radioInput);
                        label.className = "vastaus-teksti";

                        vastausNapit.appendChild(label);
                    }
                });
                kysymysLaatikko.appendChild(vastausNapit);

                kysymyksetContainer.appendChild(kysymysLaatikko);
            });

            // Lis‰t‰‰n tarkistusnappi viimeisen kysymyksen diviin
            const tarkistaNappi = document.createElement("button");
            tarkistaNappi.textContent = "Tarkista vastaukset";
            tarkistaNappi.id = "tarkistaNappi";
            tarkistaNappi.addEventListener("click", function () {
                const oikeatVastaukset = ["Lydia and ReferenceError", "0 1 2 and 3 3 3", "20 and 63", "true and false", "Hello", "false false true", "orange", "{}", "Woof", "Lydia Hallie"];

                let oikein = 0;

                for (let i = 0; i < oikeatVastaukset.length; i++) {
                    const valittuVastaus = document.querySelector(`input[name="kysymys${i + 1}"]:checked`);
                    if (valittuVastaus) {
                        const kayttajanVastaus = valittuVastaus.value;
                        if (kayttajanVastaus === oikeatVastaukset[i]) {
                            oikein++;
                        }
                    }
                }

                alert(`Oikeita vastauksia: ${oikein} / ${oikeatVastaukset.length}`);
            });

            // Etsi viimeinen kysymys-div ja lis‰‰ tarkistaNappi siihen
            const viimeinenKysymysDiv = document.querySelector(".kysymys-laatikko:last-child");
            if (viimeinenKysymysDiv) {
                viimeinenKysymysDiv.appendChild(tarkistaNappi);
            }
        });
});
