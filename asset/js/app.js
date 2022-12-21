 //slider
   let i = 0;
   let images = [
    "asset/media/images/naowa group 1.jpg",
    "asset/media/images/naowa group 2.jpg",
    "asset/media/images/IMG_3049.jpeg"
   ];
   let time = 3000;  // changes every 3 seconds






   
 //change image
   function changeImg(){
       document.Slide.src = images[i];

     if(i < images.length -1){
         i++;
     }else {
         i = 0;
     }
     
     setTimeout("changeImg()", time)
 }

   window.onload = changeImg;

