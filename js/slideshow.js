/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*  Wallpaper slideshow        */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let intervalTime = 5000;
let slideInterval;
let slideCount;
let slides;

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

function countImages(callback) {
    let count = 1;
    const img = new Image();
    img.onload = () => {
        count++;
        img.src = `img/${count}.jpg`;
    };
    img.onerror = () => {
        callback(count - 1);
    };
    img.src = `img/${count}.jpg`;
}

countImages(slideCount => {
    const slider = document.createElement("div");
    slider.classList.add("slider");

    for (let i = 0; i < slideCount; i++) {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.style.backgroundImage = `url('img/${i + 1}.jpg')`;
        if (i === 0) slide.classList.add("current");
        slider.appendChild(slide);
    }

    document.getElementById("wrapper-slider").appendChild(slider);
    slides = document.querySelectorAll('.slide');

    slideInterval = setInterval(nextSlide, intervalTime);
});