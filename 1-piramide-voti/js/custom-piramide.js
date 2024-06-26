//Questo codice genera una piramide di caratteri (character = "#";) e la stampa sulla console. La piramide può essere normale o invertita, a seconda del valore della variabile inverted

//costante per carattere utilizzato per la creazione della piramide
const character = "#";

//costante per il numero di righe della piramide
const count = 8;

//costante array vuoto, che conterrà le linee della piramide
const rows = [];

//variabile booleana che determina se la piramide è invertita
let inverted = false;


// ---------CREAZIONE STRINGA---------
//Questa funzione prende rowNumber (il numero della riga corrente) e rowCount (il numero totale di righe) come parametri.
//Costruisce una stringa che rappresenta una riga della piramide, con gli spazi necessari per centrare i caratteri #.
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

//" ".repeat(rowCount - rowNumber) crea gli spazi necessari per centrare i caratteri # sulla sinistra della riga.
//character.repeat(2 * rowNumber - 1) crea la sequenza di caratteri # per la riga corrente. La prima riga è vuota perché rowNumber è 0.
// -------------------------


// ---------CREAZIONE ARRAY---------
//Ciclo For che va da 1 al valore di count (8)
//Se inverted è VERO, inserisce ogni riga generata all'inizio dell'array rows usando unshift. Questo crea una piramide invertita.
//quindi nell'array rows[] aggiunge, all'inizio dell'array, l'elemento. Questo grazie a .unshift
//letteralmente metti all'inizio dell'array la stringa che viene fuori dalla funzione padRow
//Se inverted è FALSE, .push alla fine dell'array
  
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

// .unshift metodo per mettere elemento all'inizio dell'array
// .push metodo per mettere elemento alla fine dell'array
// -------------------------
  

// ---------CREAZIONE STRINGA FINALE e STAMPA IN CONSOLE---------
// ciclo for la costante row assume il valore dell'array rows, e rows è l'elemento iterabile.
// ogni riga, viene aggiunta alla variabile result, separata da una nuova riga \n

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

//stampa la piramide nella console di ispeziona elemento
//inverted true, piramide al contrario
//inverted false, piramide giusta
console.log(result);