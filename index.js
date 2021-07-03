const bars = document.querySelector('.bars')
const times=document.querySelector('.times')
const menu = document.querySelector('.container')
bars.addEventListener('click', () => {
    menu.classList.add('active')
    bars.classList.add('active')
    times.classList.add('active')
})
times.addEventListener('click', () => {
    menu.classList.remove('active')
    bars.classList.remove('active')
    times.classList.remove('active')
})

const first=document.querySelector('.img1')
const second=document.querySelector('.img2')
const third = document.querySelector('.img3')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')
const prev_btn=document.querySelector('.prev-btn')
const next_btn=document.querySelector('.next-btn')
dot1.addEventListener('click', () => {
    dot2.classList.remove('active')
    dot3.classList.remove('active')
    dot1.classList.add("active");
    first.classList.add('active')
    third.classList.remove('active')
    second.classList.add('active')
})
dot2.addEventListener('click', () => {
    dot1.classList.remove('active')
    dot3.classList.remove('active')
    dot2.classList.add('active')
    second.classList.remove('active')
    first.classList.remove('active')
    third.classList.remove('active')
})
dot3.addEventListener('click', () => {
      dot1.classList.remove("active");
      dot2.classList.remove("active");
    dot3.classList.add('active')
    third.classList.add('active')
    first.classList.remove('active')
    second.classList.add('active')
})
let x = 0;
prev_btn.addEventListener('click', () => {
            dot2.classList.remove("active");
            dot3.classList.remove("active");
            dot1.classList.add("active");
        first.classList.add('active')
        second.classList.add('active')
        third.classList.remove('active')
    
})
next_btn.addEventListener('click', () => {
     dot1.classList.remove("active");
     dot2.classList.remove("active");
     dot3.classList.add("active");
        third.classList.add('active')
        second.classList.add('active')
        first.classList.remove('active')
    
 })
// const btn_slide = document.querySelectorAll('.btn-slide')
//    btn_slide.addEventListener('click', function () {
//      let x = 0;
//      prev_btn.addEventListener("click", () => {
//        x--;
//      });
//      next_btn.addEventListener("click", () => {
//        x++;
//      });
//      if (x <= -1) {
//        first.classList.add("active");
//      }
//      if ((x = 0)) {
//        second.classList.remove("active");
//      }
//      if (x >= 1) {
//        third.classList.add("active");
//      }
    
// })
