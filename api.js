
document.addEventListener("afterload", afterload());

function afterload() {
    partReport();
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