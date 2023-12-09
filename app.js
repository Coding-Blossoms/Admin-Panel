// events
document.addEventListener("afterload", afterload());
// function
// function afterload
function afterload() {
  this.dramad();
  secBaianeHa()
}
// the function for animation numbers
function dramad() {
  for (let i = 0; i < 6841; i++) {
    setTimeout(() => {
      let dramade = (document.querySelector(
        ".box-cash-body-dramad-part:first-of-type"
      ).children[0].innerHTML = "$" + i);
      if (i < 81) {
        let tavize = (document.querySelector(
          ".box-cash-body-dramad-part:nth-child(2)"
        ).children[0].innerHTML = i + "%");
      }
      if (i < 1241) {
        let hazine = (document.querySelector(
          ".box-cash-body-dramad-part:last-of-type"
        ).children[0].innerHTML = "$" + i);
      }
    }, 300);
  }
}
// the for creating the teamplet and start rofitThisYear func
function secBaianeHa() {
document.querySelector("body").innerHTML += `  <section id="sec-baiane-ha">
<div id="header-sec-baiane-ha">
  <h4>بیانیه</h4>
  <div>
    <li class="selcted-category-header-sec-baiane-ha">
      <a href="#" onclick="profitThisYear()">امسال</a>
    </li>
    <li><a href="#" onclick="profit2022()">2022</a></li>
    <li><a href="#" onclick="profit2021()">2021</a></li>
    <li><a href="#" onclick="profit2020()">2020</a></li>
  </div>
</div>
<div class="body-sec-baiane-ha">
  <span>تاریخ</span>
  <span> شناسه سفارش</span>
  <span>جزییات</span>
  <span> مقدار</span>
  <span>فاکتور</span>
</div>
<div class="body-sec-baiane-ha">
  <p>Nov 01, 2020</p>
  <p>102445788</p>
  <p>شفافیت شب تاریک بسته 36 آیکون</p>
  <h6>$38.00</h6>
  <button>دانلود</button>
</div>
<div class="body-sec-baiane-ha">
</div>
<div class="body-sec-baiane-ha">
</div>
<div class="body-sec-baiane-ha">
</div>
<div class="body-sec-baiane-ha">
</div>
<div class="body-sec-baiane-ha">>
</div>
<div class="body-sec-baiane-ha">
</div>
<div class="body-sec-baiane-ha">
</div>
<div class="body-sec-baiane-ha">
</div>
</section>`;
// start profitThisYear() function
  profitThisYear();
}


// for clicked the year this changed the content
function profit2022() {
  let thisYear = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(1)"
  ).className = "");

  let year2021 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(3)"
  ).className = "");

  let year2020 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(4)"
  ).className = "");

  let year2022 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(2)"
  ).className = "selcted-category-header-sec-baiane-ha");

  let bodySecBaianeHa1 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(9)"
    ).innerHTML = `
  <p>May 30, 2020</p>
  <p>523445943</p>
   <p>هزینه فروشنده</p>
  <h6>$1.30</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa2 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(7)"
    ).innerHTML = `
  <p>Apr 22, 2020	</p>
  <p>231445943</p>
   <p>برنامه جابجایی / تحویل بسته	</p>
  <h6>$204.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa3 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(5)"
    ).innerHTML = `
  <p>Feb 09, 2020		</p>
  <p>426445943	</p>
   <p>تصویرگری طراحی بصری	</p>
  <h6>$31.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa4 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(3)"
    ).innerHTML = `
  <p>Nov 01, 2020</p>
  <p>	984445943</p>
   <p>خلاصه بسته ویژال	</p>
  <h6>$52.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa5 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(7)"
    ).innerHTML = `
  <p>Jan 04, 2020</p>
  <p>		324442313</p>
   <p>	هزینه فروشنده	</p>
  <h6>	$0.80</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa6 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(4)"
    ).innerHTML = `
  <p>Nov 01, 2020</p>
  <p>102445788</p>
  <p>شفافیت شب تاریک بسته 36 آیکون</p>
  <h6>$38.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa7 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(6)"
    ).innerHTML = `
  <p>Nov 01, 2020	</p>
  <p>		102445788	</p>
   <p>	شفافیت شب تاریک بسته 36 آیکون	</p>
  <h6>	$38.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa8 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(8)"
    ).innerHTML = `
  <p>Oct 08, 2020		</p>
  <p>		312445984	</p>
   <p>	تلفن کارتون	</p>
  <h6>	$76.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa9 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(10)"
    ).innerHTML = `
  <p>Sep 15, 2020			</p>
  <p>			312445984	</p>
   <p>	بسته نرم افزار ایفون 12</p>
  <h6>$5.00</h6>
  <button>دانلود</button>
  `);
}
function profit2021() {
  let thisYear = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(1)"
  ).className = "");

  let year2022 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(2)"
  ).className = "");

  let year2020 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(4)"
  ).className = "");

  let year2021 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(3)"
  ).className = "selcted-category-header-sec-baiane-ha");

  let bodySecBaianeHa1 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(4)"
    ).innerHTML = `
  <p>May 30, 2020</p>
  <p>523445943</p>
   <p>هزینه فروشنده</p>
  <h6>$3.30</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa2 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(3)"
    ).innerHTML = `
  <p>Apr 22, 2020	</p>
  <p>231445943</p>
   <p>برنامه جابجایی / تحویل بسته	</p>
  <h6>$244.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa3 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(7)"
    ).innerHTML = `
  <p>Feb 09, 2020		</p>
  <p>426445943	</p>
   <p>تصویرگری طراحی بصری	</p>
  <h6>$51.40</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa4 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(9)"
    ).innerHTML = `
  <p>Nov 01, 2020</p>
  <p>	984445943</p>
   <p>خلاصه بسته ویژال	</p>
  <h6>$62.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa5 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(10)"
    ).innerHTML = `
  <p>Jan 04, 2020</p>
  <p>		324442313</p>
   <p>	هزینه فروشنده	</p>
  <h6>	$3.40</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa6 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(8)"
    ).innerHTML = `
  <p>Nov 01, 2020</p>
  <p>102445788</p>
  <p>شفافیت شب تاریک بسته 36 آیکون</p>
  <h6>$58.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa7 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(6)"
    ).innerHTML = `
  <p>Nov 01, 2020	</p>
  <p>		102445788	</p>
   <p>	شفافیت تاریک بسته 39 آیکون	</p>
  <h6>	$18.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa8 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(4)"
    ).innerHTML = `
  <p>Oct 08, 2020		</p>
  <p>		312445984	</p>
   <p>	تلفن کارتون	</p>
  <h6>	$50.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa9 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(10)"
    ).innerHTML = `
  <p>Sep 15, 2020			</p>
  <p>			312445984	</p>
   <p>	بسته نرم افزار ایفون 12</p>
  <h6>$7.70</h6>
  <button>دانلود</button>
  `);
}
function profit2020() {
  let thisYear = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(1)"
  ).className = "");

  let year2022 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(2)"
  ).className = "");

  let year2021 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(3)"
  ).className = "");

  let year2020 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(4)"
  ).className = "selcted-category-header-sec-baiane-ha");

  let bodySecBaianeHa1 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(3)"
    ).innerHTML = `
  <p>May 30, 2020</p>
  <p>523445943</p>
   <p>هزینه فروشنده</p>
  <h6>$1.30</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa2 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(4)"
    ).innerHTML = `
  <p>Apr 22, 2020	</p>
  <p>231445943</p>
   <p>برنامه جابجایی / تحویل بسته	</p>
  <h6>$204.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa3 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(5)"
    ).innerHTML = `
  <p>Feb 09, 2020		</p>
  <p>426445943	</p>
   <p>تصویرگری طراحی بصری	</p>
  <h6>$31.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa4 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(6)"
    ).innerHTML = `
  <p>Nov 01, 2020</p>
  <p>	984445943</p>
   <p>خلاصه بسته ویژال	</p>
  <h6>$52.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa5 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(7)"
    ).innerHTML = `
  <p>Jan 04, 2020</p>
  <p>		324442313</p>
   <p>	هزینه فروشنده	</p>
  <h6>	$0.80</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa6 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(8)"
    ).innerHTML = `
  <p>Nov 01, 2020</p>
  <p>102445788</p>
  <p>شفافیت شب تاریک بسته 36 آیکون</p>
  <h6>$38.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa7 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(8)"
    ).innerHTML = `
  <p>Nov 01, 2020	</p>
  <p>		102445788	</p>
   <p>	شفافیت شب تاریک بسته 36 آیکون	</p>
  <h6>	$38.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa8 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(9)"
    ).innerHTML = `
  <p>Oct 08, 2020		</p>
  <p>		312445984	</p>
   <p>	تلفن کارتون	</p>
  <h6>	$76.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa9 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(10)"
    ).innerHTML = `
  <p>Sep 15, 2020			</p>
  <p>			312445984	</p>
   <p>	بسته نرم افزار ایفون 12</p>
  <h6>$5.00</h6>
  <button>دانلود</button>
  `);
}
function profitThisYear() {
  let year2021 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(3)"
  ).className = "");

  let year2020 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(4)"
  ).className = "");

  let year2022 = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(2)"
  ).className = "");

  let thisYear = (document.querySelector(
    "#header-sec-baiane-ha> div > li:nth-of-type(1)"
  ).className = "selcted-category-header-sec-baiane-ha");

  let bodySecBaianeHa1 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(11)"
    ).innerHTML = `
  <p>May 30, 2020</p>
  <p>523445943</p>
   <p>هزینه فروشنده</p>
  <h6>$3.30</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa2 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(10)"
    ).innerHTML = `
  <p>Apr 22, 2020	</p>
  <p>231445943</p>
   <p>برنامه جابجایی / تحویل بسته	</p>
  <h6>$244.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa3 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(9)"
    ).innerHTML = `
  <p>Feb 09, 2020		</p>
  <p>426445943	</p>
   <p>تصویرگری طراحی بصری	</p>
  <h6>$51.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa4 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(8)"
    ).innerHTML = `
  <p>Nov 01, 2020</p>
  <p>	984445943</p>
   <p>خلاصه بسته ویژال	</p>
  <h6>$62.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa5 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(7)"
    ).innerHTML = `
  <p>Jan 04, 2020</p>
  <p>		324442313</p>
   <p>	هزینه فروشنده	</p>
  <h6>	$1.80</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa6 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(6)"
    ).innerHTML = `
  <p>Nov 01, 2020</p>
  <p>102445788</p>
  <p>شفافیت شب تاریک بسته 36 آیکون</p>
  <h6>$46.50</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa7 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(5)"
    ).innerHTML = `
  <p>Nov 01, 2020	</p>
  <p>		102445788	</p>
   <p>	شفافیت شب تاریک بسته 36 آیکون	</p>
  <h6>	$48.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa8 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(4)"
    ).innerHTML = `
  <p>Oct 08, 2020		</p>
  <p>		312445984	</p>
   <p>	تلفن کارتون	</p>
  <h6>	$16.00</h6>
  <button>دانلود</button>
  `),
    bodySecBaianeHa9 = (document.querySelector(
      ".body-sec-baiane-ha:nth-of-type(3)"
    ).innerHTML = `
  <p>Sep 15, 2020			</p>
  <p>			312445984	</p>
   <p>	بسته نرم افزار ایفون 12</p>
  <h6>$2.20</h6>
  <button>دانلود</button>
  `);
}