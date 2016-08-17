var CommonFunctions = require('./helpers/commonFunctions');
var StopWatch = require('./helpers/StopWatch');
var alreadyFollow = false;


describe('E2E: Faves Test', function() {

  beforeEach(function() {
    browser.get('https://walls.dsprew.net/nearby/16db7sf/6gyz8/0/0');
    //browser.get('http://weremsoft.net/wall/14hk25g/8ki/-34.5867637/-58.4713027');
    browser.waitForAngular();
    var element = browser.findElement(by.css('.wall'));
    element.click();
  });

  it('check if already followed', function() {
    StopWatch.start('check if already followed');
    var elm = element(by.css('.follow'));
    expect(elm.isPresent()).toBeTruthy();
    CommonFunctions.hasClass(elm, 'followed').then(function(e){
      alreadyFollow = e;
      if(alreadyFollow)
      {
        console.error('\nERROR: The wall is already followed. This is due to a failed run. The \'should follow\' will not be tested.');
      }
      StopWatch.start('check if already followed');
    });


  });

  it('should follow', function() {
    StopWatch.start('should follow');
    if(alreadyFollow) return;

    var elm = element(by.css('.follow'));
    expect(elm.isPresent()).toBeTruthy();
    expect(CommonFunctions.hasClass(elm, 'followed')).toBeFalsy();

    elm.click();
    expect(CommonFunctions.hasClass(elm, 'followed')).toBeTruthy();

    var favesButton = element(by.css('.faves'));
    favesButton.click();
    StopWatch.stop('should follow');
  });

  it('should unfollow', function() {
    StopWatch.start('should unfollow');
    var elm = element(by.css('.follow'));
    expect(elm.isPresent()).toBeTruthy();
    expect(CommonFunctions.hasClass(elm, 'followed')).toBeTruthy();

    elm.click();
    expect(CommonFunctions.hasClass(elm, 'followed')).toBeFalsy();

    var favesButton = element(by.css('.faves'));
    favesButton.click();
    StopWatch.stop('should unfollow');
    StopWatch.printReport();
  });


});

