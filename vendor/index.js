'use strict';

const { io } = require('socket-io.client');
const socket = io('http://localhost:3002/caps');

//need to set up orderPickUp.js (declare but not set up yet)
const orderPickup = require('./orderPickup');

socket.on('Delivered', (payload) => {
    console.log(`Your package has been delivered ${payload.orderId}`);
    // socket.disconnect();
});

setInterval(() => {
    orderPickup(socket);
}, 5000);



