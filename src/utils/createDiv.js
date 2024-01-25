export function createDivElement(className, parent = null) {
  const div = document.createElement('div');
  div.className = className;
  if (parent) {
    parent.appendChild(div);
  }
  return div;
}