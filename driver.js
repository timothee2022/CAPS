'use strict';

let eventDriver = require('./eventDriver');
module.exports = (payload) => {
  console.log(`Package ready for pick up`);
  console.log(`Package in transit`);
  console.log(`Package is delivered`);
}