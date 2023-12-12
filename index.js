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
 const secondSection = document.querySelector(".content-full");




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
    }if (secondSection.style.display === "none") {
        secondSection.style.display = "block";
    }else {
        secondSection.style.display ="none"
    }
}



function partReport (params) {
    document.querySelector(".content-full").innerHTML == `
    
        <!-- header section -->
        <div class="metting-part">
            <div class="input-meet">
                <h2>جلسات ورود ب سیستم</h2>
                <div class="leftitem-meet">
                    <select >
                        <option value="1">1 ساعت</option>
                        <option value="2">6 ساعت</option>
                        <option value="3">12 ساعت</option>
                        <option value="4">24 ساعت</option>
                    </select>
                    <button>
                        <span>نمایش همه</span>
                    </button>
                </div>
            </div>

               <!-- content -->

               <div class="recent-order">
                    <div class="detaies">
                    <table>   
                        <thead>
                            <tr>
                                <th>مکان</th>
                                <th>وضعیت</th>
                                <th>دستگاه</th>
                                <th>ادرس ای پی</th>
                                <th>زمان</th>
                               
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>USA(5)</td>
                                <td class="succes" >موفق</td>
                                <td>Chrome-Windows</td>
                                <td>236.125.56.78</td>
                                <td>دو دقیقه پیش</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>United Kingdom(10)</td>
                                <td class="succes" >موفق</td>
                                <td>Safari-Max OS</td>
                                <td>236.125.56.78</td>
                                <td>ده دقیقه پیش</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>(-)wayیاN</td>
                                <td class="warring" >خطا</td>
                                <td>Firefox-Windos</td>
                                <td>236.125.56.10</td>
                                <td>بیست دقیقه پیش</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Japan(112)</td>
                                <td class="succes">موفق</td>
                                <td>iOS-iphone</td>
                                <td>236.125.56.74</td>
                                <td>سی دقیقه پیش</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Italy(5)</td>
                                <td class="hoshdar">هشدار</td>
                                <td>Samsung Noted 5-Android</td>
                                <td>236.100.56.50</td>
                                <td>چهل دقیقه پیش</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
            
            </div>
   
    `
    partReport();
}
