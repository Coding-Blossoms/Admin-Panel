import { Table } from "../components/Table/table.js";

window.customElements.define("table-chart", Table);

const copyButton = document.querySelector(".copy-btn");
copyButton.addEventListener("click", copyBtn);

function copyBtn() {
  let textSelect = new Table();
  console.log(textSelect);
  let text = document.querySelector(".text-table-one2").innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return copyContent;
}
