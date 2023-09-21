function PosiNega() { 
var luku = parseInt(document.getElementById('luku').value);

if (!isNaN(luku)) {
    if (luku >= 0) {
        alert("Luku " + luku + " on positiivinen.");
    } else {
        alert("Luku " + luku + " on negatiivinen.");
    }
} else {
    alert('Anna kelvollinen luku.');
}
}


