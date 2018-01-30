function Thermostat() {
  this.temperature = 20
}

Thermostat.prototype.check = function() {
  return this.temperature;
}

Thermostat.prototype.up = function(number){
return this.temperature += number;
}
