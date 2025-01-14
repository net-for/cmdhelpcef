// Function to close the CEF window when the "X" button is clicked
function closeWindow() {
    // Use a native event to close the CEF window in the game
    if (typeof window.external !== "undefined" && window.external.close_browser) {
        window.external.close_browser();
    }
}
