var nome = prompt ("Nome");
var cognome = prompt ("Cognome");
var colore = prompt ("Colore preferito")

console.log(nome);
console.log(cognome);
console.log(colore);


document.getElementById("titolo").innerHTML = "Le tue credenziali sono:" + " " + nome + cognome + colore + "19";
