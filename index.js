var photo = document.querySelector(".photo");
const img1 = ["me1.jpg", "me2.jpg"];

const chosenImage = img1[Math.floor(Math.random() * img1.length)];

const imgAll = document.createElement("img");

imgAll.src = `./assets/${chosenImage}`;

photo.appendChild(imgAll);
