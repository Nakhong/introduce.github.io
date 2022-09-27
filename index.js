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

// 클릭하면 스무스 하게 내려가기

var aTags = document.querySelectorAll("header a");
for (var i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      behavior: "smooth",
      top: target.offsetTop,
    });
  };
}

// 맨위로 올려주는 버튼 만들기.
var div = document.querySelector("#container");
var aTag = document.createElement("a");
aTag.innerHTML = "위로 가기";
aTag.setAttribute("class", "a");
aTag.setAttribute("href", "");
div.appendChild(aTag);
// 맨위로 올려주는 이벤트
aTag.addEventListener("click", (e) => {
  e.preventDefault();
  div.scrollTop = 0;
  window.scrollTo({
    behavior: "smooth",
    top: div.offsetTop,
  });
});
