var enabled = true;

function getEnabled() {
    return enabled;
}

function toggleEnabled() {
    enabled = !enabled;
}

// This will eventually be our filter list array
var pattern = "*://*.youtube.com/*";

browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (enabled) {
            return { cancel: true };
        }
    }, { urls: [pattern] }, ["blocking"]
);