import { Table } from "../components/Table/table.js";
import { swiper } from "./library/custom.js";

window.customElements.define("table-chart", Table);

const copyButton = document.querySelector(".copy-btn");
copyButton.addEventListener("click", copyBtn);
const copy = document.querySelector("#text-table-one2");

function copyBtn() {
  copy.select();
  document.execCommand("copy");
  copy.style.color = "#50cd89";
  setInterval(() => {
    copy.style.color = "#6d6d80";
  }, 4000);
}
