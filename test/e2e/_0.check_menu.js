/*global browser, by */
var StopWatch = require('./helpers/StopWatch');
describe('E2E: Example', function() {

  beforeEach(function() {
    browser.get('https://walls.dsprew.net/wall/17d2jpx/6gyz8/0/0');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    StopWatch.start('should route correctly');
    expect(browser.getLocationAbsUrl()).toMatch('/wall/17d2jpx/6gyz8/0/0');
    StopWatch.stop('should route correctly');
  });

  it('should exists bottom menu links', function() {
    StopWatch.start('should exists bottom menu links');
    var element = browser.findElement(by.css('.wall'));
    expect(element.getText()).toEqual('Wall');
    var element = browser.findElement(by.css('.nearby'));
    expect(element.getText()).toEqual('Nearby');
    var element = browser.findElement(by.css('.buzz'));
    expect(element.getText()).toEqual('Buzz');
    var element = browser.findElement(by.css('.menu'));
    expect(element.getText()).toEqual('More');
    StopWatch.stop('should exists bottom menu links');
  });

  it('should route to wall', function() {
    StopWatch.start('should route to wall');
    var element = browser.findElement(by.css('.wall'));
    element.click();
    expect(browser.getLocationAbsUrl()).toMatch('/wall/17d2jpx/6gyz8/0/0');
    StopWatch.stop('should route to wall');

  });


});
