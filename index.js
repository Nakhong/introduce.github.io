// 태그를 만들어 놓고 집어 넣으면 됨.
// 내 사진들
$("#photo").click(function () {
  $("#main").html("<h1>내사진들</h1>");

  let req = $.ajax({
    url: "db.json",
    dataType: "json",
  });

  req.done(function (data, status) {
    for (let i = 0; i < data.image.length; i++) {
      let image = `<div class="image"><image src="${data.image[i].image}"/> <p>${data.image[i].p}</p></div>`;
      $(image).attr;
      $("#main").append(image);
    }
  });
});

//자기소개

// $("#profiles").click(function () {
//   $("#main").html("<h1>자기소개</h1>");
//   $("#main").append("<div><ul></ul></div>");
//   $("#main>div>ul").attr("class", "hi");

//   let req = $.ajax({
//     url: "db.json",
//     dataType: "json",
//   });

//   req.done(function (data, status) {
//     for (let i = 0; i < data.memo.length; i++) {
//       let li = `<li>${data.memo[i].li}</li>`;
//       $(".hi").append(li);
//     }
//   });
// });
