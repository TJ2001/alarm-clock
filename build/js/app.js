(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var alarmTime = ("09:49");
console.log(alarmTime);

$("form#time_submission").submit(function() {
  event.preventDefault();
  alarmTime = $('#example-time-input').val();
  console.log($('#example-time-input').val());
  console.log(alarmTime);
  $('#time').text("Set Alarm Time: " + alarmTime);
});


function update() {
  $('#clock').html("Actual Time: " + moment().format('HH:mm:ss'));
  if (alarmTime == moment().format('HH:mm')) {
    alert("Wake up!");
    alarmTime = ("");
  };
};

setInterval(update, 1000);

},{}]},{},[1]);
