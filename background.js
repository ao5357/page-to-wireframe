/**
 * @file
 * The background js for the extension.
 */

/**
 * Event listener for when the extension icon is pressed.
 */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS({
    file: 'css/styles.css'
  });
  chrome.tabs.executeScript({
    file: 'css/inject.js'
  });
});
