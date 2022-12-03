'use strict';

const eventPool = require('./eventPool');

const inTransitHandler = require('./driver/inTransitHandler');
const deliveredHandler = require('./vendor/deliveryHandler');
// const pickUp = require('./driver');

const Chance = require('chance');
const chance = new Chance();

// eventPool.on('Pick Up', eventDriver);
eventPool.on('In transit', inTransitHandler);
eventPool.on('Delivered', deliveredHandler);


setInterval(() => {

    const order = {
        store: chance.company(),
        orderId: chance.integer({ min: 0, max: 1000 }),
        name: chance.name(),
        address: chance.address(),
    };

    eventPool.emit('Pick Up', { order });

    console.log('------------------------Your package has been delivered------------------------');

}, 4000);



setInterval(() => {

    const order = {
        store: chance.company(),
        orderId: chance.integer({ min: 0, max: 1000 }),
        name: chance.name(),
        address: chance.address(),
    };

    eventPool.emit('Pick Up', { order });

    console.log('------------------------Your package is in transit------------------------');

}, 5000);


setInterval(() => {

    const order = {
        store: chance.company(),
        orderId: chance.integer({ min: 0, max: 1000 }),
        name: chance.name(),
        address: chance.address(),
    };

    eventPool.emit('Pick Up', { order });

    console.log('------------------------Your package has been picked up------------------------');

}, 6000);
