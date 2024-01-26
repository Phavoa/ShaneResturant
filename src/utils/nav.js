import "../stylesSheets/navBar.css";
import Logo from "../asset/Restaurant-logo.png";
import { createDivElement } from "./createDiv";
import { createParagraphElement } from "./createParagraph";
import { createImageElement } from "./createImage";
import { createLinkElement } from "./createLink";
import { home } from "../pages/home";

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

  const homeLink = createLinkElement('nav-menu', "HOME", "", navMenu);
  const menuLink = createLinkElement('nav-menu', "MENU", "", navMenu);
  const banquetLink = createLinkElement('nav-menu', "BANQUET FACILITY", "/banquet", navMenu);
  const galleryLink = createLinkElement('nav-menu', "GALLERY", "/gallery", navMenu);
  const cateringLink = createLinkElement('nav-menu', "CATERING", "/catering", navMenu);
  const contactLink = createLinkElement('nav-menu', "CONTACT US", "/contact", navMenu);

  const bookingButton = document.createElement('a'); // Change from button to anchor element
  bookingButton.className = "booking-button";
  bookingButton.textContent = "BOOK A BANQUET";
  bookingButton.href = "/book-a-banquet";
  bookingContainer.appendChild(bookingButton);
  
}



