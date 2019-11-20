var enabled = true;

function getEnabled() {
    return enabled;
}

function toggleEnabled() {
    enabled = !enabled;
}

/* BLOCKING CODE GOES HERE */
I think this is where the filter list is suppose to go
var pattern = "https://mdn.mozillademos.org/*";

browser.webRequest.onBeforeRequest.addListener(
  //log redirect or modify request headers
  {urls:[pattern]},
  ["blocking"]
);
