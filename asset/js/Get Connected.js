 //slider
 let i = 0;
 let images = [
    "asset/media/images/Get Connected/IMG_20221130_123632_732.jpg",
    "asset/media/images/Get Connected/IMG_20221130_123704_245.jpg",
    "asset/media/images/Get Connected/IMG_20221130_123713_706.jpg"
 ];
 let time = 5000;  // changes every 5 seconds






 
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

