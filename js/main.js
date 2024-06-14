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

//seleziono l'output per il risultato di sconfitta in pagina
const resultDefeat = document.getElementById("result-defeat-output");

//seleziono l'output per il risultato di vittoria in pagina
const resultWin = document.getElementById("result-win-output");

//seleziono l'output per il punteggio
const showPoints = document.getElementById("points");

//creo evento su click
playButton.addEventListener("click",
    function (){

        //faccio sparire il pulsante
        playButton.classList.add("vanish");

        //creo il div.container
        const addContainer = createElementWClass("div", "container");

        //lo posiziono in pagina
        document.querySelector("main").append(addContainer);

        //creo le bombe
        const bmbArray = [];
        while (bmbArray.length < 16) {
            let numRand = randomNumber(1, 100);
            if(!bmbArray.includes(numRand)) {
                bmbArray.push(numRand);
            }
        }
        console.log(bmbArray);

        //dichiaro il counter dei punti
        let points = 0;

        //creo ciclo per creare 100 box dentro div.container al click
        for (let i = 1; i <= 100; i++) {

            //creo il div.box
            const addBox = createElementWClass("div", "box");

            //scrivo all'interno di div.box il numero della box
            addBox.append(i);

            //aggioungo i div.box in div.container
            addContainer.append(addBox);

            //creo evento al click di div.box
            addBox.addEventListener("click",
                function () {

                    //se il numero bomba e il numero div.box combacia, aggancio la bomba
                    if(bmbArray.includes(i)){
                        addBox.classList.add("bomb");
                        //mostro il messaggio "hai perso"
                        resultDefeat.classList.remove("vanish");
                        showPoints.innerText = points;

                    } else {
                        //altrimenti aggiungo la classe clicked
                        addBox.classList.add("clicked");
                        //aggiungo un punto
                        points += 1;
                        showPoints.innerText = points;
                    }

                    //condizione di vincita
                    if(points >= 86) {
                        resultWin.classList.remove("vanish");
                    }                    

                }
                
            );
        }
       
    }
);