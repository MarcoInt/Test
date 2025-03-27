function zeigeAuswahl() {
    var auswahl = document.getElementById('auswahl').value;
    var anzeige = document.getElementById('anzeige');
    anzeige.innerText =  `Schalom Bruder du hast ` + auswahl + ` ausgewählt!`;
}


function berechnePreis() {
    var checkboxes = document.querySelectorAll('input[name="essen"]:checked');
    var gesamtPreis = 0;
    checkboxes.forEach((checkbox) => {
        gesamtPreis += parseInt(checkbox.value);
    });
    document.getElementById('preis').innerText = `Zu zahlen: ${gesamtPreis} €`;
}