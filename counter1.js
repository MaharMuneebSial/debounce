/*
const btuon=document.getElementById('btn')
btuon.addEventListener('click', counterwords)
function counterwords(){
    const text=document.getElementById('text1').value.length;
    console.log(text);
    const c= document.createElement('div')
    c.classList='box'
    const para= document.createElement('p');
    para.textContent=c;
    console.log(para);
    const b=text.document.appendChild(para);
    console.log(b);
    
    
    
   // const a=text.textContent;


}

*/

const btuon=document.getElementById('btn');
btuon.addEventListener('click',counter)
function counter(){
    const text=document.getElementById('text1').value.length;
    console.log(text);
    const para = document.createElement('p');
    para.textContent=`chrachter: ${text}`;
    console.log(para);
    

    document.getElementById('new').appendChild(para)

    
    

}