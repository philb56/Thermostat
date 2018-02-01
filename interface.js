$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#increase-temperature').on('click', function() {
    thermostat.up();
    // $('#temperature').text(thermostat.temperature);
    updateTemperature();
  })

  $('#decrease-temperature').on('click', function() {
    thermostat.down();
    // $('#temperature').text(thermostat.temperature);
    updateTemperature();
  })

  $('#reset-temperature').on('click', function() {
    thermostat.reset();
    // $('#temperature').text(thermostat.temperature);
    updateTemperature();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.turnPowerSaveOn();
    $('#power-saving-status').text('On');
  })

  $('#powersaving-off').on('click', function() {
    thermostat.turnPowerSaveOff();
    $('#power-saving-status').text('Off');
  })
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.currentUsage());
  }

  $.get('http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=bf9dc8e3d60d0e357d34b39a9e5427f6&units=metric',function(data){
    $('#current-temperature').text(data.list[0].main.temp);
  })

})
