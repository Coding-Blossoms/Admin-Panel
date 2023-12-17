
// show modal of bell icon
const bellIcon = document.querySelector("#bell-icon");
const modalBel = document.querySelector(".modal-bell");
bellIcon.addEventListener("click" , function (params) {
    if (modalBel.style.display==="none") {
        modalBel.style.display="block"
    }else(modalBel.style.display="none");
});

// event
addEventListener("load", afterLoad);

// function
function afterLoad() {
  dramad();
}
function dramad() {
  let number = 0;
  for (let i = 0; i < 4500; i++) {
    setTimeout(() => {
      number += 1;
      let dramade = (document.querySelector(
        "#DPN-part>div:nth-of-type(1) h3"
      ).innerHTML = "$" + number);
      if (i < 81) {
        let proje = (document.querySelector(
          "#DPN-part>div:nth-of-type(2) h3"
        ).innerHTML = number);
      }
      if (i < 61) {
        let nartheMovafaghet = (document.querySelector(
          "#DPN-part>div:nth-of-type(3) h3"
        ).innerHTML = "%" + number);
      }
    }, 1300);
  }
}

