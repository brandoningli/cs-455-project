window.onload = function() {
    function updateLabel(page) {
        var enabled = page.getEnabled();
        document.getElementById('toggle').innerHTML = enabled ? "Disable" : "Enable";
        document.getElementById('status').innerHTML = enabled ? "Active" : "Stopped";
        document.getElementById('status').className = enabled ? "running" : "stopped";
    }

    function toggleEnabled(page) {
        page.toggleEnabled();
        updateLabel(page);
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }
    document.getElementById('toggle').onclick = function() {
        var background = browser.runtime.getBackgroundPage();
        background.then(toggleEnabled, onError);
    };
    var background = browser.runtime.getBackgroundPage();
    background.then(updateLabel, onError);
}