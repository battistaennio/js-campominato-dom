//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
//In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
//Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//seleziono il bottone gioca
const playButton = document.querySelector("button");

//creo evento su click
playButton.addEventListener("click",
    function (){

        //faccio sparire il pulsante
        playButton.classList.add("vanish");

        //creo il div.container
        const addContainer = createElementWClass("div", "container");

        //lo posiziono in pagina
        document.querySelector("main").append(addContainer);

        //creo ciclo per creare 100 box dentro div.container al click
        for (let i = 1; i <= 100; i++) {

            //creo il div.box
            const addBox = createElementWClass("div", "box");

            //scrivo all'interno di div.box il numero della box
            addBox.append(i);

            //aggioungo i div.box in div.container
            addContainer.append(addBox);

            //creo evento cambio colore al click di div.box
            addBox.addEventListener("click",
                function () {
                    //aggiungo/tolgo la classe clicked
                    addBox.classList.toggle("clicked");

                    //mostro in console il numero della casella cliccata
                    console.log(i);
                }
                
            );
        }
       
    }
);