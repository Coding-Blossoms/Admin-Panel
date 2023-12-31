
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
    
};

// afterload function
document.addEventListener("afterload", afterload());

function afterload() {
    partReport();
    reportSecondsec();
  }

function partReport (params) {
    document.querySelector("body").innerHTML += `
    
    <section id="report"> 
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
</section>  
   
    `
}

function reportSecondsec(params) {
    document.querySelector("body").innerHTML +=`
    <section id="report">
                    <div class="report-part">
                        <div class="report-content">
                            <h2>گزارش</h2>
                            <div class="left-content">
                                <i  class="fa-solid fa-cloud-arrow-up"></i>
                                <button id="download">
                                    <p>دانلود گزارش</p>
                                </button>
                            </div>   

                             <div class="all-content" id="invoice">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="warring">500</td>
                                            <td>POST /v1/invoice/in_8873_5079/invalid</td>
                                            <td>20 Jun 2023, 2:40 pm</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="succes">200</td>
                                            <td>POST /v1/invoices/in_4790_9109/payment</td>
                                            <td>19 Aug 2023, 6:43 am</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="succes">200</td>
                                            <td>POST /v1/invoices/in_6196_6184/payment</td>
                                            <td>15 Apr 2023, 11:30 am</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="succes">200</td>
                                            <td>POST /v1/invoices/in_8126_6463/payment</td>
                                            <td>24 Jun 2023, 10:30 am</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="succes">200</td>
                                            <td>POST /v1/invoices/in_6196_6184/payment</td>
                                            <td>19 Aug 2023, 11:05 am</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="succes">200</td>
                                            <td>POST /v1/invoices/in_8126_6463/payment</td>
                                            <td>05 May 2023, 8:43 pm</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="succes">200</td>
                                            <td>POST /v1/invoices/in_5719_9035/payment</td>
                                            <td>20 Dec 2023, 8:43 pm</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="succes">200</td>
                                            <td>POST /v1/invoices/in_5719_9035/payment</td>
                                            <td>15 Apr 2023, 6:05 pm</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="succes">200</td>
                                            <td>POST /v1/invoices/in_8126_6463/payment</td>
                                            <td>24 Jun 2023, 2:40 pm</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="hoshdar">404 هشدار</td>
                                            <td>POST /v1/customer/c_64b78500a521f/not_found</td>
                                            <td>20 Jun 2023, 11:05 am</td>
                                        </tr>
                                    </tbody>
                                </table>
                             </div>
                        </div>
                    </div>
                 </section>



    `
}
