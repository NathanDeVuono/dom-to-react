import React, { createElement } from "react";
import { render } from "react-dom";

import { v4 } from "uuid";

export function attributesToProps(element) {
  return Array.from(element.attributes).reduce((acc, attribute) => {
    if (attribute.name === "class") {
      acc.className = attribute.value;
    } else if (attribute.name === "disabled" && attribute.value === "") {
      acc.disabled = true;
    } else {
      acc[attribute.name] = attribute.value;
    }

    return acc;
  }, {});
}

export function slotsToProps(element) {
  return Array.from(element.querySelectorAll("[slot]")).reduce(
    (acc, element) => {
      const slotName = element.getAttribute("slot");
      if (!slotName) return acc;

      acc[slotName] = element;

      return acc;
    },
    {}
  );
}

export function parseChildren(element) {
  return Array.from(element.childNodes).reduce((acc, child) => {
    if (child.slot) return acc;

    if (child.nodeName === "#text") {
      acc.push(<span key={v4()}>{child.textContent}</span>);
    } else {
      acc.push(
        createElement(child.tagName.toLowerCase(), {
          key: v4(),
          ...attributesToProps(child),
          ...slotsToProps(child),
          children: parseChildren(child),
        })
      );
    }

    return acc;
  }, []);
}

export default function injectComponent(Component, element, props = {}) {
  render(
    <Component
      {...attributesToProps(element)}
      {...slotsToProps(element)}
      {...props}
    >
      {parseChildren(element)}
    </Component>,
    element
  );
}
