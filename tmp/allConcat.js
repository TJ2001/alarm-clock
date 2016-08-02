
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
