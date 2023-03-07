// 태그를 만들어 놓고 집어 넣으면 됨.
$("#photo").click(function () {
  $("#main").html("<h1>내사진들</h1>");

  let req = $.ajax({
    url: "db.json",
    dataType: "json",
  });

  req.done((data, status) => {
    for (let i = 0; i < data.image.length; i++) {
      let image = `<div class="image"><image src="${data.image[i].image}"/> <p>${data.image[i].p}</p></div>`;
      $(image).attr;
      $("#main").append(image);
    }
  });
});
