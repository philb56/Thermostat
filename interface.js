$(document).ready(function() {
  var thermostat = new Thermostat();

  //$('#temperature').text(thermostat.temperature);

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
    $('#power-saving-status').attr('class', 'PsmON');
  })

  $('#powersaving-off').on('click', function() {
    thermostat.turnPowerSaveOff();
    $('#power-saving-status').text('Off');
    $('#power-saving-status').attr('class', 'PsmOff');
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
    displayImage(city);
  })

  function displayImage(city){
    var cityHash = {};
    cityHash["newyork"] = "http://www.karatetoc.com/Statue-of-liberty-NYC-Black-and-white-photography-12.jpg";
    cityHash["london"] = "https://www.mrsmithworldphotography.com/photos/Houses-of-Parliament-11.jpg";
    cityHash["tokyo"] = "https://i.pinimg.com/originals/c8/40/ea/c840ea63792d5a68a58b3be5907ea13f.jpg";
    cityHash["paris"] = "http://data.whicdn.com/images/27757411/awesome-beautiful-beauty-black-and-white-i-miss-you-Favim.com-413264_large.jpg";
    console.log(city);
    console.log(cityHash);
    $('body').css('background-image', 'url(' + cityHash[city] + ')');
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=bf9dc8e3d60d0e357d34b39a9e5427f6';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }
  get_settings();

  function get_settings() {
    var url = 'http://localhost:9292/temperature';
    $.get(url, function(data) {
      var myObj = JSON.parse(data);
      thermostat.temperature = myObj.temperature;
      updateTemperature();
    });
  }
})
