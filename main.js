"use strict";

const Properties = class {
  constructor(status, type, country, city, livingArea, price, listingImg) {
    this.status = status;
    this.type = type;
    this.country = country;
    this.city = city;
    this.livingArea = livingArea;
    this.price = price;
    this.listingImg = listingImg;
  }
};

//Slogan: 'Home is Where Your Heart Beats'

const property1 = new Properties("Condo", "Lisbon", 1993, 95, 280000, "/img/lisbon-apartment");
const property2 = new Properties("Single Home", "Madrid", 2020, 150, 320000);
const property3 = new Properties("Condo", "Munich", 2002, 82, 400000);

const allProperties = [property1, property2, property3];
allProperties.forEach((property) => {
  // console.log(property.type);
});

/////CURRENCY
//Default currency = Euro (show different currency depending on the location, do conversion based on set rates);
//Default living area = m2
const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
//Jeżeli użytkownik jest w 'Europe', pokaż euro, else pokaż dolary

// Filter bar - testing logic
const input = document.querySelector(".input");
const options = document.querySelectorAll(".option");
const optionsContainer = document.querySelector(".options-container");
const countryLabels = document.querySelectorAll(".country-label");
const countryLabelsWrapper = document.querySelector(".country-labels-wrapper");

optionsContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("option")) {
    let target = e.target;
    input.value = target.textContent;
    console.log(input.value);
    filterResults(countryLabels);
  }

  if (!e.target.classList.contains("option")) return false;
});

//filtering
const filterResults = (elements) => {
  elements.forEach((el) => {
    if (el.textContent.indexOf(input.value) !== -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};
