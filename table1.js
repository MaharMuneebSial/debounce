const btuon=decoument.getElementById('btn1');
btuon.addEventListener('click', btn1)
function btn1(){
    const table=document.getElementById('mytab');
    const row =table.insertRow(0);
    const cell1= table.insertCell(0);
    const cell2= table.insertCell(1);
    cell1.innerHTML= "NEW CELL1"
    cell1.innerHTML= "NEW CELL2"
}

const btuon1= document.getElementById('btn2')
btuon1.addEventListener('click',btn2)
function btn2(){
    document.getElementById('mytab').deleteRow(0);
}


