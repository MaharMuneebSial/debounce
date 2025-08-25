
const nextone=document.getElementById('next');
nextone.addEventListener('click' , nextimg)
function nextimg(){
    console.log(document.getElementById('img1').style.display);
    

    if(document.getElementById('img1').style.display == 'block')
    {
  document.getElementById('img1').style.display='none';
    document.getElementById('img2').style.display='block';

    }
   else if(document.getElementById('img2').style.display == 'block')
    {
  document.getElementById('img2').style.display='none';
    document.getElementById('img3').style.display='block';

    }
    else if(document.getElementById('img3').style.display == 'block')
    {
  document.getElementById('img3').style.display='none';
    document.getElementById('img4').style.display='block';

    }
     else if(document.getElementById('img4').style.display == 'block')
    {
  document.getElementById('img4').style.display='none';
    document.getElementById('img5').style.display='block';

    }
 else if(document.getElementById('img5').style.display == 'block')
    {
  document.getElementById('img5').style.display='none';
    document.getElementById('img1').style.display='block';

    }

}




const previous=document.getElementById('previous');
previous.addEventListener('click' , nextimage1)
function nextimage1(){
    console.log(document.getElementById('img1').style.display);
    

    if(document.getElementById('img1').style.display == 'block')
    {
  document.getElementById('img1').style.display='none';
    document.getElementById('img5').style.display='block';

    }
   else if(document.getElementById('img2').style.display == 'block')
    {
  document.getElementById('img2').style.display='none';
    document.getElementById('img1').style.display='block';

    }
    else if(document.getElementById('img3').style.display == 'block')
    {
  document.getElementById('img3').style.display='none';
    document.getElementById('img2').style.display='block';

    }
     else if(document.getElementById('img4').style.display == 'block')
    {
  document.getElementById('img4').style.display='none';
    document.getElementById('img3').style.display='block';

    }
else if(document.getElementById('img5').style.display == 'block')
    {
  document.getElementById('img5').style.display='none';
    document.getElementById('img4').style.display='block';
    }
}


