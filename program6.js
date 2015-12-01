var q = require('q');

function parsePromised(json) {
  var defer = q.defer();

  try {
    var data = JSON.parse(json);
  }
  catch(ex) {
    defer.reject(ex);
  }

  // Remember, resolve won't be run until the next turn of the event loop.
  defer.resolve(data);

  return defer.promise;
}

parsePromised(process.argv[2])
  .then(null, console.log);
