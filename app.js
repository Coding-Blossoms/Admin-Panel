// function
function copyLinkSECBarnameArga() {
  let urlSECBarnameArga = document.querySelector("#urlInput")
  urlSECBarnameArga.select();
  urlSECBarnameArga.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(urlSECBarnameArga.value);
}
