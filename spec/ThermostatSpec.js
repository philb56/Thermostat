describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.check()).toEqual(20);
  });

  it('increases temperature when up method is called', function() {
    thermostat.up()
    expect(thermostat.check()).toEqual(21)
  })

  it('decreases temperature when down method is called', function() {
    thermostat.down()
    expect(thermostat.check()).toEqual(19)
  })

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.check()).toEqual(10);
  });

  it('Maximum temperature is 25 degrees when Power Saving Mode is on', function() {
    thermostat.turnPowerSaveOn()
    expect(thermostat.checkMaxTemp()).toEqual(25)
  });

  it('Maximum temperature is 32 degrees when Power Saving Mode is off', function() {
    thermostat.turnPowerSaveOff()
    expect(thermostat.checkMaxTemp()).toEqual(32)
  });

  it('By default, Power Saving Mode is on', function() {
    expect(thermostat.checkMaxTemp()).toEqual(25)
  });

  it('Can reset temperature to 20', function() {
    thermostat.up()
    thermostat.reset()
    expect(thermostat.check()).toEqual(20)
  });

  it('when below 18, it is considered low-usage', function() {
    for (var i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.currentUsage()).toEqual('Low Usage');
  });

  it(' when below 25, its medium usage', function(){
    expect(thermostat.currentUsage()).toEqual('Medium Usage')
  });

  it('when above 25, it is high usage', function(){
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.currentUsage()).toEqual('High Usage')
  });
});
