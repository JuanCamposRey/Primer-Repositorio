import *as readlinesync from 'readline-sync';
let dimensionDeArreglos:number = readlinesync.questionInt ("ingrese la dimension del arreglo: ")
let arr1 :number [] = new Array (dimensionDeArreglos)
let arr2: number [] = new Array (dimensionDeArreglos)
let arr3 : number[] = new Array (dimensionDeArreglos);

function alAzar (arr1 : number, arr2 : number) : number{
   let numeroDevuelto:number = Math.floor (Math.random ()*100)
   return numeroDevuelto
}

function cargarArreglo1 (arr1:number[],dimensionDeArreglos:number){
    let i : number;
    for (i = 0; i<dimensionDeArreglos; i++){
        arr1[i] = alAzar (0,100)

    }
}
function cargarArreglo2 (arr2:number[], dimensionDeArreglos:number){
    let i:number;
    for( i= 0; i<dimensionDeArreglos; i++){
        arr2[i] = alAzar (0,100)
    }
}

function sumarArreglos (arr1:number[], arr2:number[], arr3:number[], dimensionDeArreglos:number){
    let i:number;
    for (i=0; i<dimensionDeArreglos; i++){
        arr3[i]= arr1[i] + arr2[i]
    }
}
function mostrarArreglo (arr1:number[], dimensionDeArreglos:number){
    let linea : string =" - "
    let i:number
        for (i = 0; i<dimensionDeArreglos; i++){
            linea+= `${arr1[i]}`
        }
        console.log (linea)
}
function mostrarArreglo2 (arr2:number[], dimensionDeArreglos:number){
    let linea : string = " - "
    let i : number
        for (i=0; i<dimensionDeArreglos; i++){
            linea+=`${arr2[i]}`
        }
        console.log (linea)
}
console.log ("La suma de los arreglos es: ", sumarArreglos (arr1,arr2, arr3, dimensionDeArreglos))

function mostrarArreglo3 (arr3:number[], dimensionDeArreglos:number){
    let linea : string = " - "
   let i : number
   for (i = 0; i<dimensionDeArreglos; i++){
    linea+= `${arr3[i]}`

   }
   console.log (linea)

}
cargarArreglo1(arr1, dimensionDeArreglos)
cargarArreglo2(arr2, dimensionDeArreglos)
mostrarArreglo(arr1, dimensionDeArreglos)
mostrarArreglo2(arr2, dimensionDeArreglos)
mostrarArreglo3(arr3, dimensionDeArreglos)
sumarArreglos (arr1, arr2, arr3,dimensionDeArreglos)
