const tabAvis = [
  {
    avisImg: "/img/station.jpg",
    title: "Title",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore maxime dolore quaerat delectus. Nihil, fugiat alias eius id minus ad, officia qui eos quod incidunt ea blanditiis pariatur eum.",
  },
  {
    avisImg: "/img/station.jpg",
    title: "Title",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore maxime dolore quaerat delectus. Nihil, fugiat alias eius id minus ad, officia qui eos quod incidunt ea blanditiis pariatur eum.",
  },
  {
    avisImg: "/img/station.jpg",
    title: "Title",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore maxime dolore quaerat delectus. Nihil, fugiat alias eius id minus ad, officia qui eos quod incidunt ea blanditiis pariatur eum.",
  },
];

console.log(tabAvis);

// const elemAvisImg = document.getElementById("img-cardAvis");
// elemAvisImg.src = "/img/station.jpg";
for (i = 0; i < tabAvis.length; i++) {
  document.write(tabAvis[i]);
}
