// index.js

$(document).ready(function() {

	// Your code goes here

  var primary = ["#e74c3c", "#3498db", "#2ecc71", "#9b59b6", "#e67e22"];
  var accent = ["#c0392b", "#2980b9", "#27ae60", "#8e44ad", "#d35400"];

  var index = Math.floor(Math.random() * primary.length);

  $("#Summary").css("background-color", primary[index]);
  $(".section-title").css("color", accent[index]);

});
