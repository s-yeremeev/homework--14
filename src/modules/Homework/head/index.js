import "document-register-element"
import ButtonComponent from "../common/Button"
import InerTab from "./InerTab"

const menuTabs = [
   {
    customClass: "is-active", 
    innerText: "Home"
   },
  {
    innerText: "Features"
   },
   {
    innerText: "Team"
   },
   {
    innerText: "Help"
   }
]

const menuButton = [
   {
    innerText: "Log in"
   },
  {
    customClass: "is-info", 
    innerText: "Sign up"
   }
]


export default class HeadContainer extends HTMLDivElement {
  static displayName = "head-container"
  static parentElement = "div"

  constructor() {
    super()

    this.classList.add("hero-head")

    this.container = document.createElement("div")
    this.container.classList.add("container")

    this.nav = document.createElement("nav")
    this.nav.classList.add("nav", "has-shadow")
    this.container.appendChild(this.nav)

    this.navCont = document.createElement("div")
    this.navCont.classList.add("container")
    this.nav.appendChild(this.navCont)

    this.left = document.createElement("div")
    this.left.classList.add("nav-left")
    this.navCont.appendChild(this.left)

    this.leftItem = document.createElement("a")
    this.leftItem.classList.add("nav-item")
    this.leftItem.href = "https://dansup.github.io/bulma-templates/index.html"
    this.left.appendChild(this.leftItem)

    this.leftImg = document.createElement("img")
    this.leftImg.src = "https://dansup.github.io/bulma-templates/images/bulma.png"
    this.leftImg.style.width='200px'
    this.leftImg.alt = "Description"
    this.left.appendChild(this.leftImg)

    this.toggle = document.createElement("span")
    this.toggle.classList.add("nav-toggle")
    this.navCont.appendChild(this.toggle)
    
    this.spanOne = document.createElement("span")
    this.toggle.appendChild(this.spanOne)
    
    this.spanTwo = document.createElement("span")
    this.toggle.appendChild(this.spanTwo)
    
    this.spanThree = document.createElement("span")
    this.toggle.appendChild(this.spanThree)

    this.menu = document.createElement("div")
    this.menu.classList.add("nav-right", "nav-menu")
    this.navCont.appendChild(this.menu)

    menuTabs.forEach((el) => this.menu.appendChild(new InerTab(el)))

    this.btnSpan = document.createElement("span")
    this.btnSpan.classList.add("nav-item")
    this.menu.appendChild(this.btnSpan)

    menuButton.forEach((el) => this.btnSpan.appendChild(new ButtonComponent(el)))

    this.appendChild(this.container)
  }
}

customElements.define(
  HeadContainer.displayName, 
  HeadContainer, 
  { extends: HeadContainer.parentElement }
)