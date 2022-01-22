const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const imageWrapper = document.createElement("div");

bgImage.src = `img/${randomImage}`;
bgImage.classList.add("bg-image");
imageWrapper.classList.add("image-wrapper");
document.body.appendChild(imageWrapper);
imageWrapper.appendChild(bgImage);
