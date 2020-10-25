const tabAvis = [
  {
    avisImg: "img/station.jpg",
    title: "Title",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore maxime dolore quaerat delectus. Nihil, fugiat alias eius id minus ad, officia qui eos quod incidunt ea blanditiis pariatur eum.",
  },
  {
    avisImg: "img/station.jpg",
    title: "Title",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore maxime dolore quaerat delectus. Nihil, fugiat alias eius id minus ad, officia qui eos quod incidunt ea blanditiis pariatur eum.",
  },
  {
    avisImg: "img/station.jpg",
    title: "Title",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore maxime dolore quaerat delectus. Nihil, fugiat alias eius id minus ad, officia qui eos quod incidunt ea blanditiis pariatur eum.",
  },
];

// console.log(tabAvis);

// const elemAvisImg = document.getElementById("img-cardAvis");
// elemAvisImg.src = "/img/station.jpg";
tabAvis.forEach((avis) => {
  document.querySelector("div.avis").innerHTML +=
    // card compléte

    '<div class="card" style="width: 18rem">' +
    '<img id="img-cardAvis" src="' +
    avis.avisImg +
    '" class="card-img-top" alt="..." />' +
    '<div class="card-body">' +
    '<h2 id="avisH2">' +
    avis.title +
    "</h2>" +
    '<p class="card-text">' +
    avis.text +
    "</p>" +
    "</div>" +
    "</div>";
});
