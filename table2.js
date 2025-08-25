

function add(){

    console.log("checking...")

    const name = document.getElementById('name').value
    const age = document.getElementById('age').value

    if(name==='' || age ===''){
        return
        
    }

    const table = document.getElementById("mytable")

let row = table.insertRow(1)

let cell1 =row.insertCell(0);
let cell2 =row.insertCell(1);

cell1.innerHTML =name;
cell2.innerHTML = age;


 document.getElementById('name').value='';
 document.getElementById('age').value='';
 
}