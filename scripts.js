var $ = function(element) {
  return document.querySelectorAll(element);
};

var buttons = $('.buttons button[data-button]');
var screen = $('.screen')[0];
var enter = $('#enter')[0];

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var buttonValue = button.getAttribute('data-button');
    addToScreen(buttonValue);
  });
});
enter.addEventListener('click', function() {
  var result = screen.innerHTML;
  result = eval(result.replace('÷', '/').replace('×', '*'));
  screen.innerHTML = result;
  screen.classList.add('result')
});
var addToScreen = function(character) {
  console.log('button ' + character + ' clicked');
  if (screen.classList.contains('result')) {
    screen.classList.remove('result');
    screen.innerHTML = '';
  }
  screen.innerHTML += character;
}
document.addEventListener('keypress', function(event) {
  var charCode = (event.which) ? event.which : event.keyCode;
  if (isCalcKey(event)) {
    addToScreen(String.fromCharCode(charCode));
  }
});
var isCalcKey = function(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 46 || charCode > 31 && (charCode < 48 || charCode > 57)){
        evt.preventDefault();
        return false;
    }
    return true;
}
