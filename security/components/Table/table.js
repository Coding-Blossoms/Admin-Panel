const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="components/Table/table.css" />
<link rel="stylesheet" href="../Css/style.global.css" />
<div class="table-main" id="id">
  <div class="row">
  <div class="left-content">
    <div class="btn-show-all"><slot name="btn-show-name"></slot></div>
    <select class="time-select">
    <option value="select-option">ساعت 1</option>
    <option value="select-option">ساعت 6</option>
    <option value="select-option">ساعت 12</option>
    <option value="select-option">ساعت 24</option>
      </select>
  </div>
  <div class="right-content">
   <h3 class="table-title"></h3>
  </div>
  </div>
  <div class="row">
    <div class="title-header-table">
      <div><slot name="header-one-title"></slot></div>
      <div><slot name="header-two-title"></slot></div>
      <div><slot name="header-three-title"></slot></div>
      <div class="header-four-title"><slot name="header-four-title"></slot></div>
      <div class="header-five-title"><slot name="header-five-title"></slot></div>
    </div>
  </div>
  <div class="row">
   <p class="text-table-one"></p>
   <p class="text-table-two"></p>
   <p class="text-table-three"></p>
   <p class="text-table-four succes-component"></p>
   <p class="text-table-five"></p>
  </div>
  <div class="row">
  <div class="copy-btn"><slot name="copy-btn"></slot></div>
   <p class="text-table-one2"></p>
   <p class="text-table-two2"></p>
   <p class="text-table-three2"></p>
   <p class="text-table-four2"></p>
   <p class="text-table-five2 succes-component"></p>
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

    //first row and first text.
    this.shadowRoot.querySelector(".text-table-one").innerHTML =
      this.getAttribute("text-table-one");
    this.shadowRoot.querySelector(".text-table-one2").innerHTML =
      this.getAttribute("text-table-one2");

    //first row and two text.
    this.shadowRoot.querySelector(".text-table-two").innerHTML =
      this.getAttribute("text-table-two");
    this.shadowRoot.querySelector(".text-table-two2").innerHTML =
      this.getAttribute("text-table-two2");
    //first row and three text.
    this.shadowRoot.querySelector(".text-table-three").innerHTML =
      this.getAttribute("text-table-three");
    this.shadowRoot.querySelector(".text-table-three2").innerHTML =
      this.getAttribute("text-table-three2");
    //first row and four text.
    this.shadowRoot.querySelector(".text-table-four").innerHTML =
      this.getAttribute("text-table-four");
    this.shadowRoot.querySelector(".text-table-four2").innerHTML =
      this.getAttribute("text-table-four2");
    //first row and five text.
    this.shadowRoot.querySelector(".text-table-five").innerHTML =
      this.getAttribute("text-table-five");
    this.shadowRoot.querySelector(".text-table-five2").innerHTML =
      this.getAttribute("text-table-five2");

    this.shadowRoot.id = this.getAttribute("id");
    this.shadowRoot.querySelector("#id").id = this.getAttribute("id");
  }

  static observedAttributes() {
    return [
      "btn-show",
      "table-title",
      "text-table-one",
      "text-table-two",
      "text-table-three",
      "text-table-four",
      "text-table-five",
      "text-table-one2",
      "text-table-two2",
      "text-table-three2",
      "text-table-four2",
      "text-table-five2",
      "id",
    ];
  }
}

export { Table };
