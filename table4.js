
function add(){
  const name =document.getElementById('name').value
  const age= document.getElementById('age').value

  const table= document.getElementById('mytable')

  const row = table.insertRow(1)

  const cel1=row.insertCell(0)
  const cel2=row.insertCell(1)
  const cell3= row.insertCell(2)

  let delbtn = document.createElement('button')
  delbtn.textContent = "Delete"
  delbtn.style.background = "red"
  delbtn.style.padding = '20px'
  delbtn.style.color = 'pink'
  
  cell3.appendChild(delbtn);
  delbtn.onclick = function(){
    row.remove();
  }
  
  



  cel1.innerHTML=name
  cel2.innerHTML=age
  


  document.getElementById('name').value=" "
  document.getElementById('age').value=" "
  
  

}