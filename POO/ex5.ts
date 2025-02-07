//////// GESTION DES FICHIERS ET DU STOCKAGE ////////////

// Lire et ecrire dans le local storage


// Ecrire dans le localStorage 
localStorage.setItem("nom", "John Doe");

//Lire une valeur dans le localStorage
let nom = localStorage.getItem("nom");
console.log(nom); // John Doe

// supprimer une valeur du localStorage
localStorage.removeItem("nom");

//Effacer completement le local storage
localStorage.clear();

