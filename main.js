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

//Default currency = Euro (show different currency depending on the location, do conversion based on set rates);
//Default living area = m2
const property1 = new Properties("Condo", "Lisbon", 1993, 95, 280000, "/img/lisbon-apartment");
const property2 = new Properties("Single Home", "Madrid", 2020, 150, 320000);
const property3 = new Properties("Condo", "Munich", 2002, 82, 400000);

const allProperties = [property1, property2, property3];
allProperties.forEach((property) => {
  console.log(property.type);
});
