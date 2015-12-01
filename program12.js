'use strict';

var q = require('q');
var qhttp = require('q-io/http');
var _ = require('lodash');

const CACHE_PATH = 'http://localhost:7000';

let buildDbPath = (res) => {
  let id = res.toString();
  return `http://localhost:7001/${id}`;
};

qhttp.read(CACHE_PATH)
  .then(_.compose(qhttp.read, buildDbPath))
  .then(_.compose(console.log, JSON.parse))
  .then(null, console.error)
  .done();
