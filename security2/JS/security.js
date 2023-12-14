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

// template of tab chart:
const template = document.createElement("template");

template.innerHTML = `
<ul class="nav nav-line-tabs mb-5 fs-6">
<li class="nav-item">
  <a class="nav-link active" data-bs-toggle="tab" href="#kt_tab_pane_1"
    >هفته</a
  >
</li>
<li class="nav-item">
  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2"
    >Link 2</a
  >
</li>
<li class="nav-item">
  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3"
    >Link 3</a
  >
</li>
</ul>

<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
<div class="situation-user">
<div class="situation-user-number">
  <p>تلاش های ناموفق</p>
  <p class="talash-namovafagh">291</p>
</div>
<div class="situation-user-number">
  <p>ورود مدیر</p>
  <p class="vorod-modir">72</p>
</div>
<div class="situation-user-number">
  <p>ورود کاربر</p>
  <p class="vorod-user">36899</p>
</div>
</div>
<div class="activity-chart">
<div class="btn-activity-left">
  <p>مشتری ها</p>
  <p>اژانس</p>
</div>
<div class="btn-activity-right">نمودار فعالیت</div>
</div>
<div id="chart-activity-user">
<div id="chart"></div>
</div>
</div>
<div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">...</div>
<div class="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">...</div>
</div>
`;

const templateContainer = document.querySelector(".security-chart");
templateContainer.appendChild(template.content.cloneNode(true));

console.log(document.querySelector("#chart"));
export { templateContainer };
