var q = require('q');

/* My way...
function parsePromised(json) {
  return JSON.parse(json);
}

q.fcall(parsePromised, process.argv[2])
  .then(null, console.log);
*/

/*
 * Their way, better...
 */
q.fcall(JSON.parse, process.argv[2])
  .then(null, console.log);
