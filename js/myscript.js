// chiedo all'utente il suo nome
var nome = prompt ("Nome");
var cognome = prompt ("Cognome");
var colore = prompt ("Colore preferito")

console.log(nome);
console.log(cognome);
console.log(colore);

// saluto l'utente
document.getElementById("titolo").innerHTML = nome + cognome + colore + "19";
