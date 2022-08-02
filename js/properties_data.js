//////Properties DATA
export const allProperties = [];

export const Property = class {
  constructor(status, type, country, city, livingArea, price, listingImg) {
    this.status = status;
    this.type = type;
    this.country = country;
    this.city = city;
    this.livingArea = livingArea;
    this.price = price;
    this.listingImg = listingImg;
    allProperties.push(this);
  }

  displayPrice() {
    const timeZone = JSON.stringify(
      new Intl.DateTimeFormat().resolvedOptions()
    );
    const locale = navigator.language;
    const dollarOptions = { style: 'currency', currency: 'USD' };
    const euroOptions = { style: 'currency', currency: 'EUR' };
    const eurToUSD = this.price * 1.02; //rate conversion 31.07.2022;
    //If user is from Europe = EUR, if not = display price in $;
    if (timeZone.includes('Europe')) {
      return new Intl.NumberFormat(locale, euroOptions).format(this.price);
    } else {
      return new Intl.NumberFormat(locale, dollarOptions).format(eurToUSD);
    }
  }

  displayLivingArea() {
    const options = { style: 'unit', unit: 'meter' };
    const locale = navigator.language;

    return new Intl.NumberFormat(locale, options).format(this.livingArea);
  }
};

////Portugal - Property
const property_portugal_1 = new Property(
  'For Sale',
  'Condo',
  'Portugal',
  'Lisbon',
  85,
  230000,
  '/img/property-portugal-1.jpg'
);
const property_portugal_2 = new Property(
  'For Rent',
  'Condo',
  'Portugal',
  'Lisbon',
  52,
  1600,
  '/img/property-portugal-2.jpg'
);
const property_portugal_3 = new Property(
  'For Sale',
  'House',
  'Portugal',
  'Porto',
  120,
  350000,
  '/img/property-portugal-3.jpg'
);
const property_portugal_4 = new Property(
  'For Sale',
  'Condo',
  'Portugal',
  'Porto',
  95,
  280000,
  '/img/property-portugal-4.jpg'
);
const property_portugal_5 = new Property(
  'For Sale',
  'House',
  'Portugal',
  'Porto',
  180,
  900000,
  '/img/property-portugal-5.jpg'
);

////Portugal - Property
const property_spain_1 = new Property(
  'For Rent',
  'Condo',
  'Spain',
  'Malaga',
  85,
  2000,
  '/img/property-spain-1.jpg'
);
const property_spain_2 = new Property(
  'For Sale',
  'Condo',
  'Spain',
  'Malaga',
  45,
  180000,
  '/img/property-spain-2.jpg'
);
const property_spain_3 = new Property(
  'For Sale',
  'House',
  'Spain',
  'Malaga',
  130,
  350000,
  '/img/property-spain-3.jpg'
);
const property_spain_4 = new Property(
  'For Sale',
  'House',
  'Spain',
  'Barcelona',
  110,
  520000,
  '/img/property-spain-4.jpg'
);
const property_spain_5 = new Property(
  'For Sale',
  'House',
  'Spain',
  'Barcelona',
  150,
  600000,
  '/img/property-spain-5.jpg'
);
const property_spain_6 = new Property(
  'For Sale',
  'House',
  'Spain',
  'Barcelona',
  320,
  1800000,
  '/img/property-spain-6.jpg'
);

////Italy - Property
const property_italy_1 = new Property(
  'For Sale',
  'House',
  'Italy',
  'Bologna',
  190,
  650000,
  '/img/property-italy-1.jpg'
);
const property_italy_2 = new Property(
  'For Rent',
  'Condo',
  'Italy',
  'Bologna',
  80,
  1900,
  '/img/property-italy-2.jpg'
);
const property_italy_3 = new Property(
  'For Sale',
  'Condo',
  'Italy',
  'Rome',
  60,
  290000,
  '/img/property-italy-3.jpg'
);
const property_italy_4 = new Property(
  'For Sale',
  'House',
  'Italy',
  'Rome',
  130,
  800000,
  '/img/property-italy-4.jpg'
);

////Poland - Property
const property_poland_1 = new Property(
  'For Sale',
  'Condo',
  'Poland',
  'Warsaw',
  70,
  220000,
  '/img/property-poland-1.jpg'
);
const property_poland_2 = new Property(
  'For Sale',
  'Condo',
  'Poland',
  'Warsaw',
  90,
  280000,
  '/img/property-poland-2.jpg'
);
const property_poland_3 = new Property(
  'For Sale',
  'House',
  'Poland',
  'Warsaw',
  140,
  450000,
  '/img/property-poland-3.jpg'
);
const property_poland_4 = new Property(
  'For Rent',
  'Condo',
  'Poland',
  'Warsaw',
  30,
  900,
  '/img/property-poland-4.jpg'
);
