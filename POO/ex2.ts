//////// ENCAPSULATION ET HERITAGE ////////////

// Implementer une class Animal et deux sous class Chien et Chat

class Animal {
    nom : string;
    age : number;

    constructor (nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }

    parler(): void {
        console.log(`${this.nom} fait un bruit.`);
    }
}



// Ajouter un comportement spécifique (aboyer() miauler())


class Chien extends Animal {
    constructor(nom: string, age: number) {
        super (nom, age);
    }
    Aboyer(): void {
        console.log("le chien aboie");
    }

    parler(): void {
        this.Aboyer();
    }
}

class Chat extends Animal {
    constructor(nom: string, age: number){
        super (nom, age);
    }
    Miauler(): void {
        console.log("le chat miaule");
    }

    parler(): void {
        this.Miauler();
    }
}

const chien = new Chien("Rex", 3);
const chat = new Chat("Minou", 6);

chien.parler;
chat.parler;