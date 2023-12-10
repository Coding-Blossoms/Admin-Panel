import { Table } from "../components/Table/table.js";

window.customElements.define("table-chart", Table);

const copyButton = document.querySelector(".copy-btn");
copyButton.addEventListener("click", copyBtn);

function copyBtn() {
  const table = document.querySelector("#table-chart5");
  const tableAttribute = table.getAttribute("text-table-one2");
  console.log(tableAttribute);
}
