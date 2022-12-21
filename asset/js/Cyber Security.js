 //slider
 let i = 0;
 let images = [
    "asset/media/images/Cyber Security/IMG_20221219_093223_714.jpg",
    "asset/media/images/Cyber Security/IMG_20221219_093231_071.jpg",
    "asset/media/images/Cyber Security/IMG_20221219_093239_692.jpg",
    "asset/media/images/Cyber Security/IMG_20221219_093242_440.jpg"
 ];
 let time = 3000;  // changes every 3 seconds






 
//change image
 function changeImg(){
     document.slide.src = images[i];

   if(i < images.length -1){
       i++;
   }else {
       i = 0;
   }
   
   setTimeout("changeImg()", time)
}

 window.onload = changeImg;

