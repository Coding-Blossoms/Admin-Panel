// events 
document.addEventListener("afterload",afterload())
// function 
// function afterload
function afterload() {
    
    for (let i = 0; i < 6841 ; i++) {
        setTimeout(() => {
            let dramade = document.querySelector(".box-cash-body-dramad-part:first-of-type").children[0].innerHTML = "$" +i
            if (i  < 81){
                let tavize = document.querySelector(".box-cash-body-dramad-part:nth-child(2)").children[0].innerHTML = i + "%"
            }
            if (i  < 1241){
                let tavize = document.querySelector(".box-cash-body-dramad-part:last-of-type").children[0].innerHTML = "$" +i 
            }
        }, 7000);
    }
}


// marjan's code
// function
// this function is for downloading the report as a PDF file
window.onload = function(params) {
    document.getElementById("download").addEventListener("click",()=>{
       const invoice = this.document.getElementById("invoice");
       console.log(invoice);
       console.log(window);
       html2pdf().from(invoice).save();
    })
    
}