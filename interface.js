$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#increase-temperature').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  })

  $('#decrease-temperature').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  })

  $('#reset-temperature').on('click', function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  })

  $('#powersaving-on').on('click', function() {
    thermostat.turnPowerSaveOn();
    $('#power-saving-status').text('On');
  })

  $('#powersaving-off').on('click', function() {
    thermostat.turnPowerSaveOff();
    $('#power-saving-status').text('Off');
  })

})
