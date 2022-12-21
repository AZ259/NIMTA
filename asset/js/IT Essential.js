 //slider
 let i = 0;
 let images = [
     "asset/media/images/IT Essential/IMG-20221215-WA0006.jpg",
     "asset/media/images/IT Essential/IMG-20221215-WA0007.jpg",
     "asset/media/images/IT Essential/IMG-20221215-WA0008.jpg"
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

