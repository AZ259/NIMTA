 //slider
 let i = 0;
 let images = [
    "asset/media/images/Web Design/IMG_E4522.jpg",
    "asset/media/images/Web Design/IMG_E4526.jpg"
   // "asset/media/images/Web Design/IMG_E4523.jpg",
   // "asset/media/images/Web Design/IMG-20221213-WA0002.jpg",
   // "asset/media/images/Web Design/IMG-20221213-WA0014.jpg",
   // "asset/media/images/Web Design/IMG-20221213-WA0015.jpg",
   // "asset/media/images/Web Design/IMG-20221213-WA0019.jpg"
 ];
 let time = 1000;  // changes every 1 seconds






 
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

