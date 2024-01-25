export function createImageElement(className, image, parent) {
  const img = document.createElement('img');
  img.className = className;
  img.src = image;
  parent.appendChild(img);
}