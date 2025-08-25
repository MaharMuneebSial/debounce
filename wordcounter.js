
const buton = document.getElementById('btn');
buton.addEventListener('click', convertword);
function convertword() {
    const text = document.getElementById('text1').value;
    const convert = text.length;
    console.log(convert)


   const para= document.createElement('p');
   para.textContent=convert;
   console.log(para);

   document.getElementById('new').appendChild(para);
   
}