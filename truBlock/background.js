I think this is where the filter list is suppose to go
var pattern = "https://mdn.mozillademos.org/*";

function redirect(requestDetails) 
{
  console.log("Redirecting: " + requestDetails.url);
  return 
  {
  };
}

browser.webRequest.onBeforeRequest.addListener(
  //log redirect or modify request headers
  {urls:[pattern]},
  ["blocking"]
);
