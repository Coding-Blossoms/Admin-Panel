// show modal of bell icon
const bellIcon = document.querySelector("#bell-icon");
const modalBel = document.querySelector(".modal-bell");
bellIcon.addEventListener("click" , function (params) {
    if (modalBel.style.display==="none") {
        modalBel.style.display="block"
    }else(modalBel.style.display="none");
});