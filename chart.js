let a,
  b,
  c,
  d = 0;

let ajax1 = $.ajax({
  url: "https://api.github.com/repos/nakhong/introduce.github.io/commits",
  dataType: "json",
});

let ajax2 = $.ajax({
  url: "https://api.github.com/repos/nakhong/NodeBird/commits",
  dataType: "json",
});

let ajax3 = $.ajax({
  url: "https://api.github.com/repos/nakhong/wanted-pre-onboarding-challenge-fe-1/commits",
  dataType: "json",
});

let ajax4 = $.ajax({
  url: "https://api.github.com/repos/nakhong/2359_Project/commits",
  dataType: "json",
});

// ajax1.done((data) => {
//   a = data.length;
// });

// ajax2.done((data) => {
//   b = data.length;
// });
// ajax3.done((data) => {
//   c = data.length;
// });
// ajax4.done((data) => {
//   d = data.length;
// });

Promise.all([ajax1, ajax2, ajax3, ajax4]).then((res) => {
  a = res[0].length;
  b = res[1].length;
  c = res[2].length;
  d = res[3].length;
});

function drawChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("string", "Commits");
  data.addColumn("number", "Count");
  data.addRows([
    ["자기소개", a],
    ["게시판", b],
    ["투두리스트", c],
    ["팀프로젝트", d],
  ]);
  let options = {
    title: "프로젝트 커밋 수",
    width: 600,
    height: 600,
  };
  let chart = new google.visualization.PieChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
