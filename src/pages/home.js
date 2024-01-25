import "../stylesSheets/home.css";
import { navBar } from "../utils/nav";
import { createImageElement } from "../utils/createImage";
import { createDivElement } from "../utils/createDiv";
import { createParagraphElement } from "../utils/createParagraph";

const imagesContext = require.context('../asset/resturantImages', false, /\.(jpg|jpeg|png)$/);



export function home() {
  const contentDiv = document.getElementById('content');
  navBar();
  const resturantImages = createDivElement('resturant-images', contentDiv);
  const innerImages = createDivElement('inner-images', resturantImages);
  
  const imagesPaths = imagesContext.keys();
  const images = imagesPaths.map(imagesContext);
  console.log(images);
  for (let i = 0; i < images.length; i++) {
    const imageDiv = createDivElement('image-div', innerImages)
    createImageElement('res-images', images[i], imageDiv)
  }

  createParagraphElement('image-text', "SERVING BEST RESTURENT CATRING & BONQUET SERVICES IN NEW JERCY", resturantImages);
  console.log("home is working");

}