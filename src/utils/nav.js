import "../stylesSheets/navBar.css";
import Logo from "../asset/Restaurant-logo.png";
import { createDivElement } from "./createDiv";
import { createParagraphElement } from "./createParagraph";
import { createImageElement } from "./createImage";

export function navBar() {
  const contentDiv = document.getElementById('content');

  const navDiv = createDivElement('nav-div', contentDiv);

  const navLogo = createDivElement('nav-logo', navDiv);

  const restaurantLogo = createImageElement('resturant-logo', Logo, navLogo);

  const nameAndServices = createDivElement('name-services', navLogo);

  const restaurantName = createDivElement('restaurantName', nameAndServices);

  createParagraphElement('shame', 'SHAME', restaurantName);
  createParagraphElement('resturant', 'RESTAURANT', restaurantName);

  createParagraphElement('services', 'RESTAURANT/CATERING/BANQUET', nameAndServices);


  const bookingContainer = createDivElement('booking-container', navDiv);

  const navMenu = createDivElement("nav-menus", bookingContainer);

  const home = createParagraphElement('nav-menu', "HOME", navMenu); // Corrected here
  const menu = createParagraphElement('nav-menu', "MENU", navMenu);
  const banquet = createParagraphElement('nav-menu', "BANQUET FACILITY", navMenu); // Corrected here
  const gallery = createParagraphElement('nav-menu', "GALLERY", navMenu);
  const catering = createParagraphElement('nav-menu', "CATERING", navMenu);
  const contact = createParagraphElement('nav-menu', "CONTACT US", navMenu);

  const bookinButton = document.createElement('button');
  bookinButton.className = "booking-button";
  bookinButton.textContent = "BOOK A BANQUET";
  bookingContainer.appendChild(bookinButton)
}



