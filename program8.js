var q = require('q');

function throwMyGosh() {
  throw Error("OH NOES");
}

function iterate(v) {
  console.log(v);
  return v + 1;
}

q.fcall(iterate, 1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(throwMyGosh)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log)
  .done();
