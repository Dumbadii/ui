class DropDownMenu {
  constructor(container, [...items]) {
    this.container = container;

    this.items = items;
    this.selectedItem = null;
    this.initElements();
    this.displayItems();
    this.handleSelect();
    this.handleClick();
  }

  displayItems() {
    let htmlTemplate = this.items
      .map((item) => {
        return `
        <li data-key=${item.key} class="li-menu-item ${
          item.key === this.selectedItem?.key ? " selected" : ""
        }">${item.value}</li>
        `;
      })
      .join("");
    this.ul.innerHTML = htmlTemplate;
  }

  initElements() {
    this.container.innerHTML = `
    <div class='div-dropdownmenu'>
    <button class='btn-select'>...</button>
    <ul class='ul-dropdownmenu hide'>
    </ul>
    </div>
    `;
    this.ul = this.container.querySelector("ul");
    this.btn = this.container.querySelector("button");
  }

  getItem() {
    return this.selectedItem;
  }

  handleSelect() {
    this.ul.addEventListener("click", (event) => {
      const target = event.target;
      if (target.classList.contains("li-menu-item")) {
        this.selectedItem = {
          key: Number(target.dataset.key),
          value: target.textContent,
        };
        this.displayItems();
      }
    });
  }

  handleClick() {
    this.btn.addEventListener("click", () => {
      this.ul.classList.toggle("hide");
    });
  }
}

export { DropDownMenu };
