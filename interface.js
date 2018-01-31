$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#increase-temperature').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  })
})
