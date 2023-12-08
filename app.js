// events
document.addEventListener("afterload", afterload());
// function
// function afterload
function afterload() {
    this.dramad()
}
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