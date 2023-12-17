const templateSub = document.createElement("template");
const accordion = document.querySelector(".accordion");
const templateTools = document.createElement("template");
const accordionTools = document.querySelector(".accordion-tools");

templateSub.innerHTML = `
<h3 class="accordion-title">صفحات</h3>
<!-- first item [start] -->
<li class="list-items-sub">
  <div class="link">
    <i class="bx bxs-chevron-down"></i>
    <div class="link-container-title">
      <span class="link-title">کاربر پروفایل</span>
      <span class="bullet-sub"></span>
    </div>
  </div>
  <ul class="submenu">
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">بررسی اجمالی</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">پروژه ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">کمپین ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
  </ul>
</li>
<!-- first item [end] -->

<!-- second item [start] -->
<li class="list-items-sub">
  <div class="link">
    <i class="bx bxs-chevron-down"></i>
    <div class="link-container-title">
      <span class="link-title">اکانت</span>
      <span class="bullet-sub"></span>
    </div>
  </div>
  <ul class="submenu">
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">بررسی اجمالی</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">پروژه ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">کمپین ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
  </ul>
</li>
<!-- second item [end] -->

<!-- third item [start] -->
<li class="list-items-sub">
  <div class="link">
    <i class="bx bxs-chevron-down"></i>
    <div class="link-container-title">
      <span class="link-title">اکانت</span>
      <span class="bullet-sub"></span>
    </div>
  </div>
  <ul class="submenu">
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">بررسی اجمالی</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">پروژه ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">کمپین ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
  </ul>
</li>
<!-- third item [end] -->

<!-- fourth item [start] -->
<li class="list-items-sub">
  <div class="link">
    <i class="bx bxs-chevron-down"></i>
    <div class="link-container-title">
      <span class="link-title">اکانت</span>
      <span class="bullet-sub"></span>
    </div>
  </div>
  <ul class="submenu">
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">بررسی اجمالی</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">پروژه ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">کمپین ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
  </ul>
</li>
<!-- forth item [end] -->
`;

templateTools.innerHTML = `
<h3 class="accordion-title">صفحات</h3>
<!-- first item [start] -->
<li class="list-items-sub">
  <div class="link">
    <i class="bx bxs-chevron-down"></i>
    <div class="link-container-title">
      <span class="link-title">کاربر پروفایل</span>
      <span class="bullet-sub"></span>
    </div>
  </div>
  <ul class="submenu">
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">بررسی اجمالی</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">پروژه ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">کمپین ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
  </ul>
</li>
<!-- first item [end] -->

<!-- second item [start] -->
<li class="list-items-sub">
  <div class="link">
    <i class="bx bxs-chevron-down"></i>
    <div class="link-container-title">
      <span class="link-title">اکانت</span>
      <span class="bullet-sub"></span>
    </div>
  </div>
  <ul class="submenu">
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">بررسی اجمالی</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">پروژه ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">کمپین ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
  </ul>
</li>
<!-- second item [end] -->

<!-- third item [start] -->
<li class="list-items-sub">
  <div class="link">
    <i class="bx bxs-chevron-down"></i>
    <div class="link-container-title">
      <span class="link-title">اکانت</span>
      <span class="bullet-sub"></span>
    </div>
  </div>
  <ul class="submenu">
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">بررسی اجمالی</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">پروژه ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">کمپین ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
  </ul>
</li>
<!-- third item [end] -->

<!-- fourth item [start] -->
<li class="list-items-sub">
  <div class="link">
    <i class="bx bxs-chevron-down"></i>
    <div class="link-container-title">
      <span class="link-title">اکانت</span>
      <span class="bullet-sub"></span>
    </div>
  </div>
  <ul class="submenu">
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">بررسی اجمالی</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">پروژه ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="submenu-container">
          <span class="title-sub">کمپین ها</span>
          <span class="bullet-sub"></span>
        </div>
      </a>
    </li>
  </ul>
</li>
<!-- forth item [end] -->
`;

accordion.appendChild(templateSub.content.cloneNode(true));
accordionTools.appendChild(templateTools.content.cloneNode(true));

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find(".link");
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };

  var accordion = new Accordion($("#accordion"), false);
  var accordionTools = new Accordion($("#accordion-tools"), false);
});

// tippy library js:
tippy(".side-bar-action", {
  content: "Quick actions",
  placement: "left",
});
