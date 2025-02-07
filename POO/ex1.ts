//////// CLASSES ET OBJETS ////////////

// creer une classe voiture avec des attributs (marque modele annee)

class Voiture {
    marque : string;
    modele : string;
    annee : number;

    // Ajouter une methode pour afficher les infos d'une voiture

    constructor (marque: string, modele: string, annee: number) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;

    }
}

