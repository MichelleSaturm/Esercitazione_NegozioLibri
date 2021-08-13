function confermaNewsletter() {
    let nome = document.getElementById("nome");
    let cognome = document.getElementById("cognome");
    let email = document.getElementById("email");

    let message = 'Salve ' + nome.value + ' ' + cognome.value + ', riceverai al più presto una mail di conferma registrazione alla newsletter al seguente indirizzo ' + email.value
     

    alert(message);
}


function calcolaConto() {
    let libri = document.querySelectorAll('input[type=checkbox]:checked');
    let qnt = document.getElementById("qnt");

    let totale = document.getElementById("totaleConto");

    if (libri.length == 0)
        return;

    totale.innerText = '';
    let importoTotale = 0;
    for (let i = 0; i < libri.length; i++) {
        let prezzo = parseFloat(libri[i].value) * qnt[0].value;
        importoTotale += prezzo;
    }

    totale.innerText = "Totale Ordine: " + importoTotale + " €";
}

