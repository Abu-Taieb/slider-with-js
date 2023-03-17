let imgArray = [
  "images/pic-1.jpg",
  "images/pic-2.jpg",
  "images/pic-3.jpg",
  "images/pic-4.jpg",
  "images/pic-5.jpg",
  "images/pic-6.jpg",
  "images/pic-7.jpg",
  "images/pic-8.jpg",
  "images/pic-9.jpg",
];

const getId = document.getElementById("image-carousel");

let imgIndex = 0;
setInterval(() => {
  if (imgIndex === imgArray.length) {
    imgIndex = 0;
  }

  let imgLink = imgArray[imgIndex];
  getId.setAttribute("src", imgLink);
  imgIndex++;
}, 500);
