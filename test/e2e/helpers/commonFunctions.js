var CommonFunctions =  {
  // ViewModel
  log : function(strText){
    console.log(strText);
  },
  hasClass : function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  }
};

module.exports = CommonFunctions;
