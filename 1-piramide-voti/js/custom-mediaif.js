//Questo codice fornisce la media artimetica dei voti di un alunno.
//Il risultato si vede in console dell'elemento ispeziona

//---------MEDIA ARITMETICA---------
//dalla console, vengono passati i voti dell'alunno
// la funzione ritorna come risultato la media artimetica
//variabile sum impostata a zero, un ciclo for per la somma di tutti i voti presenti nell'array scores, ritorna la sum / la lunghezza dell'array
function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

//------------------


//---------VOTO IN BASE ALLA MEDIA--------- 
function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
}

//------------------

  
//---------CONTROLLO SUPERAMENTO DEL CORSO--------- 
//è una funzione per verificare se hai passato o meno il corso
// verifica se il voto del test sia uguale o meno ad F.
  //se uguale ad F --> bocciato (False)
  //se diverso --> sei passato (true)
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

//------------------
 

//---------MESSAGGIO DA DARE ALLO STUDENTE---------
//IF --> La funzione restituisce un messaggio che include la media della classe e il voto dello studente, indicando che ha superato il corso.
//ELSE --> La funzione restituisce un messaggio che include la media della classe e il voto dello studente, indicando che non ha superato il corso.
function studentMsg(totalScores, studentScore) {
    if (hasPassingGrade(studentScore)) {
      return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
    } else {
      return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
    }
}

//attraverso la console: passo alla funzione messaggio allo studente
  //i voti presi da tutti gli studenti della classe e, dentro la funzione, richiamo la funzione della media
  //la media dei voti dello studente, richiamando la funzione che genera la media.
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])));  