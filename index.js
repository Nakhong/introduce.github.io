// 이미지 랜덤.
var photo = document.querySelector(".photo");
const img1 = ["me1.jpg", "me2.jpg", "me3.jpg", "me4.jpg", "me5.jpg"];
const imgAll = document.createElement("img");
let chosenImage = img1[Math.floor(Math.random() * img1.length)];
imgAll.setAttribute("src", `./assets/${chosenImage}`);
photo.appendChild(imgAll);

// 이미지 랜덤으로 마우스 오버 하면 달라지기.

console.log(imgAll);
setInterval(() => {
  chosenImage = img1[Math.floor(Math.random() * img1.length)];
  imgAll.setAttribute("src", `./assets/${chosenImage}`);
  console.log(chosenImage);
}, 1500);
