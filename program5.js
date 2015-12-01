var q = require('q');
var defer = q.defer();

function attachTitle(name) {
  return 'DR. '+ name;
}

defer.promise
  .then(attachTitle)
  .then(console.log)
  .then(null, console.error);

defer.resolve('MANHATTAN');
