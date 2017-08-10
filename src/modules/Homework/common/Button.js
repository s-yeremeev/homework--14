import "document-register-element"

export default class ButtonComponent extends HTMLButtonElement {
  static displayName = "button-component"
  static parentElement = "a"

  constructor(props) {
    super()

    const { customClass, innerText } = props

    this.classList.add("button")
    if(customClass) this.classList.add(customClass)
        this.innerHTML = `
                `+ innerText +`
              `
  }
}

customElements.define(
  ButtonComponent.displayName, 
  ButtonComponent, 
  { extends: ButtonComponent.parentElement }
)