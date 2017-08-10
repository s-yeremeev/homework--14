import "document-register-element"
import ButtonComponent from "../common/Button"

export default class BodyContainer extends HTMLDivElement {
  static displayName = "body-container"
  static parentElement = "div"

  constructor() {
    super()

    this.classList.add("hero-body")

    this.container = document.createElement("div")
    this.container.classList.add("container", "has-text-centered")
    this.appendChild(this.container)

     this.columns = document.createElement("div")
     this.columns.classList.add("columns", "is-vcentered")
     this.container.appendChild(this.columns)

     this.column5 = document.createElement("div")
     this.column5.classList.add("column", "is-5")
     this.columns.appendChild(this.column5)

     this.figure = document.createElement("figure")
     this.figure.classList.add("image", "is-4by3")
     this.column5.appendChild(this.figure)

     this.img = document.createElement("img")
     this.img.src = "http://placehold.it/800x600"
     this.img.alt = "Description"
     this.figure.appendChild(this.img)

     this.column6 = document.createElement("div")
     this.column6.classList.add("column", "is-6", "is-offset-1")
     this.columns.appendChild(this.column6)

     this.h1 = document.createElement("h1")
     this.h1.classList.add("title", "is-2")
     this.h1.innerHTML =`
              Superhero Scaffolding
            `
     this.column6.appendChild(this.h1)

     this.h2 = document.createElement("h2")
     this.h2.classList.add("subtitle", "is-4")
     this.h2.innerHTML =`
              Let this cover page describe a product or service.
            `
     this.column6.appendChild(this.h2)

     this.br = document.createElement("br")
     this.column6.appendChild(this.br)

     this.btnp = document.createElement("p")
     this.btnp.classList.add("has-text-centered")
     this.column6.appendChild(this.btnp)

     this.btnp.appendChild(new ButtonComponent({
                                      customClass: "is-large", 
                                      innerText: "Learn more"
                           }))



  }
}

customElements.define(
  BodyContainer.displayName, 
  BodyContainer, 
  { extends: BodyContainer.parentElement }
)