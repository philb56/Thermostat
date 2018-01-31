describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.check()).toEqual(20);
  });

  it('increases temperature when up method is called', function() {
    thermostat.up(10)
    expect(thermostat.check()).toEqual(30)
  })

  it('decreases temperature when down method is called', function() {
    thermostat.down(10)
    expect(thermostat.check()).toEqual(10)
  })

  it('Minimum temperature is 10 degrees', function(){
    expect(function() {thermostat.down(20);}).toThrow(new Error('The minimum temperature is 10 degrees!'));
  });

  it('Maximum temperature is 25 degrees when Power Saving Mode is on', function() {
    thermostat.turnPowerSaveOn()
    expect(thermostat.checkMaxTemp()).toEqual(25)
  })

  it('Maximum temperature is 32 degrees when Power Saving Mode is off', function() {
    thermostat.turnPowerSaveOff()
    expect(thermostat.checkMaxTemp()).toEqual(32)
  })

  it('By default, Power Saving Mode is on', function() {
    expect(thermostat.checkMaxTemp()).toEqual(25)
  })

  it('Can reset temperature to 20', function() {
    thermostat.up(10)
    thermostat.reset()
    expect(thermostat.check()).toEqual(20)
  })
});
