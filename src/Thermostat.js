function Thermostat() {
  this.temperature = 20
  this.minimumTemperature = 10
}

Thermostat.prototype.check = function() {
  return this.temperature;
}

Thermostat.prototype.up = function(number){
return this.temperature += number;
}

Thermostat.prototype.down = function(number){
  if (number > this.isMinTemp()) {
    throw new Error('The minimum temperature is 10 degrees!')
  } else {
    return this.temperature -= number;
  };
};

Thermostat.prototype.isMinTemp = function() {
  return this.temperature - this.minimumTemperature;
  }
