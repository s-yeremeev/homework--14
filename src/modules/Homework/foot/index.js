import "document-register-element"

export default class FootContainer extends HTMLDivElement {
  static displayName = "foot-container"
  static parentElement = "div"

  constructor() {
    super()

    this.classList.add("hero-foot")

    this.container = document.createElement("div")
    this.container.classList.add("container")
    this.appendChild(this.container)

     this.tabs = document.createElement("div")
     this.tabs.classList.add("tabs", "is-centered")
     this.container.appendChild(this.tabs)

     this.ul = document.createElement("ul")
     this.tabs.appendChild(this.ul)

     this.li = document.createElement("li")
     this.ul.appendChild(this.li)

     this.a = document.createElement("a")
     this.a.innerHTML = "And this at the bottom"
     this.li.appendChild(this.a)

     
  }
}

customElements.define(
  FootContainer.displayName, 
  FootContainer, 
  { extends: FootContainer.parentElement }
)