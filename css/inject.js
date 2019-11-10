/**
 * @file
 * Injected JavaScript to perform operations that cannot be accomplished with
 * CSS alone.
 */

// Show in the user console that this file has loaded.
console.log('Page to wireframe: Inserted JavaScript is working in the local context.');
const srcChecker = /url\(\s*?['"]?\s*?(\S+?)\s*?["']?\s*?\)/i;

/**
 * Add a class to all elements that have a background image.
 *
 * We will use CSS to override the image to a medium grey generic bg image.
 */
Array.from(document.querySelectorAll('*')).forEach(function(node){
  let prop = window.getComputedStyle(node, null)
    .getPropertyValue('background-image');
  let match = srcChecker.exec(prop);
  if (match) {
    node.classList.add('has-background-image');
  }
});
