import Button from "./Button/Button";

import injectComponent, {
  attributesToProps,
  slotsToProps,
  parseChildren,
} from "./index";

describe("attributesToProps", () => {
  it("should assign all attributes to the returned object", () => {
    const node = document.createElement("button");
    node.disabled = true;
    node.classList.add("test-class");
    node.id = "test-id";

    expect(attributesToProps(node)).toMatchSnapshot();
  });
});

describe("slotsToProps", () => {
  it("should assign all slots to the returned object", () => {
    const slotOne = document.createElement("span");
    slotOne.slot = "first";
    slotOne.textContent = "First";

    const slotTwo = document.createElement("span");
    slotTwo.slot = "second";
    slotTwo.textContent = "Second";

    const node = document.createElement("div");
    node.append(slotOne);
    node.append(slotTwo);

    expect(slotsToProps(node)).toMatchSnapshot();
  });
});

describe("parseChildren", () => {
  it("should return all children as React nodes", () => {
    const childOne = document.createElement("button");
    childOne.disabled = true;
    childOne.textContent = "Don't click me";

    const subChildOne = document.createElement("em");
    subChildOne.textContent = "Sub-child";

    const childTwo = document.createElement("span");
    childTwo.id = "the-span";
    childTwo.classList.add("test");
    childTwo.textContent = "this is child two";
    childTwo.append(subChildOne);

    const node = document.createElement("div");
    node.textContent = "test string";
    node.append(childOne);
    node.append(childTwo);

    expect(parseChildren(node)).toMatchSnapshot();
  });
});

describe("injectComponent", () => {
  it("should inject a React component into DOM", () => {
    const node = document.createElement("custom-button");
    node.textContent = "Click me";

    injectComponent(Button, node);

    expect(node).toMatchSnapshot();
  });

  it("should apply props object", () => {
    const node = document.createElement("custom-button");
    node.textContent = "Click me";

    injectComponent(Button, node, {
      test: "prop",
      complex: { data: { here: true } },
      className: "extra classes",
    });

    expect(node).toMatchSnapshot();
  });
});
