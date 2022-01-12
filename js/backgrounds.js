const images = [
    "0.jpg",
    "1.jpg",
    "2.jpeg",
    "3.jpg",
    "4.jpg",
    "5.jpeg",
    "6.jpg",
    "7.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);
