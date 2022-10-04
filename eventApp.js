'use strict';

const eventDriver = require('./eventDriver');
const eventVendor = require('./vendor');
const driverHandler = require('./driver');
const Chance = require('chance')

eventDriver.on('Pick Up', driverHandler);
eventDriver.on('In transit', eventVendor);
eventDriver.on('Delivered', driverHandler);

setInterval(() => {
  console.log('------------------------Order start here------------------------');
  eventDriver.emit('Pick Up', {oreder});
  eventDriver.emit('In transit', {oreder});
  eventDriver.emit('Delivered', {oreder});
}, 5000)
