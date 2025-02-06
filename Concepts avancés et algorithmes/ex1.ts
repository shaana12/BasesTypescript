//////// MANIPULATION DE CHAINES DE CARACTERES ////////////

const chaine = "Hello World !"
const pal = "Hello olleH"

// Inverser une chaine de caractere
let result="";
for (let i=chaine.length-1; i>=0; i--) {
    result += chaine[i];
}

console.log(result);

// Vérifier si une chaine est un palyndrome

let isPal=true;
for (let i=0; i<pal.length; i++) {
    let j = pal.length-1 -i;
    if (pal[i] != pal [j]) {
        isPal= false;
        break;
    }
}

if (isPal) {
    console.log("la chaine est un palyndrome");
} else {
    console.log("la chaine n'est pas un palyndrome");

}


// remplacer tous les espaces par -
let chaine2= "";
for (let i =0 ; i< chaine.length; i++) {
    if (chaine[i] == " ") {
        chaine2 += "-";
    } else {
        chaine2 += chaine[i];
    }
}

console.log(chaine2);