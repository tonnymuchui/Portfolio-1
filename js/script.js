const hamburger = document.querySelector('.humburger');
const navmenu = document.querySelector('.nav-list');
const body = document.querySelector('.content-section');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navmenu.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navmenu.classList.remove('active');
  body.classList.remove('active');
}));

const cards = [
  {
    id: 1,
    title: "Tonic",
    imageM: "./images/SnapshootPortfolio02.png",
    imageD: "./images/Portfolio1-big.png",
    heading2: ["Canopy", "Back End Dev", "2015"],
    cardDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["html", "css", "javascript"],
  },
  {
    id: 2,
    title: "Multi-Post Stories",
    imageM: "./images/image2desktop.png",
    imageD: "./images/Portfolio2.png",
    heading2: ["Canopy", "Back End Dev", "2015"],
    cardDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["html", "css", "javascript"],
  },
  {
    id: 3,
    title: "Facebook 360",
    imageM: "./images/image3desktop.png",
    imageD: "./images/PopUpdesktop.svg",
    heading2: ["Canopy", "Back End Dev", "2015"],
    cardDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["html", "css", "javascript"],
  },
  {
    id: 4,
    title: "Uber Navigation",
    imageM: "./images/image4desktop.png",
    imageD: "./images/PopUpdesktop.svg",
    heading2: ["Canopy", "Back End Dev", "2015"],
    cardDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["html", "css", "javascript"],
  },
];

const works_card = cards
.map((card, index) => `
<li>
<div class="work-card${index}">
<img
  class="img"
  src="${card.imageM}"
  alt="SnapshootPortfolio02-img"
/>
<div class="align-center-text">
  <h3 class="work-heading ${index}">${card.title}</h3>
  <ul class="dev-date">
    <li class="canopy">CANOPY</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;Back End Dev</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;2015</li>
  </ul>
  <p class="works-content-p">
  ${card.cardDescription}
  </p>
  <ul class="badges">
  ${card.languages
    .map((lang) => `<li class="works-badge">${lang}</li>`).join('')}
  </ul>
  <button class="btn" onclick="showPop(${card.id })"> See Project </button>
</div>
</div>
`
)