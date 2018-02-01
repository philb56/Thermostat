$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#increase-temperature').on('click', function() {
    thermostat.up();
    updateTemperature();
  })

  $('#decrease-temperature').on('click', function() {
    thermostat.down();
    updateTemperature();
  })

  $('#reset-temperature').on('click', function() {
    thermostat.reset();
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
  displayWeather('London');

  $('#current-city').change(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=bf9dc8e3d60d0e357d34b39a9e5427f6';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }
})
