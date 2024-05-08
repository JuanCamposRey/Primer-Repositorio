import*as readlineSync from 'readline-sync';

let numeroA :number =1
for (numeroA =1; numeroA <=100; numeroA++){
    console.log ("Numero: " + numeroA);

if (numeroA %2==0 && numeroA /3==0 ) {console.log ("Ambos son multiplos")

}
    else if (numeroA %2==0 || numeroA %3==0){
        if(numeroA %2 ==0){console.log (numeroA, "Es multiplo de 2");

        }
        if (numeroA %3 ==0){console.log (numeroA, "Es multiplo de 3")

        }

    } 
}