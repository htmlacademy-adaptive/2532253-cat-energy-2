const sliderControl = document.querySelector('.slider__control');
const slider = document.querySelector('.slider');
const nav = document.querySelector('.main-nav');
const toggleButton = document.querySelector('.main-nav__toggle');

nav.classList.add('main-nav--closed');

if (slider){
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
}

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('main-nav--closed');
  nav.classList.toggle('main-nav--opened');
});
