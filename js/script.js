
const hamburger = document.querySelector('.bar');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click',
  () => {
    hamburger.classList.remove('active');
    navList.classList.remove('active');
  }));

const cards = [
  {
    id: 1,
    title: 'Recipe App',
    imageM: '/images/recipeHome.png',
    imageD: '/images/recipeHome.png',
    heading2: ['Meals'],
    heading3: ['Android'],
    heading4: ['2023'],
    cardDescription:
      'This app is an engaging Android app for culinary enthusiasts. built using an API to access great recipes for people that love to cook. This is aimed at making it easier to store the recipes online and not have to keep a shelf full of recipe books.',
    languages: ['Kotlin', 'RoomDb', 'Retrofit'],
  },
  {
    id: 2,
    title: 'Metrics',
    imageM: '../images/crypto.png',
    imageD: '../images/crypto.png',
    heading2: ['Crypto'],
    heading3: ['Reactjs'],
    heading4: ['2023'],
    cardDescription:
      'This is a metrics website application for digital currency. Users can get information about a related crypto coin',
    languages: ['html&Css', 'ReactJs', 'Redux'],
  },
  {
    id: 3,
    title: 'Image Search',
    imageM: '../images/imagesearch.png',
    imageD: '../images/imagesearch.png',
    heading2: ['Images'],
    heading3: ['Android'],
    heading4: ['2022'],
    cardDescription:
      'This innovative mobile application offers a sophisticated image search functionality, allowing users to explore an extensive array of images. Seamlessly integrated through the utilization of the Unsplash API, this application empowers users to embark on a visual journey by effortlessly searching and discovering a diverse range of captivating visuals.',
    languages: ['Kotlin', 'Retrofit', 'Mvvm'],
  },
  {
    id: 4,
    title: 'Movies',
    imageM: '../images/movie.png',
    imageD: '../images/movie.png',
    heading2: ['Mission'],
    heading3: ['Reactjs'],
    heading4: ['2022'],
    cardDescription:
      'This is a web application for a company that provides commercial and scientific space travel services. This application allows users to book rockets and join selected space missions.',
    languages: ['react', 'redux', 'css'],
  },
];

const worksCard = cards.map(
  (card, id) => `
<section class="works ${id}">
<div class="work-card">
<img
  class="img"
  src="${card.imageM}"
  alt="Recipe-image-img"
/>
<div class="align-center-text">
  <h3 class="work-heading ${id}">${card.title}</h3>
  <ul class="dev-date">
    <li class="canopy">${card.heading2}</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;${card.heading3}</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;${card.heading4}</li>
  </ul>
  <p class="works-content-p">
  ${card.cardDescription}
  </p>
  <ul class="badges">
  ${card.languages
    .map((lang) => `<li class="works-badge">${lang}</li>`)
    .join('')}
  </ul>

  <button class="btn" data-card-id="${id}">See Project</button>

</div>
</div>
</section>
`,
);

const workCard = document.querySelector('.works');
workCard.innerHTML += worksCard;

const modalCard = [
  {
    id: 1,
    title: 'Recipe',
    imageM: '/images/recipeHome.jpg',
    imageD: '/images/recipeHome.jpg',
    heading2: ['Recipe'],
    heading3: ['Android'],
    heading4: ['2023'],
    cardDescriptionD:
      'This app is an engaging Android app for culinary enthusiasts. built using an API to access great recipes for people that love to cook. This is aimed at making it easier to store the recipes online and not have to keep a shelf full of recipe books.',
    cardDescriptionM:
      'This app is an engaging Android app for culinary enthusiasts. built using an API to access great recipes for people that love to cook. This is aimed at making it easier to store the recipes online and not have to keep a shelf full of recipe books.',
    languagesD: ['Kotlin', 'RoomDb', 'Retrofit'],
    languagesM: ['Kotlin', 'RoomDb', 'Retrofit'],
    linkLive: 'https://github.com/tonnymuchui/RecipeApp',
    linkSource: 'https://github.com/tonnymuchui/RecipeApp',
  },
  {
    id: 2,
    title: 'Metrics',
    imageM: '../images/crypto.png',
    imageD: '../images/crypto.png',
    heading2: ['Crypto'],
    heading3: ['Reactjs'],
    heading4: ['2022'],
    cardDescriptionD:
      'This is a metrics website application for digital currency. Users can get information about a related crypto coin',
    cardDescriptionM:
      'This is a metrics website application for digital currency. Users can get information about a related crypto coin',
    languagesD: ['html&Css', 'Reactjs', 'Redux'],
    languagesM: ['html&Css', 'Reactjs', 'Redux'],
    linkLive: 'https://bespoke-cassata-f52719.netlify.app/',
    linkSource: 'https://github.com/tonnymuchui/metrics',
  },
  {
    id: 3,
    title: 'Image Search',
    imageM: '../images/imagesearch.png',
    imageD: '../images/imagesearch.png',
    heading2: ['Images'],
    heading3: ['Android'],
    heading4: ['2022'],
    cardDescriptionD:
      'This innovative mobile application offers a sophisticated image search functionality, allowing users to explore an extensive array of images. Seamlessly integrated through the utilization of the Unsplash API, this application empowers users to embark on a visual journey by effortlessly searching and discovering a diverse range of captivating visuals.',
    cardDescriptionM:
      'This innovative mobile application offers a sophisticated image search functionality, allowing users to explore an extensive array of images. Seamlessly integrated through the utilization of the Unsplash API, this application empowers users to embark on a visual journey by effortlessly searching and discovering a diverse range of captivating visuals.',
    languagesD: ['Kotlin', 'Retrofit', 'MVVM'],
    languagesM: ['Kotlin', 'Retrofit', 'MVVM'],
    linkLive: 'https://github.com/tonnymuchui/ImageSearchApp',
    linkSource: 'https://github.com/tonnymuchui/ImageSearchApp',
  },
  {
    id: 4,
    title: 'Movie',
    imageM: '../images/movie.png',
    imageD: '../images/movie.png',
    heading2: ['Movies'],
    heading3: ['Reactjs'],
    heading4: ['2022'],
    cardDescriptionD:
      'This dynamic website showcases a curated collection of films sourced from an external API. Comprising dual user interfaces, it features a captivating homepage presenting movies, while an elegant popup window offers intricate details. Users can seamlessly engage by appending comments, fostering interactive discourse.',
    cardDescriptionM:
      'This dynamic website showcases a curated collection of films sourced from an external API. Comprising dual user interfaces, it features a captivating homepage presenting movies, while an elegant popup window offers intricate details. Users can seamlessly engage by appending comments, fostering interactive discourse.',
    languagesD: ['react', 'redux', 'Html&css'],
    languagesM: ['react', 'redux', 'Html&css'],
    linkLive: 'https://libercosoft.github.io/movie-capstone-app/dist/',
    linkSource: 'https://libercosoft.github.io/movie-capstone-app/dist/',
  },
];

function showPop() {
}

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const { cardId } = btn.dataset;
    showPop(cardId);

    modalCard.forEach((item, index) => {
      if (index == cardId) {
        const modalCards = document.getElementById('modal-cards');
        const content = `

<div class="card-portfolio-1">

<li class="pop-close"><i class="fa fa-times"></i></li>
    <h2 class="work-heading">${item.title}</h2>
    <ul class="dev-date space-date">
    <li class="canopy">${item.heading2}</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;${item.heading3}</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;${item.heading4}</li>
  </ul>
  <div class="images">
<img class="forD-1" src="${item.imageD}" alt="Pop Up Desktop" >
<img class="forM-1" src="${item.imageM}" alt="Pop Up Mobile" >

</div>
<div>
<div class="row">
<div class="column-left-1">
<p class="forM-1">
  ${item.cardDescriptionM}
</p>
<p class="forD-1">
  ${item.cardDescriptionD}
</p>

</div>
<div class="column-right-1">
<ul class="modal-1">
  ${item.languagesM.map((lang) => `<li class="works-badge">${lang}</li>`)}
</ul>

<hr>
<ul class="modal-1">
  <a href="${item.linkLive}" target= "_blank" class="modal-3" >See live <img class="btnimag" src="images/icon/Icon.png"></a>
  <a href="${item.linkSource}" target= "_blank" class="modal-3" >See Source <i class="fa fa-github"></i></a>
</ul>
</div>
</div>
</div>
</div>
       `;
        modalCards.innerHTML = content;
        const boxModal = document.querySelector('.card-portfolio-1');

        boxModal.style.display = 'block';

        const popClose = document.querySelector('.pop-close');
        popClose.addEventListener('click', () => {
          boxModal.style.display = 'none';
        });
      }
    });
  });
});

// languages close toggle

const langArrowClick = document.querySelector('#arrow-up');
const langMenu = document.querySelector('#lang-menu');

langArrowClick.addEventListener('click', () => {
  langArrowClick.classList.toggle('anti-rotate');
  langMenu.classList.toggle('close-lang-menu');
});

// framework dropdown toggle

const framework = document.querySelector('#framework');
const frameworkMenu = document.querySelector('#framework-menu');

framework.addEventListener('click', () => {
  framework.classList.toggle('rotate');
  frameworkMenu.classList.toggle('open-framework-dropdown');
});

// skills dropdown toggle

const skills = document.querySelector('#skills-arrow');
const skillsMenu = document.querySelector('#skills-menu');

skills.addEventListener('click', () => {
  skills.classList.toggle('rotate');
  skillsMenu.classList.toggle('open-skills-dropdown');
});

// Email validation

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.style.visibility = 'visible';
  setTimeout(() => {
    msg.style.visibility = 'hidden';
  }, 3000);
  msg.innerText = message;
  input.className = type ? '' : 'input-error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex = /^[a-z][a-z0-9_@.]*$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contact-from-validation');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Your email address should be in lowercase';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(
    form.elements.email,
    EMAIL_REQUIRED,
    EMAIL_INVALID,
  );
  if (nameValid && emailValid) {
    form.submit();
    form.elements.name.value = '';
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
});

// preserve data with localStorage
const formDataFromLocalStorage = localStorage.getItem('formData')
  ? JSON.parse(localStorage.getItem('formData'))
  : null;
const formData = {
  name: formDataFromLocalStorage ? formDataFromLocalStorage.name : '',
  email: formDataFromLocalStorage ? formDataFromLocalStorage.email : '',
  text: formDataFromLocalStorage ? formDataFromLocalStorage.text : '',
};

const setFormData = () => {
  form.elements.name.value = formData.name;
  form.elements.email.value = formData.email;
  form.elements.text.value = formData.text;
};

setFormData();

form.elements.name.addEventListener('change', () => {
  formData.name = form.elements.name.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

form.elements.email.addEventListener('change', () => {
  formData.email = form.elements.email.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

form.elements.text.addEventListener('change', () => {
  formData.text = form.elements.text.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});