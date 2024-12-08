const sliderControl = document.querySelector('.slider__control');
const slider = document.querySelector('.slider');

let flag = false;
sliderControl.addEventListener('click', () => {
  if (!flag) {
    slider.classList.add('slider--after');
    flag = true;
  }else{
    slider.classList.toggle('slider--after');
    slider.classList.toggle('slider--before');
  }
});
