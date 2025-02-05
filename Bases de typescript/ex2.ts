//////// CONDITIONS ET BOUCLES ////////////

// Vérifier si un nombre est pair ou impair

const a = 4;

if (a%2 ==0) {
    console.log(a, "est un nombre pair");
} else {
    console.log(a, "est un nombre impair");
}

// Trouver le plus grand de 3 nombres 

const x = 2;
const y = 5 ; 
const z = 20;

if (x>y){
    if (x>z){
        console.log(x, "est le plus grand des trois nombres");
    } else {
        console.log(z, "est le plus grand des trois nombres");
    }
} else {
    if (y>z){
        console.log(y, "est le plus grand des trois nombres");

    } else {
        console.log(z, "est le plus grand des trois nombres");
    }
}

// Afficher les nombresde 1 à 100 ave une boucle for

for (let i=1; i<=100; i++) {
    console.log(i);
}

// Générer les nombres pairs entre 1 et 50 avec while

let e=1;
while (e<=50) {
    if (e%2 == 0) {
        console.log (e);
    }
    e++;
}
