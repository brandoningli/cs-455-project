var enabled = true;

function getEnabled() {
    return enabled;
}

function toggleEnabled() {
    enabled = !enabled;
}

/* BLOCKING CODE GOES HERE */
{

  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "https://developer.mozilla.org/",
    "https://mdn.mozillademos.org/"
  ],
 
  "background": {
    "scripts": ["background.js"]
  }

}
