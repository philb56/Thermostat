function Airport(capacity = 42) {
  hangarArray = []
   capacity = capacity;
}

  Airport.prototype.hangar = function(){
    return hangarArray;
  }

  Airport.prototype.land = function(plane){
    weather = this.stormy();
    if (weather === true) {
      throw new Error('The plane cannot land due to the weather');
    } else if (hangarArray.length >= 42) {
      throw new Error('The plane cannot land due to the airport be full');
    } else {
      this.addToHangar(plane);
    };
  };

  Airport.prototype.takeOff = function(plane){
    weather = this.stormy();
    if (weather === true) {
      throw new Error('The plane cannot take off due to the weather');
    } else {
      hangarArray.pop(plane);
    };
  };

  Airport.prototype.addToHangar = function (plane) {
    hangarArray.push(plane);
  };

  Airport.prototype.stormy = function () {
    var weather = [true, false]
    var randWeather = weather[Math.floor(Math.random() * weather.length)];
    return randWeather
  };
