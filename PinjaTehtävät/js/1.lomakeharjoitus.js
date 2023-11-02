
    function tarkistus() {
    var etunimi = document.getElementById("etunimi").value;
    var sukunimi = document.getElementById("sukunimi").value;
    var kulkupeli = document.querySelector('input[name="kulkupeli"]:checked');
    var lempitunti = document.getElementById("lempitunti");

    if (etunimi === "") {
        alert("Anna etunimesi");
    return;
    }

    if (sukunimi === "") {
        alert("Anna sukunimesi");
    return;
    }

    if (!kulkupeli) {
        alert("Valitse kulkuväline");
    return;
    }

    if (lempitunti.value === "") {
        alert("Valitse lempituntisi");
    return;
    }
        alert("Kiitos tiedoista!");
}
