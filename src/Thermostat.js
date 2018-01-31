function Thermostat() {
  this.temperature = 20
  this.minimumTemperature = 10
  this.MAX_LIMIT_PSM_ON = 25
  this.MAX_LIMIT_PSM_OFF = 32
  this.powerSavingMode = true

};

Thermostat.prototype.check = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(number){
  return this.temperature += number;
};

Thermostat.prototype.down = function(number){
  if (number > this._isMinTemp()) {
    throw new Error('The minimum temperature is 10 degrees!')
  } else {
    return this.temperature -= number;
  };
};

Thermostat.prototype.turnPowerSaveOn = function(){
  this.maxTemperature = this.MAX_LIMIT_PSM_ON;
  this.powerSavingMode = true;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode;
}

Thermostat.prototype.turnPowerSaveOff = function(){
  this.maxTemperature = this.MAX_LIMIT_PSM_OFF;
  this.powerSavingMode = false;
};

Thermostat.prototype.checkMaxTemp = function(){
  if (this.isPowerSavingModeOn() === false) {
    return this.MAX_LIMIT_PSM_OFF
  } else {
    return this.MAX_LIMIT_PSM_ON
  };
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.currentUsage = function(){
  return this._usage()
}

Thermostat.prototype._usage = function(){
  if (this.check() < 18) {
    return 'Low Usage'
  } else if (this.check() > 18 && this.check() < 25) {
    return 'Medium Usage'
  } else {
    return 'High Usage'
  };
};

Thermostat.prototype._isMinTemp = function() {
  return this.temperature - this.minimumTemperature;
};
