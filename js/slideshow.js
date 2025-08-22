const slides = document.querySelectorAll('.slide');
const auto = true;
let intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};


if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}