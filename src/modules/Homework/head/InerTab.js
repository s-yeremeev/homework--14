import "document-register-element"

export default class InerTabComponent extends HTMLLIElement {
  static displayName = "tab-component"
  static parentElement = "a"

  constructor(props) {
    super()

    const { customClass, innerText } = props

        this.classList.add("nav-item", "is-tab")
        if(customClass) this.classList.add(customClass)
        this.innerHTML = `
                `+ innerText +`
              `
  }
}

customElements.define(
  InerTabComponent.displayName, 
  InerTabComponent, 
  { extends: InerTabComponent.parentElement }
)