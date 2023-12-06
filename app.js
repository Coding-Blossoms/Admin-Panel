// events 
document.addEventListener("afterload",afterload())
// function 
// function afterload
function afterload() {
    for (let i = 0; i < 6840 ; i++) {
        setTimeout(() => {
            let dramade = document.querySelector(".box-cash-body-dramad-part:first-of-type").children[0].innerHTML = i
        }, 4500);
        
    }
}