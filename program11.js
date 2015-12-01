'use strict';

var q = require('q');
var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
  .then(function(res) {
    let id = res.toString();
    let url = `http://localhost:7001/${id}`;

    return qhttp.read(url);
  })
  .then(function(res) {
    console.log(JSON.parse(res));
  })
  .then(null, console.error)
  .done();
