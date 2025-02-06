//////// RECHERCHES ET TRIS ////////////

// Implémenter Bubble Sort et Insertion Sort

// let arr = [3, 6, 1, 56, 48, 4, 22, 11];

// function bubbleSort (arr) {
//     let swapped=false;
//     do{
//         swapped = false;
//     for (let i=1; i<arr.length ; i++) {
//         let j = i-1;
//         let element = arr[i];
//         let precedent = arr[j];
        
        
//         if (arr[j]>arr[i]) {
//             arr[j] = element;
//             arr[i] = precedent;
//             let swapped = true;
//         }
//     }}while (swapped);
//     return arr;
// }

// console.log(bubbleSort(arr));





function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false; // Réinitialiser swapped à chaque tour
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Échange des éléments adjacents
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // Marquer qu'un échange a eu lieu
            }
        }
    } while (swapped); // Répéter tant qu'il y a des échanges

    return arr;
}

// Test
let arr = [3, 6, 1, 56, 48, 4, 22, 11];
console.log(bubbleSort(arr)); // [1, 3, 4, 6, 11, 22, 48, 56]




// Implémenter Recherche Linéaire et Recherche Binaire

const key = 4;



function rechercheLineaire (arr, key) {
    for (let i=0; i<arr.length; i++){
        if (arr[i]==key) {
            console.log(key ," se trouve à l'index : ", i);
            return i;
        }
    }
    console.log("l'element n'est pas dans le tableau");
    return -1;
}

console.log(rechercheLineaire(arr, key));

// function rechercheBinaire (arr, key) {
//     let mid = arr.length/2;
//     if (arr[mid]==key) {
//         return mid;
//     } 
//     if (arr[mid]<key) {
//         for (let i=0; i<mid; i++) {
//             if (arr[i]==key) {
//                 return i;
//             } 
//         }
//     }
//     if (arr[mid]>key) {
//         for (let i=mid+1; i<arr.length; i++) {
//             if (arr[i]==key) {
//                 return i;
//             } 
//         }
//     }
//     return -1;
//  }

function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === key) {
            console.log(key, "se trouve à l'index :", mid);
            return mid;
        } else if (arr[mid] < key) {
            left = mid + 1; // Chercher à droite
        } else {
            right = mid - 1; // Chercher à gauche
        }
    }

    console.log(key, "n'est pas présent dans le tableau.");
    return -1;
}