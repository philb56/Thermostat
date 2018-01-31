function Thermostat() {
  this.minimumTemperature = 10
  this.MAX_LIMIT_PSM_ON = 25
  this.MAX_LIMIT_PSM_OFF = 32
  this.powerSavingMode = true
  this.DEFAULT_TEMPERATURE = 20
  this.temperature = this.DEFAULT_TEMPERATURE
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;

};

Thermostat.prototype.check = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(){
  return this.temperature += 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.minimumTemperature;
}

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()) {
  return;
}
  this.temperature -= 1;
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
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.currentUsage = function(){
  return this._usage()
}

Thermostat.prototype._usage = function(){
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'Low Usage'
  } else if (this.temperature > this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature < this.MAX_LIMIT_PSM_ON) {
    debugger;
    return 'Medium Usage'
  } else {
    return 'High Usage'
  };
};
