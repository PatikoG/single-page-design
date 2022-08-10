const slidereffect = document.querySelectorAll(".images");
const leftslide = document.getElementById("left");
const rightslide = document.getElementById("right");

const savedImg = [
    "./starter-code/assets/image-slide-1.jpg",
    "./starter-code/assets/image-slide-2.jpg",
    "./starter-code/assets/image-slide-3.jpg",
    "./starter-code/assets/image-slide-4.jpg",
    "./starter-code/assets/image-slide-5.jpg"
];

let starter = 1;

function slideright(rightslide){
   starter += 1;
   for(let i = 0; i < slidereffect.length; i++){
    slidereffect[i].src = savedImg[(starter + i) % savedImg.length ];
    
   }
}


function slideleft(leftslide){
    starter -= 1;
    if(starter < 0){
        starter = savedImg.length - 1;
    }
   for(let i = 0; i < slidereffect.length; i++){
    slidereffect[i].src = savedImg[(starter + i) % savedImg.length ];
    
   }
}

console.log(slidereffect);


