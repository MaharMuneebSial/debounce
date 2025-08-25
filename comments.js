
const buton = document.getElementById('post-btn');
buton.addEventListener('click' , commentaction)
function commentaction(){

    const text=document.getElementById('comment-input').value;
    console.log(text);
    if(text.length===0){
        return;
    }
    const divi= document.createElement('div');
    divi.className='comment';

    const para = document.createElement('p');
    para.textContent=text;

    divi.appendChild(para)
    document.getElementById('comments').appendChild(divi)
    
}