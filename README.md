# 📚 Esercizi di Base JavaScript

Questo progetto contiene due esercizi di base in JavaScript. Entrambi gli esercizi utilizzano `console.log` per visualizzare i risultati nell'ispezione del browser.
PURAMENTE DIDATTICO, per imparare le basi di JS.
Serie di esercizi, seguendo il corso di **freecodecamp.org** (https://www.freecodecamp.org/), nello specifico https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/
 - lezione 1: Learn Introductory JavaScript by Building a Pyramid Generator
 - lezione 2: Review JavaScript Fundamentals by Building a Gradebook App

## 📝 Descrizione

1. **Piramide di Caratteri**: Questo esercizio crea una piramide di caratteri, sia normale che rovesciata, e la stampa sulla console.
2. **Media dei Voti**: Questo esercizio calcola la media dei voti di uno studente e determina se ha superato o meno il corso.

## 📁 Struttura del Progetto

- `js/custom-piramide.js`: Codice per la generazione della piramide di caratteri.
- `js/custom-mediaif.js`: Codice per il calcolo della media dei voti e la verifica del superamento del corso.

## 💻 Apprendimento

Entrambi gli esercizi sono **carichi di commenti** per poter studiare e apprendere i concetti chiave delle basi di JS.

### Piramide di Caratteri

Questo codice genera una piramide di caratteri (character = "#";) e la stampa sulla console. La piramide può essere normale o invertita, a seconda del valore della variabile inverted.
 - Vengono inizializzate delle **costanti** e delle **variabili**.
 - Creazione di una **funzione** per realizzare una stringa utilizzando il metodo **.repeat**.
 - Utilizzo di un **ciclo for** per la creazione di un array usando il metodo **.unshift** per mettere l'elemento all'inizio dell'array, o il metodo **.push** per posizionare l'elemento alla fine dell'array.
 - Utitizzo di un ciclo **for of** per stampare in console.log la piramide.

#### Ciclo for loop

for (let i = 1; i <= count; i++) {}

utilizzato per iterare un numero specifico di volte.

#### Ciclo for of loop
for (const row of rows) {}

Viene utilizzato per iterare direttamente attraverso gli elementi di un iterabile (array, stringa, ecc.), senza bisogno di un indice.

### Media voti studenti

Questo codice fornisce la media artimetica dei voti di un alunno e dichiara se ha passato o meno il corso e la stampa sulla console.
 - la **funzione** ritorna come risultato la **media artimetica**: utilizzando un **ciclo for** e il metodo **.length** sull'array dei voti.
 - creato una **funzione** con **if else** per associare un voto letterale ad ogni valore numerico.
 - **funzione** per controllare se il corso è stato passato, ritrona un **valore booleano**.

## 📜 Licenza

Questo progetto è distribuito sotto la licenza MIT. Vedi il file LICENSE per maggiori dettagli.

