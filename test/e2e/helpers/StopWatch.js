function StopWatch(){
  // ViewModel
  var vm = {};

  vm.startTimeStamp = [];
  vm.stopTimeStamp = [];

  vm.helloWorld = function(){
    console.log('hello world!!' + Date.now());
  };

  vm.start = function(pLabel){
    vm.startTimeStamp[pLabel] = Date.now();
  };

  vm.stop = function(pLabel){
    vm.stopTimeStamp[pLabel] = Date.now();
  };

  vm.printReport = function(){

    console.log('\n-------------------');
    console.log('PERFORMANCE SUMMARY');
    console.log('-------------------');

    for (var key in vm.startTimeStamp) {
      if (vm.startTimeStamp.hasOwnProperty(key)) {
        if(vm.stopTimeStamp[key]){
          var result = vm.stopTimeStamp[key] - vm.startTimeStamp[key];
          console.log(key + ': ' + result + 'ms');
        }
      }
    }
    console.log('-------------------');
  };

  return vm;
}

module.exports = StopWatch();
