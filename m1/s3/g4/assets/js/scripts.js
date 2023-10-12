
let num = document.querySelector('.cartella');


for(let i =1; i <= 76; i++){
    
   
    let number = document.createElement('div')
    number.classList.add('number');
    number.innerText = i;

num.appendChild(number);
}
