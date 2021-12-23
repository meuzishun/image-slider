const btns = document.querySelectorAll('.image-slider > button');
const dots = [...document.querySelectorAll('.btn-group > button')];
const imageContainer = document.querySelector('.image-container');

let counter = 0;

const positions = [
  'position1',
  'position2',
  'position3',
  'position4',
  'position5',
];

const moduloCounter = function () {
  if (counter < 0) counter += 5;
  if (counter > 4) counter %= 5;
};

const changeID = function (index) {
  imageContainer.id = positions[index];
}

const nextImage = function () {
  counter++;
  moduloCounter();
  changeID(counter);
  changeActiveDot(counter);
};

const prevImage = function () {
  counter--;
  moduloCounter();
  changeID(counter);
  changeActiveDot(counter);
};

const changeImage = function (e) {
  const btnID = e.target.id;
  if (btnID === 'prev-btn') prevImage();
  if (btnID === 'next-btn') nextImage();
  clearInterval(timer);
  timer = setInterval(nextImage, 5000);
};

const findDotIndex = function (dot) {
  return dots.indexOf(dot);
};

const changeActiveDot = function (index) {
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[index].classList.add('active');
};

const handleDotClick = function (e) {
  const index = findDotIndex(e.target);
  changeActiveDot(index);
  counter = index;
  changeID(counter);
  clearInterval(timer);
  timer = setInterval(nextImage, 5000);
}

let timer = setInterval(nextImage, 5000);

btns.forEach((btn) => btn.addEventListener('click', changeImage));
dots.forEach((btn) => btn.addEventListener('click', handleDotClick));
