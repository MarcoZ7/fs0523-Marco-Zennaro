/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let f = 12
let e = 12

if (f > e) {
  console.log('Il numero più grande è', f)
} else if (f < e) {
  console.log('Il numero più grande è', e)
} else {
  console.log('I numeri sono uguali')
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num2 =  6 ;
if (num2 != 5)
{
console.log('not equal');
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 10;
if((num3 % 5) == 0)
{
  console.log('divisibile per 5');
}
else
{
  console.log('non è divisibile per 5');
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 8;
let b = 3;
if(a == 8|| b == 8)
{
    console.log('verificato');
}else if (a + b == 8 || a - b == 8){
console.log('verificato');
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 30
let spedizione = 10
let checkout = totalShoppingCart

if (totalShoppingCart < 50) 
{
  checkout += spedizione
}

console.log('Totale da pagare:', checkout)


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 30
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let spedizione2 = 10
let checkout2 = totalShoppingCart2

if (totalShoppingCart < 50) 
{
  checkout2 += spedizione2
}

console.log('Totale da pagare:', checkout2)






/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let j1 = 13
let j2 = 25
let j3 = 5

if(j1 >= j2 && j3 >= j1)
{
  console.log(j3, j1, j2)
 } 
 else if (j2 >= j3)
 {
    console.log(j2, j3, j1 )
  }
   else {
    if (j2 >= j1 && j1 >= j3)
    {
   console.log(j2, j1, j3 )   
    }
    else{
      if(j2 >= j1){
        console.log(j2, j1, j3)
      }
    }
  }
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let d = 2

if (typeof d === 'numero') {
  console.log('è un numero!')
} else {
  console.log('non è un numero!')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numb = 32

if (numb % 2 === 0) {
  console.log('è  pari!')
} else {
  console.log('è dispari!')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 25
if (val < 10) {
  console.log('Meno di 10')
} else if (val < 20) {
  console.log('Meno di 20')
} else {
  console.log('Uguale a 15 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto'
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop('css')
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let z = []
z.push(1)
z.push(2)
z.push(3)
z.push(4)
z.push(5)
z.push(6)
z.push(7)
z.push(8)
z.push(9)
z.push(10)
console.log(z)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
z[9] = 100;
console.log(z)
/* SCRIVI QUI LA TUA RISPOSTA */
