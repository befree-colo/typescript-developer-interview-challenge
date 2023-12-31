const handler = document.querySelector('.handler');
const wrapper = handler.closest('.wrapper');
const boxA = wrapper.querySelector('.box');
let isHandlerDragging = false;

document.addEventListener('mousedown', function (e) {
  // If mousedown event is fired from .handler, toggle flag to true
  if (e.target === handler) {
    isHandlerDragging = true;
  }
});

document.addEventListener('mousemove', function (e) {
  // Don't do anything if dragging flag is false
  if (!isHandlerDragging) {
    return false;
  }

  // Get offset
  var containerOffsetLeft = wrapper.offsetLeft;

  // Get x-coordinate of pointer relative to container
  var pointerRelativeXpos = e.clientX - containerOffsetLeft;

  // Resize box A
  // * 8px is the left/right spacing between .handler and its inner pseudo-element
  // * Set flex-grow to 0 to prevent it from growing
  boxA.style.width = pointerRelativeXpos - 8 + 'px';
  boxA.style.flexGrow = 0;

  // Set boxA width properly
  // [...more logic here...]
});

document.addEventListener('mouseup', function (e) {
  // Turn off dragging flag when user mouse is up
  isHandlerDragging = false;
});
