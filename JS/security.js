import { Table } from "../components/Table/table.js";
import { swiper } from "./library/custom.js";

window.customElements.define("table-chart", Table);

const copyButton = document.querySelector(".copy-btn");
const copy = document.querySelector("#text-table-one2");

// Events:
copyButton.addEventListener("click", copyBtn);

// functions:
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
<li class="nav-item ">
  <a class="nav-link active active-line-tabs" data-bs-toggle="tab" href="#kt_tab_pane_1"
    >هفته
    </a>
    <div id="nav-link-after"></div>
  
</li>
<li class="nav-item">
  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2"
    > روز
    </a
    >
    <div id="nav-link-after"></div>
</li>
<li class="nav-item">
  <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3"
    > ساعت 12
    </a
    >
    <div id="nav-link-after"></div>
</li>
</ul>

<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
<div class="situation-user">
<div class="situation-user-number">
  <h5 class="red-color">تلاش های ناموفق</h5>
  <h2 class="talash-namovafagh">291</h2>
</div>
<div class="situation-user-number">
  <h5 class="blue-color">ورود مدیر</h5>
  <h2 class="vorod-modir">72</h2>
</div>
<div class="situation-user-number">
  <h5 class="green-color">ورود کاربر</h5>
  <h2 class="vorod-user">36899</h2>
</div>
</div>
<div class="activity-chart">
<div class="btn-activity-left">
  <h6 class="btn-activity-left-item active-items">مشتری ها</h6>
  <h6 class="btn-activity-left-item">اژانس</h6>
</div>
<h4 class="btn-activity-right">نمودار فعالیت</h4>
</div>
<div id="chart-activity-user">
<div id="chart"></div>
</div>
</div>
<div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
<div class="situation-user">
<div class="situation-user-number">
  <h5 class="red-color">تلاش های ناموفق</h5>
  <h2 class="talash-namovafagh">291</h2>
</div>
<div class="situation-user-number">
  <h5 class="blue-color">ورود مدیر</h5>
  <h2 class="vorod-modir">72</h2>
</div>
<div class="situation-user-number">
  <h5 class="green-color">ورود کاربر</h5>
  <h2 class="vorod-user">36899</h2>
</div>
</div>
<div class="activity-chart">
<div class="btn-activity-left">
  <h6 class="btn-activity-left-item active-items">مشتری ها</h6>
  <h6 class="btn-activity-left-item">اژانس</h6>
</div>
<h4 class="btn-activity-right">نمودار فعالیت</h4>
</div>
<div id="chart-activity-user">
<div id="chart"></div>
</div>
</div>
<div class="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
<div class="situation-user">
<div class="situation-user-number">
  <h5 class="red-color">تلاش های ناموفق</h5>
  <h2 class="talash-namovafagh">291</h2>
</div>
<div class="situation-user-number">
  <h5 class="blue-color">ورود مدیر</h5>
  <h2 class="vorod-modir">72</h2>
</div>
<div class="situation-user-number">
  <h5 class="green-color">ورود کاربر</h5>
  <h2 class="vorod-user">36899</h2>
</div>
</div>
<div class="activity-chart">
<div class="btn-activity-left">
  <h6 class="btn-activity-left-item active-items">مشتری ها</h6>
  <h6 class="btn-activity-left-item">اژانس</h6>
</div>
<h4 class="btn-activity-right">نمودار فعالیت</h4>
</div>
<div id="chart-activity-user">
<div id="chart"></div>
</div>
</div>
</div>
`;

const templateContainer = document.querySelector(".security-chart");
templateContainer.appendChild(template.content.cloneNode(true));

const activityChartLeftItems = document.querySelectorAll(
  ".btn-activity-left-item"
);

// active buttons:
activityChartLeftItems.forEach((item) => {
  item.addEventListener("click", function () {
    activityChartLeftItems.forEach((items) => {
      items.classList.remove("active-items");
      this.classList.add("active-items");
    });
  });
});

export { templateContainer };
