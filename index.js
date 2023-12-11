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
window.onload = function() {
    document.getElementById("download").addEventListener("click",()=>{
       const invoice = this.document.getElementById("invoice");
       console.log(invoice);
       console.log(window);
       html2pdf().from(invoice).save();
    })
    
}

// report 
// show report page

 const meetingPart = document.querySelector(".metting-part");
 const reportPart = document.querySelector(".report-part");
 const apiPage = document.querySelector(".container");




function showReportpage() {
    
    if (meetingPart.style.display === "none") {
        meetingPart.style.display = "block";
    }else{
        meetingPart.style.display = "none";
    }if (reportPart.style.display === "none"){
        reportPart.style.display = "block";
    }else{
        reportPart.style.display = "none";
    }if (apiPage.style.display === "block") {
        apiPage.style.display = "none";
    }
}

// API PAGE 
// SHOW api page
function showApipage() {
    if (apiPage.style.display === "none") {
        apiPage.style.display = "block"
    }else{
        apiPage.style.display ="none";
    }
}

