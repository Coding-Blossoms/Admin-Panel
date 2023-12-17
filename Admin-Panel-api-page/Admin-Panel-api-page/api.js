
document.addEventListener("afterload", afterload());

function afterload() {
    partReport();
    apiKeySecondsec();
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

function apiKeySecondsec(params) {
    document.querySelector("body").innerHTML +=`
    <section>
    <div class="api-key">
        <div class="header-api-text">
            <h2>کلید ای پی ای</h2>
        </div>
        <div class="content-api-key">
        
                            <table>
                                <thead>
                                    <div class="border-bottom">
                                        <tr>
                                            <th>برچسب</th>
                                            <th>کلد ای پی ای</th>
                                            <th>زمان ایجاد</th>
                                            <th class="condition">وضعیت</th>
                                        </tr>

                                    </div>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>none set</td>
                                        <td><input id="url-input" value="https://fftt456765gjkkjhi83093985"></td>
                                        <td class="first-td">
                                        <div onclick="copyUrl()"> <i id="myicon" class="fa-solid fa-clone coloricon" style="cursor: pointer;"></i></div>
                                        <i class="fa-solid fa-check checkicon"></i>
                                        </td>
                                        <td class="condition">Nov 01, 2020</td>
                                        <td id="faal" class="last-icon"   style="color:var(--green-color) ">فعال</td>
                                        <td><select class="last-select" name="" id="">
                                        <option value="#2b2b40">تنظیمات 1</option>
                                        <option value="#2b2b40">تنظیمات 2</option>
                                        <option value="#2b2b40">تنظیمات 3</option>
                                        </select></td>
                                        <td><i id="myicon" class="fa-solid fa-clone last-copy coloricon"></i></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                       <td>Navitare</td>
                                       <td><input id="url-input-two" value="https://jk076590ygghgh324vd33">	</td>
                                       <td class="first-td"> 
                                       <div id="myicon" onclick="copyUrltwo()"> <i  class="fa-solid fa-clone coloricon copyicon" style="cursor: pointer;"></i></div>
                                       <i class="fa-solid fa-check checkicon tikcon"></i>
                                       </td>
                                       <td class="condition">Sep 27, 2020</td>
                                       <td class="last-icon" style="color:var(--blue-color)">	بازبینی</td>
                                       <td><select  class="last-select" name="" id="">
                                       <option value="#2b2b40">تنظیمات 1</option>
                                       <option value="#2b2b40">تنظیمات 2</option>
                                       <option value="#2b2b40">تنظیمات 3</option>
                                       </select></td>
                                       <td><i id="myicon" class="fa-solid fa-clone last-copy coloricon" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                    <td>Docs API Key</td>
                                    <td>	<input id="url-input-three" value="https://fftt456765gjkkjhi83093985">	</td>
                                       <td class="first-td"><div id="myicon" onclick="copyUrlthree()"> <i  class="fa-solid fa-clone coloricon copyicon" style="cursor: pointer;"></i></div>
                                       <i class="fa-solid fa-check checkicon"></i>
                                       </td>
                                       <td class="condition">Jul 09, 2020</td>
                                       <td class="last-icon" style="color:var(--red-color)">	غیرفعال</td>
                                       <td><select  name="" id="" class="last-select">
                                       <option value="#2b2b40">تنظیمات 1</option>
                                       <option value="#2b2b40">تنظیمات 2</option>
                                       <option value="#2b2b40">تنظیمات 3</option>
                                       </select></td>
                                       <td><i id="myicon" class="fa-solid fa-clone last-copy coloricon" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Identity Key</td>
                                        <td>	<input id="url-input-four" value="https://jk076590ygghgh324vd3568">	</td>
                                        <td class="first-td"><div id="myicon" onclick="copyUrlfour()"> <i  class="fa-solid fa-clone coloricon copyicon" style="cursor: pointer;"></i></div>
                                        <i class="fa-solid fa-check checkicon"></i>
                                        </td>
                                        <td class="condition">May 14, 2020</td>
                                        <td id="faal" class="last-icon"  style="color:var(--green-color)">فعال</td>
                                        <td><select class="last-select" name="" id="">
                                         <option value="#2b2b40">تنظیمات 1</option>
                                         <option value="#2b2b40">تنظیمات 2</option>
                                         <option value="#2b2b40">تنظیمات 3</option>
                                        </select></td>
                                        <td><i id="myicon" class="fa-solid fa-clone last-copy coloricon" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Remore Interface</td>
                                        <td>	<input id="url-input-five" value="https://hhet6454788gfg555hhh4">	</td>
                                        <td class="first-td"><div id="myicon" onclick="copyUrlfive()"> <i  class="fa-solid fa-clone coloricon copyicon" style="cursor: pointer;"></i></div>
                                        <i class="fa-solid fa-check checkicon"></i>
                                        </td>
                                        <td class="condition">Dec 30, 2019	</td>
                                        <td id="faal" class="last-icon"  style="color:var(--green-color)">فعال</td>
                                        <td><select  class="last-select" name="" id="">
                                         <option value="#2b2b40">تنظیمات 1</option>
                                         <option value="#2b2b40">تنظیمات 2</option>
                                         <option value="#2b2b40">تنظیمات 3</option>
                                        </select></td>
                                        <td><i id="myicon" class="fa-solid fa-clone last-copy coloricon" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>none set</td>
                                        <td>	<input id="url-input-six" value="https://fftt456765gjkkjhi83093985">	</td>
                                        <td class="first-td"><div id="myicon" onclick="copyUrlsix()"> <i  class="fa-solid fa-clone coloricon copyicon" style="cursor: pointer;"></i></div>
                                        <i class="fa-solid fa-check checkicon"></i>
                                        </td>
                                        <td class="condition">غیرفعال</td>
                                        <td class="last-icon" style="color:var(--red-color)">	فعال</td>
                                        <td><select  class="last-select" name="" id="">
                                         <option value="#2b2b40">تنظیمات 1</option>
                                         <option value="#2b2b40">تنظیمات 2</option>
                                         <option value="#2b2b40">تنظیمات 3</option>
                                        </select></td>
                                        <td><i id="myicon" class="fa-solid fa-clone last-copy coloricon" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Test</td>
                                        <td>	<input id="url-input-seven" value="https://jk076590ygghgh324vd33"></td>
                                        <td class="first-td"><div id="myicon" onclick="copyUrlseven()"> <i  class="fa-solid fa-clone coloricon copyicon" style="cursor: pointer;"></i></div>
                                        <i class="fa-solid fa-check checkicon"></i>
                                        </td>
                                        <td class="condition">Apr 03, 2019</td>
                                        <td  class="last-icon" style="color:var(--green-color)">فعال</td>
                                        <td><select  class="last-select" name="" id="">
                                         <option value="#2b2b40">تنظیمات 1</option>
                                         <option value="#2b2b40">تنظیمات 2</option>
                                         <option value="#2b2b40">تنظیمات 3</option>
                                        </select></td>
                                        <td ><i id="myicon" class="fa-solid fa-clone last-copy coloricon" style="cursor: pointer;"></i>
                                        
                                        </td>
                                    </tr>
                                </tbody>

                            </table>

    </div>
</section>
    
    `
}






const colorIcon = document.querySelector(".coloricon");
const tikIcon = document.querySelector(".checkicon");
const inputUrl = document.querySelector("#url-input");
// color icon copy
colorIcon.addEventListener("click", function (params) {
    colorIcon.style.display ="none";
    tikIcon.style.display="block";
});

setTimeout(function () {
    colorIcon.style.display ="block";
    tikIcon.style.display="none";
}, 10000);
// copy
function copyUrl(params) {
    inputUrl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputUrl.value);

    if (colorIcon.style.display === "none") {
        
            inputUrl.style.color="#009ef7"

        }else(inputUrl.style.color="#6d6d80")
    };


// color

// copy
const urlTwo = document.querySelector("#url-input-two")
function copyUrltwo() {
    urlTwo.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(urlTwo.value);
    
        urlTwo.style.color="#009ef7";
        
    
};
const urlThree = document.querySelector("#url-input-three")
function copyUrlthree() {
    urlThree.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(urlThree.value);

        urlThree.style.color="#009ef7";
        
    
};
const urlfour= document.querySelector("#url-input-four")
function copyUrlfour() {
    urlfour.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(urlfour.value);

        urlfour.style.color="#009ef7";
        
    
};
const urlfive = document.querySelector("#url-input-five")
function copyUrlfive() {
    urlfive.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(urlfive.value);

        urlfive.style.color="#009ef7";
        
    
};
const urlsix = document.querySelector("#url-input-six")
function copyUrlsix() {
    urlsix.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(urlsix.value);

        urlsix.style.color="#009ef7";
        
    
};
const urlseven = document.querySelector("#url-input-seven")
function copyUrlseven() {
    urlseven.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(urlseven.value);

        urlseven.style.color="#009ef7";
        
    
};



