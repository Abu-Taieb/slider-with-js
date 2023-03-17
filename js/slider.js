// image array 
let images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
];

// get image id 
const imgId = document.getElementById('image-carousel');

let index = 0;
setInterval( () => {
    // condition 
    if(index === images.length){
        index = 0;}
    
    let image = images[index];
    index++;
    // set image 
    imgId.setAttribute('src', image)
},1000)