//////// FONCTIONS ////////////

// Créer une fonction qui retourne la somme de deux nombres

function somme (a: number,b: number) :number {
    const result = a+b;
    console.log ("result");
    return result;
}

// Ecrire une fonction qui vérifie si un nombre est premier

function premier (nombre: number): boolean {
    for (let t= 2; t<nombre; t++) {
        if (nombre%t==0) {
            return false;
        }
    }
    return true;
}

console.log(premier(7));
console.log(premier(10));
console.log(premier(1447));

// Implémenter une fonction pour calculer la factorielle d'un nombre

function factorielle (nbr: number): number {
    let fact =  1;
    for (let r=1; r <= nbr; r++) {
        fact = fact*r;
    }
    return fact;
}

console.log(factorielle(8));