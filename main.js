'use strict';

{
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove("current");
      currentIndex++;  //この時点で画像が0から1になる。
if (currentIndex >= images.length) {
  currentIndex =0;
}
      images[currentIndex].classList.add("current");
      play();//ループ
    },4000);
   
  }
  
const images = document.querySelectorAll('.hero img');

let currentIndex = 0; //0番目から始まる
 play();  //ループ
}