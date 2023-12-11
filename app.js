// event
addEventListener('load', afterLoad)

// function
function afterLoad(){
  dramad()
}
function copyLinkSECBarnameArga() {
  let urlSECBarnameArga = document.querySelector("#urlInput")
  urlSECBarnameArga.select();
  urlSECBarnameArga.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(urlSECBarnameArga.value);
}
function dramad(){
  let number = 0
  for (let i = 0; i < 63240; i++) {
    setTimeout(() => {
      number += 1  
      let dramade = (document.querySelector(
        "section:first-of-type>div:nth-of-type(2) > div > h3"
      ).innerHTML = "$" + number);
      if (i <  8530) {
        let tavize = (document.querySelector(
          "section:first-of-type>div:nth-of-type(2) > div:nth-of-type(2) > h3"
        ).innerHTML ="$" + number );
      }
      if (i < 2600) {
        let hazine = (document.querySelector(
          "section:first-of-type>div:nth-of-type(2) > div:nth-of-type(3) > h3"
        ).innerHTML = "$" + number);
      }
      if (i < 783) {
        let hazine = (document.querySelector(
          "section:first-of-type>div:nth-of-type(2) > div:nth-of-type(4) > h3"
        ).innerHTML = "$" + number);
      }
    }, 1300);
  }
}