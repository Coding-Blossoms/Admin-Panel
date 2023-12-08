const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="components/Table/table.css" />
<div class="table-main">
<div class="row">
  <div class="btn-show-all"></div>
  <div class="time-select"></div>
  <div class="table-title"></div>
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

  connectedCallbackk() {
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
