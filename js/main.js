'use strict';

import { Property } from './properties_data.js';
import { allProperties } from './properties_data.js';

/////DISPLAY DYNAMICALLY ALL PROPERTIES
const propertiesContainer = document.querySelector('.properties-container');

const displayProperties = () => {
  allProperties.forEach(property => {
    const aTag = document.createElement('a');
    aTag.classList.add('open-property-page-btn');
    aTag.href = '#';
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
      <li class="country-label">
        <i class="ri-map-pin-2-line"></i>${
          property.country
        },<span class="city-label"> ${property.city}</span>
      </li>
      <li class="type-label"><i class="ri-home-line"></i>${property.type}</li>
      <li class="living-area-label"><i class="ri-bookmark-line"></i>${property.displayLivingArea()}²</li>
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

//Retreiving unique property values and saving in arrays
const uniqueValues = objectKey => {
  const arr = [];
  for (const property of allProperties) {
    arr.push(property[`${objectKey}`]);
  }
  return [...new Set(arr)];
};

const countriesArr = uniqueValues('country');
const citiesArr = uniqueValues('city');
const typesArr = uniqueValues('type');
const statusesArr = uniqueValues('status');

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
  let target;

  if (!e.target.classList.contains('input')) return false;

  if (e.target.classList.contains('input')) {
    target = e.target.getAttribute('name');
    const optionsContainer = document.querySelector(
      `.options-container[name="${target}"]`
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

      initFiltering(inputField.value);
      console.log(inputField.value);
    }
  });
});

//Filtering in DOM and displaying results
const filterResults = input => {
  // const labels = document.querySelectorAll(`.${labelName}-label`);
  const propertiesDOM = document.querySelectorAll('.open-property-page-btn');

  // let input = document.querySelector(`.input[name="${labelName}`);

  propertiesDOM.forEach(prop => {
    if (prop.innerText.indexOf(input) !== -1) {
      prop.style.display = '';
    } else {
      // prop.style.display = 'none';
      prop.remove();
    }
  });
};

const initFiltering = target => {
  filterResults(target);
};
