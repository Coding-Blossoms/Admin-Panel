// event
addEventListener("load", afterLoad);

// function
function afterLoad() {
  dramad();
  addTemplateSEC2();
}
function copyLinkSECBarnameArga() {
  let urlSECBarnameArga = document.querySelector("#urlInput");
  urlSECBarnameArga.select();
  urlSECBarnameArga.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(urlSECBarnameArga.value);
}
function dramad() {
  let number = 0;
  for (let i = 0; i < 63240; i++) {
    setTimeout(() => {
      number += 1;
      let dramade = (document.querySelector(
        "section:first-of-type>div:nth-of-type(2) > div > h3"
      ).innerHTML = "$" + number);
      if (i < 8530) {
        let tavize = (document.querySelector(
          "section:first-of-type>div:nth-of-type(2) > div:nth-of-type(2) > h3"
        ).innerHTML = "$" + number);
      }
      if (i < 2600) {
        let hazine = (document.querySelector(
          "section:first-of-type>div:nth-of-type(2) > div:nth-of-type(3) > h3"
        ).innerHTML = "$" + number);
      }
      if (i < 783) {
        let hazine = (document.querySelector(
          "section:first-of-type>div:nth-of-type(2) > div:nth-of-type(4) > h3"
        ).innerHTML = "$" + number);
      }
    }, 1300);
  }
}

// sec arga carbar bakhse hae mokhtalfesh
function year2021sod() {
  // remove class slected in the header
  document.querySelector(
    "section:last-of-type > div:first-of-type > div li:nth-of-type(1)"
  ).className = "";

  document.querySelector(
    "section:last-of-type > div:first-of-type > div li:nth-of-type(2)"
  ).className = "";

  document.querySelector(
    "section:last-of-type > div:first-of-type > div li:nth-of-type(3)"
  ).className = "active-header-itm-sec";

  // edit contact
  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(8)"
  ).innerHTML = `
  <p>256899235</p>
  <p>		خوان کارلوس</p>
  <p>Jan 02, 2020</p>
  <p>	35%</p>
  <span> 	$820.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(7)"
  ).innerHTML = `
  <p>245899092	</p>
  <p>			پل جانسو</p>
  <p>	Feb 29, 2020</p>
  <p>	21%</p>
  <span> 	$380.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(6)"
  ).innerHTML = `
  <p>505432578		</p>
  <p>	سارا جونز</p>
  <p>	Jan 08, 2020	</p>
  <p>		47%</p>
  <span> 	$2,050.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(5)"
  ).innerHTML = `
  <p>678935899		</p>
  <p>		رابرت اسمی</p>
  <p>		May 06, 2020	</p>
  <p>			18%</p>
  <span> 	$940.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(4)"
  ).innerHTML = `
  <p>578433345		</p>
  <p>	علی کاربر</p>
  <p>			Aug 10, 2020	</p>
  <p>			38%</p>
  <span> 	$2000.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(3)"
  ).innerHTML = `
  <p>678935899		</p>
  <p>		مارکوس هریس</p>
  <p>				Nov 24, 2020	</p>
  <p>			58%</p>
  <span> 	$191.00</span>
  `;
}
function year2022sod() {
  // remove class slected in the header
  document.querySelector(
    "section:last-of-type > div:first-of-type > div li:nth-of-type(1)"
  ).className = "";
  document.querySelector(
    "section:last-of-type > div:first-of-type > div li:nth-of-type(3)"
  ).className = "";

  document.querySelector(
    "section:last-of-type > div:first-of-type > div li:nth-of-type(2)"
  ).className = "active-header-itm-sec";

  // edit contact
  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(3)"
  ).innerHTML = `
  <p>256899235</p>
  <p>		خوان کارلوس</p>
  <p>Jan 02, 2020</p>
  <p>	35%</p>
  <span> 	$820.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(4)"
  ).innerHTML = `
  <p>245899092	</p>
  <p>			پل جانسو</p>
  <p>	Feb 29, 2020</p>
  <p>	21%</p>
  <span> 	$380.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(5)"
  ).innerHTML = `
  <p>505432578		</p>
  <p>	سارا جونز</p>
  <p>	Jan 08, 2020	</p>
  <p>		47%</p>
  <span> 	$2,050.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(6)"
  ).innerHTML = `
  <p>678935899		</p>
  <p>		رابرت اسمی</p>
  <p>		May 06, 2020	</p>
  <p>			18%</p>
  <span> 	$940.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(7)"
  ).innerHTML = `
  <p>578433345		</p>
  <p>	علی کاربر</p>
  <p>			Aug 10, 2020	</p>
  <p>			38%</p>
  <span> 	$2000.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(8)"
  ).innerHTML = `
  <p>678935899		</p>
  <p>		مارکوس هریس</p>
  <p>				Nov 24, 2020	</p>
  <p>			58%</p>
  <span> 	$191.00</span>
  `;
}
function thiseYearSod() {
  // remove class slected in the header
  document.querySelector(
    "section:last-of-type > div:first-of-type > div li:nth-of-type(3)"
  ).className = "";

  document.querySelector(
    "section:last-of-type > div:first-of-type > div li:nth-of-type(2)"
  ).className = "";

  document.querySelector(
    "section:last-of-type > div:first-of-type > div li:nth-of-type(1)"
  ).className = "active-header-itm-sec";

  // edit contact
  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(5)"
  ).innerHTML = `
  <p>256899235</p>
  <p>		خوان کارلوس</p>
  <p>Jan 02, 2020</p>
  <p>	35%</p>
  <span> 	$820.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(3)"
  ).innerHTML = `
  <p>245899092	</p>
  <p>			پل جانسو</p>
  <p>	Feb 29, 2020</p>
  <p>	21%</p>
  <span> 	$380.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(7)"
  ).innerHTML = `
  <p>505432578		</p>
  <p>	سارا جونز</p>
  <p>	Jan 08, 2020	</p>
  <p>		47%</p>
  <span> 	$2,050.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(8)"
  ).innerHTML = `
  <p>678935899		</p>
  <p>		رابرت اسمی</p>
  <p>		May 06, 2020	</p>
  <p>			18%</p>
  <span> 	$940.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(6)"
  ).innerHTML = `
  <p>578433345		</p>
  <p>	علی کاربر</p>
  <p>			Aug 10, 2020	</p>
  <p>			38%</p>
  <span> 	$2000.00</span>
  `;

  document.querySelector(
    ".body-sec-arga-dade-shode:nth-of-type(4)"
  ).innerHTML = `
  <p>678935899		</p>
  <p>		مارکوس هریس</p>
  <p>				Nov 24, 2020	</p>
  <p>			58%</p>
  <span> 	$191.00</span>
  `;
}

function addTemplateSEC2() {
  document.querySelector("section:last-of-type").innerHTML = `
  <div>
  <h2>کاربران ارجاع داده شده</h2>
  <div>
    <li  onclick="thiseYearSod()" class="active-header-itm-sec"><a href="#">ماه</a></li>
    <li><a href="#" onclick="year2022sod()"> 2022</a></li>
    <li><a href="#" onclick="year2021sod()">2021</a></li>
  </div>
</div>
<div>
  <h4>شناسه سفارش</h4>
  <h4>کاربر</h4>
  <h4>تاریخ</h4>
  <h4>جایزه</h4>
  <h4>سود</h4>
</div>
<div class="body-sec-arga-dade-shode">
</div>
<div class="body-sec-arga-dade-shode">
</div>
<div class="body-sec-arga-dade-shode">
</div>
<div class="body-sec-arga-dade-shode">
</div>
<div class="body-sec-arga-dade-shode">
</div>
<div class="body-sec-arga-dade-shode">
</div>
  
  `;
  thiseYearSod()
}
