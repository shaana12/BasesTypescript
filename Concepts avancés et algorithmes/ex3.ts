//////// RECURSIVITE ////////////

// Calculer la suite de fibonacci



function Fibonnacci (i) {
    if (i == 0) {return 0}
    if (i == 1) {return 1}
    return Fibonnacci(i-1) + Fibonnacci(i-2)
}

for (let j=0; j<=20; j++) {
    console.log(Fibonnacci(j));
}

// Résoudre le problème des tours de Hanoï