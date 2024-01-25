export function createParagraphElement(className, textContent, parent) {
  const paragraph = document.createElement('p');
  paragraph.className = className;
  paragraph.textContent = textContent;
  parent.appendChild(paragraph);
}
