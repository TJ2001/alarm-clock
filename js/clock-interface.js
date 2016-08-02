var Clock = require('./../js/clock.js').clockModule;
var alarmTime = ("09:49");
var thisClock = new Clock();
console.log(alarmTime);

$("form#time_submission").submit(function() {
  event.preventDefault();
  alarmTime = $('#example-time-input').val();
  thisClock.setAlarm(alarmTime);
  console.log($('#example-time-input').val());
  console.log(alarmTime);
  $('#time').text("Set Alarm Time: " + alarmTime);
});


function update() {
  $('#clock').html("Actual Time: " + moment().format('HH:mm:ss'));
    currentTime = moment().format('HH:mm');
    if (thisClock.checkAlarm(currentTime)) {
      alert("Get Up!!!");
      thisClock.rewind();
  }
}

setInterval(update, 1000);
