//////// OBJETS (OBJECTS) ////////////

// Créer un objet Personne avec nom, age et ville

interface Personne {
    name: string;
    age: number;
    city: string;
    Methode: () => void;
    // Ajouter une méhode qui affiche Bonjour, je suis (nom)

    //Méthode de la classe 


}

// Accéder et modifier ses propriétés

const personne :Personne = {
    name: "shana",
    age : 23,
    city: "Belcodene",

    Methode: function() {
        console.log(`Bonjour, je suis ${this.name}`);
    }
}

personne.Methode();

console.log(personne.name);
personne.name = "armand";
console.log(personne.name);


