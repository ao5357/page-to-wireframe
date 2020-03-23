/**
 * @file
 * Injected JavaScript to perform operations that cannot be accomplished with
 * CSS alone.
 */

"use strict";

const srcChecker = /url\(\s*?['"]?\s*?(\S+?)\s*?["']?\s*?\)/i;

/**
 * Add a class to all elements that have a background image.
 *
 * We will use CSS to override the image to a medium grey generic bg image.
 */
Array.from(document.querySelectorAll('[id],[class],[style]')).forEach(function(node){
  let prop = window.getComputedStyle(node, null)
    .getPropertyValue('background-image');

  let match = srcChecker.exec(prop);
  if (match) {
    node.classList.add('has-background-image');
  }
});
