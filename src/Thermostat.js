function Thermostat() {
  this.temperature = 20
  this.minimumTemperature = 10
  this.maxTemperature = 25
  this.powerSavingMode = true
}

Thermostat.prototype.check = function() {
  return this.temperature;
}

Thermostat.prototype.up = function(number){
  return this.temperature += number;
}

Thermostat.prototype.down = function(number){
  if (number > this._isMinTemp()) {
    throw new Error('The minimum temperature is 10 degrees!')
  } else {
    return this.temperature -= number;
  }
}

Thermostat.prototype.turnPowerSaveOn = function(){
  this.maxTemperature = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.turnPowerSaveOff = function(){
  this.maxTemperature = 32;
  this.powerSavingMode = false;
}


Thermostat.prototype.checkMaxTemp = function(){
  return this.maxTemperature;
}

Thermostat.prototype._isMinTemp = function() {
  return this.temperature - this.minimumTemperature;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}
