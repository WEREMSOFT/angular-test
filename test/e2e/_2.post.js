var StopWatch = require('./helpers/StopWatch');
var CommonFunctions = require('./helpers/commonFunctions');
describe('E2E: Post test', function() {

  beforeEach(function() {
    browser.get('https://walls.dsprew.net/wall/16db7sf/6gyz8/0/0');
    //browser.get('http://weremsoft.net/wall/14hk25g/8ki/-34.5867637/-58.4713027');
    browser.waitForAngular();
  });

  var textToComment = '';
  it('should post a comment', function() {
    StopWatch.start('should post a comment');

    textToComment = 'Comment at timestamp ' + Date.now();
    var elm = element(by.css('.text'));
    expect(elm.isPresent()).toBeTruthy();
    elm.click();
    elm = element(by.model('form.text'));

    elm.sendKeys(textToComment);

    var postBtn = element(by.css('.post-btn'));

    postBtn.click();
    var post = element(by.css('.Message p'));

    post.getText().then(function (text) {
      console.log(text);
      expect(text).toEqual(textToComment);
    });
    StopWatch.stop('should post a comment');
  });

  it('should deleten a post', function() {
    StopWatch.start('Should delete a post');

    var elm = element(by.css('.more'));
    elm.click();


    var deleteButton = element(by.css('.delete-button'));



    deleteButton.click();

    var commentRemovedMessage = element(by.css('div.commentOverlay'));


    var post = element(by.css('.Message p'));

    post.getText().then(function (text) {
      console.log(text);
      expect(text).not.toEqual(textToComment);
    });
    StopWatch.stop('Should delete a post');
    StopWatch.printReport();
  });

});

