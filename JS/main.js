
// MILESTONE #1 GENERARE LE BOME
// Dobbiamo generare una lista di celle contenenti bombe.
// le bombe devono essere: 
// - comprese tra 1 >= 100;
// - 16;
// - casuali;
// - non essere presenti sulla stessa casella;

// MILESTONE #2 CONTROLLARE LE CELLE
// Al click su una cella dovremmo controllare se QUELLA cella è inclusa nell'elenco di bombe. In baso al caso aggiungiamo coloriamo la cella di azzurro o di rosso.

// MILESTONE #3 GESTIRE IL PUNTEGGIO
// Abbiamo bisogno di salvare un dato, il punteggio. Questo dato verrà resettato ad ogni avvio di partita. Inoltre ad ogni cella cliccata, se non è una bomba, dobbiamo incrementare il punteggio e stamparlo in console.


// MILESTONE #4 YOU LOSE
// Abbiamo bisogno di gestire il caso in cui si clicca una bomba. A quel punto possiamo prendere il punteggio e segnalarlo all'utente (con alert o scrivendolo in pagina).Inoltre da quel momento non si può più cliccare in giro.

// MILESTONE #4 YOU WIN
// Arriverà un momento in cui tutte le celle valide saranno state cliccate. Quello è il caso in cui la partita è vinta. Come me ne accorgo? Ci sono dei dati che posso controllare ogni volta che clicco su una cella per rendermi conto che è l'ultima cella?
// _________________________________________________________________________________________________


let button = document.getElementById("btn")
button.addEventListener("click", function () {
    griglia.innerHTML = ""

    for (i = 1; i <= 100; i++) {

        // * vado a creare una classe div equivalente ai quadrati in HTML e la salvo in una variabile.
        // **  aggiungo a quadrato la class di CSS.
        // *** inserisco un numero progressivo a quadrato

        //(MILESTONE #4) creo una nuova varibile che mi vada a richiamare la funzione creaQuadrato
        let elemento = creaQuadrato(i);

        //adesso aggiungo quadrato alla griglia
        griglia.append(elemento);

    }
})






function creaQuadrato(contenuto) {
    // *
    let quadrato = document.createElement("div");

    // ** 
    quadrato.classList.add("quadrato");

    // ***
    quadrato.innerText = contenuto;

    // **** (MILESTONE #3) adesso vado ad aggiungere ad ogni quadrato un evento clic 
    quadrato.addEventListener("click", function () {
        console.log("selezionato", contenuto)
        //aggiungo la classe eveidenziata  per i quadrati che vado a cliccare
        quadrato.classList.toggle("evidenziato")

        //uso toggle e non add perchè toggle mi permette in automatico di aggiungere la classe dove non c'è e toglierla dove c'è al solo click

        // avrei potuto usare anche il this = elemento che ha ricevuto il click anche nel caso non avessimo la variabile di riferimento come in questo caso

        // ----> this.classList.add("evidenziato")

    })

    // restituisco il quadrato al chiamante della funzione
    return quadrato
}


