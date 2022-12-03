'use strict';

const Chance = require('chance');
const chance = new Chance();
const joinRoom = require('./joinRoom');

function orderPickup(socket) {
    console.log('---------Package ready or pickup-------------');

    const payload = {
        store: `${ chance.company()}`,
        orderId: `${chance.string({ min: 0, max: 1000})}`,
        customer: `${chance.name({nationality: 'en'})}`,
        address: `${chance.address}`,
    }
    joinRoom(socket, payload);
    socket.emit('Pickup', payload);
}

module.exports = orderPickup;
