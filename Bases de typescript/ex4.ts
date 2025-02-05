//////// TABLEAUX (ARRAYS) ////////////

// Trouver le maximum d'un tableau

const array = [2, 4, 56, 79, 20, 9];
let max = array[0];

for (let o=1; o< array.length; o++) {
   if (max<array[o]) {
    max = array[o];
   }
}

console.log(max);

// Trier un tableau sans utiliser .sort()

for (let i=0; i< array.length; i++) {
    let remplacant;
    let remplacant2;
    for (let j=0; j< array.length; j++) {
        if (array[i] < array[j]) {
            remplacant = array[j]
            remplacant2 = array[i]
            array[i]= remplacant;
            array[j]= remplacant2;
        }
    }
}

console.log(array);

// Vérifier si un tableau est un palyndrome

const palindrome = ['k', 'a', 'y', 'a', 'k'];
let isPalindrome = true;

for (let i = 0; i < palindrome.length / 2; i++) {
    const j = palindrome.length - 1 - i; 
    if (palindrome[i] !== palindrome[j]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Ceci est un palindrome");
} else {
    console.log("Ceci n'est pas un palindrome");
}
