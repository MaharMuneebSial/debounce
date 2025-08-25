
const incre = document.getElementById('increment');
let global = 0;

incre.addEventListener('click', increment)
function increment() {
    global++;
    const text = document.getElementById('counter-value');
    text.textContent = global;

}
const  decrement= document.getElementById('decrement');
decrement.addEventListener('click', dec)
function dec(){
    global--;
     const text=document.getElementById('counter-value');
    text.textContent=global;
}
const  reset= document.getElementById('reset');
reset.addEventListener('click', rest)
function rest(){
    global=0;
     const text=document.getElementById('counter-value');
     text.textContent=global;
}



