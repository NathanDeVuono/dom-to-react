import { injectComponent } from ".";
import Button from "./Button/Button";

window.addEventListener("DOMContentLoaded", () => {
  injectComponent(Button, document.getElementById("put-here"));
});
