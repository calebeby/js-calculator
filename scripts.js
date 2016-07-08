var $ = function(element) {
  return document.querySelectorAll(element);
};

var buttons = $('.buttons button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    console.log('button ' + button + ' clicked');
  });
});
