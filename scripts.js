var $ = function(element) {
  return document.querySelectorAll(element);
};

var buttons = $('.buttons button[data-button]');
var screen = $('.screen')[0];

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var buttonValue = button.getAttribute('data-button');
    console.log('button ' + buttonValue + ' clicked');
    screen.innerHTML += buttonValue;
  });
});
