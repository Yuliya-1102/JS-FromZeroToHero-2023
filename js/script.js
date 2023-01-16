$('.slider__wrapper').slick({
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  arrows: false,
  adaptiveHeight: true,
});

const arrowBtn = document.getElementById('arrow-btn');
const articleBg = document.querySelector('.article__bg');
const arrow = document.querySelectorAll('.arrow');


arrowBtn.addEventListener('click', () => {
  articleBg.classList.toggle('active');
  arrowBtn.classList.toggle('active');
  arrow.forEach(item => item.classList.toggle('active'));
});
