function Clock() {
  this.alarms = "";
}

Clock.prototype.setAlarm = function(newAlarm) {
    this.alarms = newAlarm;
};

Clock.prototype.checkAlarm = function(currentTime) {
  if (this.alarms == currentTime) {
      return true;
  }
};

Clock.prototype.rewind = function() {
  this.alarms = "";
}

exports.clockModule = Clock;
