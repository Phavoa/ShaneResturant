export function createLinkElement(className, textContent, href, parent) {
  const link = document.createElement('a');
  link.className = className;
  link.textContent = textContent;
  link.href = href;
  parent.appendChild(link);
}