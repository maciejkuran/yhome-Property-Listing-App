'use strict';

import { Property } from './properties_data.js';
import { allProperties } from './properties_data.js';

/////DISPLAY DYNAMICALLY ALL PROPERTIES
const propertiesContainer = document.querySelector('.properties-container');

const displayProperties = () => {
  allProperties.forEach(property => {
    const aTag = document.createElement('a');
    aTag.classList.add('open-property-page-btn');
    aTag.href = '';
    aTag.innerHTML = `<div class="property">
  <picture class="property-img">
    <img class="img-label" src="${property.listingImg}" alt="" />
    <p class="status-label">${property.status}</p>
  </picture>
  <div class="price">
    <p class="price-label"><i class="ri-price-tag-3-line"></i>${property.displayPrice()}</p>
  </div>
  <div class="property-data">
  <ul>
  <li class="country-and-city-labels">
    <i class="ri-map-pin-2-line map-pin-icon"></i>
    <span class="country-label">${property.country}, </span>
    <span class="city-label"> ${property.city}</span>
  </li>
  <li class="type-label"><i class="ri-home-line"></i>${property.type}</li>
  <li class="living-area-label">
    <i class="ri-bookmark-line"></i>${property.displayLivingArea()}²
  </li>
</ul>
  </div>
  <div class="action-buttons">
    <button class="contact-agent-btn"><i class="ri-contacts-line"></i></button>
    <button class="add-to-favorites-btn"><i class="ri-heart-3-line"></i></button>
  </div>
</div>`;
    propertiesContainer.append(aTag);
  });
};

displayProperties();

/////FILTERING RESULTS

//Retreiving programatically unique label values from DOM and saving in arrays
const uniqueValues = labels => {
  const arr = [];
  for (const label of labels) {
    arr.push(label.textContent);
  }
  return [...new Set(arr)];
};

//Removing unnecessary characters from each string
let countriesArr = [];
let citiesArr = [];
let typesArr = [];
let statusesArr = [];

//Filling filter options with the unique values
const createOptions = (wrapperClass, arr, elClass, attributeName) => {
  const wrapper = document.querySelector(`.options-${wrapperClass}`);

  arr.forEach(el => {
    const btn = document.createElement('button');
    btn.className = `${elClass}-option option`;
    btn.textContent = el;
    btn.setAttribute('name', attributeName);
    wrapper.append(btn);
  });
};

//Creating all options in DOM
const initOptions = () => {
  const countryLabel = document.querySelectorAll('.country-label');
  const cityLabel = document.querySelectorAll('.city-label');
  const typeLabel = document.querySelectorAll('.type-label');
  const statusLabel = document.querySelectorAll('.status-label');

  countriesArr = uniqueValues(countryLabel).map(country =>
    country.replaceAll(',', '').trim()
  );
  citiesArr = uniqueValues(cityLabel).map(city => city.trim());
  typesArr = uniqueValues(typeLabel);
  statusesArr = uniqueValues(statusLabel);

  createOptions('countries', countriesArr, 'country', 'country');
  createOptions('cities', citiesArr, 'city', 'city');
  createOptions('types', typesArr, 'type', 'type');
  createOptions('statuses', statusesArr, 'status', 'status');
};

initOptions();

//Toggling options container on input click
const formsWrapper = document.querySelector('.forms-wrapper');

formsWrapper.addEventListener('click', e => {
  e.stopPropagation();

  if (!e.target.classList.contains('input')) return false;

  if (e.target.classList.contains('input')) {
    let targetAttribute = e.target.getAttribute('name');

    let optionsContainer = document.querySelector(
      `.options-container[name="${targetAttribute}"]`
    );

    optionsContainer.classList.toggle('options-container-active');
  }
});

//Removing all active classes on <body> click
const optionsContainer = document.querySelectorAll('.options-container');

const removeActiveClass = () => {
  optionsContainer.forEach((container, i) => {
    container.classList.remove('options-container-active');
  });
};

document.querySelector('body').addEventListener('click', removeActiveClass);

//Selecting and setting option from dropdown
optionsContainer.forEach(container => {
  container.addEventListener('click', e => {
    removeAllOptions();
    e.preventDefault();
    let target;
    let targetAttribute;
    let inputField;

    if (!e.target.classList.contains('option')) return false;

    if (e.target.classList.contains('option')) {
      target = e.target;
      targetAttribute = e.target.getAttribute('name');
      inputField = document.querySelector(`.input[name="${targetAttribute}"]`);
      inputField.value = target.textContent;
      filterResults(inputField.value);
      removeActiveClass();
    }
  });
});

//Filtering in DOM and displaying results
const filterResults = input => {
  const propertiesDOM = document.querySelectorAll('.open-property-page-btn');

  propertiesDOM.forEach(prop => {
    if (prop.innerText.indexOf(input) !== -1) {
      prop.style.display = '';
    } else {
      prop.remove();
    }
  });
  initOptions();
};

const removeAllOptions = () => {
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.remove());
};

//Resetting filter bar
const resetBtn = document.querySelector('.reset-btn');
const inputs = document.querySelectorAll('.input');

resetBtn.addEventListener('click', () => {
  const propertiesDOM = document.querySelectorAll('.open-property-page-btn');

  propertiesDOM.forEach(property => property.remove());
  countriesArr = [];
  citiesArr = [];
  typesArr = [];
  statusesArr = [];
  removeAllOptions();
  displayProperties();
  initOptions();
  inputs.forEach(input => (input.value = ''));
});

//////NAVBAR
////Hiding navbar on scroll down and show when scroll up
const navbar = document.querySelector('.navbar');
const mediaQuery = window.matchMedia('(max-width: 705.98px)');

let prevPosition;

const hideNavbar = () => {
  window.addEventListener('scroll', () => {
    let curPosition = window.pageYOffset;

    if (curPosition < prevPosition) {
      navbar.style.top = '0px';
      navbar.style.backgroundColor = ' #f6f6f6de';
    } else {
      navbar.style.top = '-120px';
    }

    if (curPosition < 20) navbar.style.backgroundColor = '';

    if (mediaQuery.matches && curPosition < 20) navbar.style.top = '0px';

    prevPosition = curPosition;
  });
};
hideNavbar();

//////lOGIN/REGISTER FORMS
//Displaying login/register form function
const loginContainer = document.querySelector('.login-register-form-container');
const registerContainer = document.querySelector('.register-container');
const registerBtn = document.querySelector('.register-now-btn');
const closeBtns = document.querySelectorAll('.close-popup');
const backgroundOverlay = document.querySelector('.dark-background-overlay');

//Closing popups on button cllick
const closeOnBtnClick = container => {
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!container.classList.contains('hide')) {
        container.classList.add('hide');
        backgroundOverlay.classList.add('hide');
      }
    });
  });
};

closeOnBtnClick(loginContainer);
closeOnBtnClick(registerContainer);

//Displaying login form
//multi btns with the same class
const contactAgentBtns = document.querySelectorAll('.contact-agent-btn');
const addToFavBtns = document.querySelectorAll('.add-to-favorites-btn');
const properties = document.querySelectorAll('.open-property-page-btn');

const displayForm = btns => {
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      loginContainer.classList.remove('hide');
      backgroundOverlay.classList.remove('hide');
    });
  });
};

displayForm(contactAgentBtns);
displayForm(addToFavBtns);
displayForm(properties);

//single btns
const myAccBtn = document.querySelector('.my-acc-btn');
const myFavBtns = document.querySelector('.my-favorites-btn');

const displayFormSingleBtn = btn => {
  btn.addEventListener('click', () => {
    loginContainer.classList.remove('hide');
    backgroundOverlay.classList.remove('hide');
  });
};

displayFormSingleBtn(myAccBtn);
displayFormSingleBtn(myFavBtns);

//Closing forms on background overlay click
const popups = document.querySelectorAll('.popup');

backgroundOverlay.addEventListener('click', e => {
  popups.forEach(popup => {
    popup.classList.add('hide');
    backgroundOverlay.classList.add('hide');
  });
});

//Switching between login and register form
