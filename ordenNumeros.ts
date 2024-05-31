/*dado el siguiente arreglo (4,7,9,3,1,45,67,23,29,78,11,16)
crear un programa que encuentre cual es el numero mas grande del
e imprimirlo por consola

Almacenar el numero mas grande en una variable globar y pasarlo
a una funcion àra determinar si el numero es par o impar*/

import *as readlinesync from 'readline-sync';
let arregloNumeros :number []  = new Array (4,7,9,3,1,45,67,23,29,78,11,16);
let numMaximo : number = arregloNumeros [0];

for (let i=0 ; i<12 ; i++) {
    if (arregloNumeros [i] > numMaximo){
    numMaximo = arregloNumeros [i]
}
}   

/*declarar si es par o impar*/
function parImpar (numero:number) :string {
    if (numero %2 ==0) {
        return "par"
    }
    else {return "impar"

    }
}

console.log ("el numero mas grande es: " + numMaximo, "y es", parImpar (numMaximo))