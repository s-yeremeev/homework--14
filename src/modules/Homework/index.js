import "document-register-element"
import HeadContainer from "./head"
import BodyContainer from "./body"
import FootContainer from "./foot"
import "./index.scss"

export default class LayoutContainer extends HTMLDivElement {
  static displayName = "layout-container"
  static parentElement = "section"

  constructor() {
    super()

    this.classList.add("hero", "is-fullheight", "is-default", "is-bold")

    this.appendChild(new HeadContainer())
    this.appendChild(new BodyContainer())
    this.appendChild(new FootContainer())
  }
}

customElements.define(
  LayoutContainer.displayName, 
  LayoutContainer, 
  { extends: LayoutContainer.parentElement }
)