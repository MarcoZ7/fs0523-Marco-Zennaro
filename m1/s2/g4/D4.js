/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2){
    return l1 * l2;
}

let risultato = area(4, 5);
console.log(risultato);




/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b){
    if((a != b)){
        return (a + b);
        console.log(totale);
    }else if(a == b){
        return ((a+b)*3);
        
            
        }
}

let totale = crazySum(4, 5);
console.log(totale);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(c, d ){
   if( (c-d) > 19){
    return (c - d) * 3;
   }
     else if( (c-d) < 19){
    
    return c-d;

   }
}
let c =56;
    let risultat = crazyDiff (c, 19);
console.log(risultat);



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    if(20 >= n <= 100 || n == 400){
        
        return true;
         }else{
            return false;
         }
}
let  esito = boundary;
let n = 100;

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 'ciao mondo'
let b = 'epicode'

function epify(a, b){
    if(a != b){
        console.log('ciao mondo', 'epicode');
        return 'a'+ '' +'b';
    } else if(a == EPICODE){

    }
   

}
let stringa = epify;
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let z = 3;

function check3and7(z){
    if (z % 3 === 0 || z % 7 === 0){
        console.log('divisibile');
        
    }else{
        console.log('non divisibile');
    }

}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let k ='EPICODE'

function reverseString(z){
    return k.split('').reverse().join('');
}

let reverse = reverseString(z)
console.log(reverse);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
