var q = require('q');


function parsePromised() {
  var defer = q.defer();

  try {
    let data = JSON.parse(process.argv[2]);
    defer.resolve(data);
  }
  catch(ex) {
    defer.reject();
  }

  return defer.promise;
}

parsePromised()
  .then(console.log, console.log);
