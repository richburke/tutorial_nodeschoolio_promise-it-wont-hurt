var q = require('q');
var defer = q.defer();

//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here

defer.promise.then(
  console.log,
  console.error
);

setTimeout(function() {
  defer.resolve('RESOLVED!');
}, 300);
