/*
const nextone=document.getElementById('next');
nextone.addEventListener('click' , nextimg)
function nextimg(){
    const image= document.getElementById('img');
    console.log(a);
    image.appendChlid()
    

}

/*

const pre=document.getElementById('perious');
pre.addEventListener('click' , preimg)
function preimg(){
   

}
*/

// Step 1: List of images
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];

let index = 0; // Track which image is currently shown

const imgElement = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Step 2: Function to update image
function updateImage() {
  imgElement.src = images[index];
}

// Step 3: Set initial image
updateImage();

// Step 4: Button Events
nextBtn.onclick = function () {
  index = (index + 1) % images.length; // Loop to start
  updateImage();
};

prevBtn.onclick = function () {
  index = (index - 1 + images.length) % images.length; // Loop to end
  updateImage();
};
