let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active10');
    last_active_dot.classList.remove('active10');
    dots[active].classList.add('active10');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



 const slider2 = document.querySelector(".slider10");
      const arrowLeft = document.querySelector(".arrow-left");
      const arrowRight = document.querySelector(".arrow-right");
      let currentSlide = 0;
  
      arrowLeft.addEventListener("click", () => {
        if (currentSlide > 0) {
          currentSlide--;
          updateSliderPosition();
        }
      });
  
      arrowRight.addEventListener("click", () => {
        if (currentSlide < Math.floor(slider2.children.length / 3)) {
          currentSlide++;
          updateSliderPosition();
        }
      });
      function updateSliderPosition() {
      const slideWidth = slider2.clientWidth / 3;
      slider2.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }