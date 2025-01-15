// Function to close the CEF window when the "X" button is clicked
function closeWindow() {
    // Notify the server to close the browser window
    window.external.emitEvent("close_browser");
}
