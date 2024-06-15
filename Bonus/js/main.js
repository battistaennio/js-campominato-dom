//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//seleziono il bottone gioca
const playButton = document.getElementById("play");

//seleziono bottone nuova partita
const restartButton = document.getElementById("restart");

//seleziono l'output per il risultato di sconfitta in pagina
const resultDefeat = document.getElementById("result-defeat-output");

//seleziono l'output per il risultato di vittoria in pagina
const resultWin = document.getElementById("result-win-output");

//seleziono l'output per il punteggio
const showPoints = document.getElementById("points");

//creo evento su click
playButton.addEventListener("click",
    function (){

        //faccio sparire il form
        document.querySelector("form").classList.add("vanish")

        //faccio apparire il tasto nuova partita
        restartButton.classList.remove("vanish")

        //seleziono valore difficoltà
        const difficulty = parseInt(document.getElementById("difficulty-selector").value);

        //creo le bombe
        const bmbArray = [];
        while (bmbArray.length < 16) {
            let numRand = randomNumber(1, difficulty);
            if(!bmbArray.includes(numRand)) {
                bmbArray.push(numRand);
            }
        }

        console.log(bmbArray);

        //dichiaro il counter dei punti
        let points = 0;

        //dichiaro stop gioco
        let gameOff = false;
        
        //dichiaro nome classe
        let classBoxName;

        //imposta la classe css delle box da generare a seconda della difficoltà impostata
        if(difficulty == 100){
            classBoxName = "box";
        } else if (difficulty == 81){
            classBoxName = "box-difficulty2";
        } else if (difficulty == 49){
            classBoxName = "box-difficulty3";
        }

        boxGenerator(difficulty, "div", classBoxName);



        //funzione per generare i div.box a seconda della difficoltà impostata
        function boxGenerator(boxNumber, tag, classToAdd) {

            //creo il div.container
            let addContainer = createElementWClass("div", "container");
        
            //lo posiziono in pagina
            document.querySelector("main").append(addContainer);
        
            //creo ciclo per creare 100 box dentro div.container al click
            for(let i = 1; i <= boxNumber; i++){
        
                //creo il div.box
                const addBox = createElementWClass(tag, classToAdd);
        
                //scrivo all'interno di div.box il numero della box
                addBox.append(i);

                //aggioungo i div.box in div.container
                addContainer.append(addBox);
        
                //creo evento cambio colore al click di div.box
                addBox.addEventListener("click",
                    function () {
        
                        //gameOff undefined
                        if(gameOff){
                        return;
                        }
        
                        //se il numero bomba e il numero div.box combacia, aggancio la bomba
                        if(bmbArray.includes(i)){
                            addBox.classList.add("bomb")
                            //mostro il messaggio "hai perso" con punti
                            resultDefeat.classList.remove("vanish");
                            showPoints.innerText = points;
                            //il gioco si blocca
                            gameOff = true;
        
                        } else {
                            //altrimenti aggiungo la classe clicked
                            addBox.classList.add("clicked");
                            //aggiungo un punto
                            points += 1;
                            showPoints.innerText = points;
                        }
        
                        //condizione di vincita
                        if(points >= difficulty - 16) {
                            //mostro il messaggio "hai perso"
                            resultWin.classList.remove("vanish");
                            //il gioco si blocca
                            gameOff = true;
                        }                    
        
                    }
                    
                );
        
            }
        }
        
            
    }
);



