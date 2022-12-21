 //slider
 let i = 0;
 let images = [
     "asset/media/images/python/IMG_7916.jpg",
     "asset/media/images/python/IMG_7918.jpg",
     "asset/media/images/python/IMG_7919.jpg",
     "asset/media/images/python/IMG_7920.jpg",
     "asset/media/images/python/IMG_8034.jpg",
     "asset/media/images/python/IMG_8035.jpg"
 ];
 let time = 2000;  // changes every 2 seconds






 
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

