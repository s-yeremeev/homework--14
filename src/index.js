import LayoutContainer from "./modules/Homework"

const onLoad = function () {
  document.body.appendChild(new LayoutContainer())
}
window.addEventListener("load", onLoad)