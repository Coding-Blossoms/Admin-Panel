const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="components/Table/table.css" />
<link rel="stylesheet" href="../Css/style.global.css" />
<div class="table-main">
  <div class="row">
  <div class="left-content">
    <div class="btn-show-all"><slot name="btn-show-name"></slot></div>
    <select class="time-select">
      <div value="select-option">1 ساعت</div>
      <div value="select-option">6 ساعت</div>
      <div value="select-option">12 ساعت</div>
      <div value="select-option">24 ساعت</div>
      </select>
  </div>
  <div class="right-content">
   <h3 class="table-title"></h3>
  </div>
  </div>
  <div class="row">
    <div class="title-header-table"></div>
  </div>
  <div class="row">
   <p class="text-table"></p>
  </div>
</div>
`;

class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // get an attribute to btn show all.
    this.shadowRoot.querySelector(".btn-show-all").innerHTML =
      this.getAttribute("btn-show");

    // get an attribute to table title.
    this.shadowRoot.querySelector(".table-title").innerHTML =
      this.getAttribute("table-title");
  }

  static observedAttributes() {
    return ["btn-show", "table-title"];
  }
}

export { Table };
