var q = require('q');

/* VERSION 1
function all(p1, p2) {
  var deferred = q.defer();
  var counter = 0;
  var values = [];

  var success = function(v) {
    counter++;
    values.push(v);

    if (counter === 2) {
      deferred.resolve(values);
    }
  };
  var fail = function() {
    deferred.reject();
  };

  p1.then(success, fail);
  p2.then(success, fail);

  return deferred.promise;
}

var deferred1 = q.defer();
var deferred2 = q.defer();

all(deferred1.promise, deferred2.promise)
  .then(console.log);

setTimeout(function() {
  deferred1.resolve("PROMISES");
  deferred2.resolve("FTW");
}, 200);
*/

/*
 * VERSION 2
 */

var action = function(v) {
  return v;
};

q.all([q.fcall(action, "PROMISES"), q.fcall(action, "FTW")])
  .spread(function(v1, v2) {
    console.log([v1, v2]);
  })
