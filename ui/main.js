//Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
  // Make request to the counter endpoint
  // Capture the responce and stor it in our variable
  // Render the variable in the correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};