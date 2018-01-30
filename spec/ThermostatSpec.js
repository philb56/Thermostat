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
});
