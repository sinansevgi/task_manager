const domHelper = (() => {
  const addAttributes = (element, dict) => {
    Object.keys(dict).forEach((key) => {
      element.setAttribute(key, dict[key]);
    });
  };

  const createDomElement = (tag, attributes = null, textContent = null) => {
    const element = document.createElement(tag);
    if (attributes) {
      addAttributes(element, attributes);
    }
    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  };

  const removeAllChilds = (node) => {
    while (node.firstChild) { node.removeChild(node.firstChild); }
  };

  const appendChildren = (parent, arrayOfChildren) => {
    arrayOfChildren.forEach((child) => {
      parent.appendChild(child);
    });
  };

  return {
    createDomElement,
    appendChildren,
    removeAllChilds,
  };
})();

export { domHelper as default };
