
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
                                        <td>	fftt456765gjkkjhi83093985</td>
                                        <td><i class="fa-solid fa-clone" style="cursor: pointer;"></i></td>
                                        <td class="condition">Nov 01, 2020</td>
                                        <td class="last-icon">فعال</td>
                                        <td><select class="last-select" name="" id="">
                                           <option value="" id=""></option> 
                                        </select></td>
                                        <td><i class="fa-solid fa-clone last-copy"></i></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                       <td>Navitare</td>
                                       <td>	jk076590ygghgh324vd33</td>
                                       <td><i class="fa-solid fa-clone" style="cursor: pointer;"></i></td>
                                       <td class="condition">Sep 27, 2020</td>
                                       <td class="last-icon">	بازبینی</td>
                                       <td><select name="" id="" class="last-select">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                       </select></td>
                                       <td><i class="fa-solid fa-clone last-copy" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Docs API Key</td>
                                       <td>		fftt456765gjkkjhi83093985</td>
                                       <td><i class="fa-solid fa-clone" style="cursor: pointer;"></i></td>
                                       <td class="condition">Jul 09, 2020</td>
                                       <td class="last-icon">	غیرفعال</td>
                                       <td><select name="" id="" class="last-select">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                       </select></td>
                                       <td><i class="fa-solid fa-clone last-copy" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Identity Key</td>
                                        <td>		jk076590ygghgh324vd3568</td>
                                        <td><i class="fa-solid fa-clone" style="cursor: pointer;"></i></td>
                                        <td class="condition">May 14, 2020</td>
                                        <td class="last-icon">فعال</td>
                                        <td><select name="" id="" class="last-select">
                                         <option value=""></option>
                                         <option value=""></option>
                                         <option value=""></option>
                                        </select></td>
                                        <td><i class="fa-solid fa-clone last-copy" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Remore Interface</td>
                                        <td>		hhet6454788gfg555hhh4</td>
                                        <td><i class="fa-solid fa-clone" style="cursor: pointer;"></i></td>
                                        <td class="condition">Dec 30, 2019	</td>
                                        <td class="last-icon">فعال</td>
                                        <td><select name="" id="" class="last-select">
                                         <option value=""></option>
                                         <option value=""></option>
                                         <option value=""></option>
                                        </select></td>
                                        <td><i class="fa-solid fa-clone last-copy" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>none set</td>
                                        <td>		fftt456765gjkkjhi83093985</td>
                                        <td><i class="fa-solid fa-clone" style="cursor: pointer;"></i></td>
                                        <td class="condition">غیرفعال</td>
                                        <td class="last-icon">	فعال</td>
                                        <td><select name="" id="" class="last-select">
                                         <option value=""></option>
                                         <option value=""></option>
                                         <option value=""></option>
                                        </select></td>
                                        <td><i class="fa-solid fa-clone last-copy" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Test</td>
                                        <td>		jk076590ygghgh324vd33</td>
                                        <td><i class="fa-solid fa-clone" style="cursor: pointer;"></i></td>
                                        <td class="condition">Apr 03, 2019</td>
                                        <td class="last-icon">فعال</td>
                                        <td><select name="" id="" class="last-select">
                                         <option value=""></option>
                                         <option value=""></option>
                                         <option value=""></option>
                                        </select></td>
                                        <td><i class="fa-solid fa-clone last-copy" style="cursor: pointer;"></i>	</td>
                                    </tr>
                                </tbody>

                            </table>

    </div>
</section>
    
    `
}