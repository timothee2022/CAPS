'use strict';

// const eventPool = require('../eventPool');

module.exports = (socket) => (payload) => {

    setTimeout(() => {
        console.log(`Package picked up ${payload.orderId}`);
        socket.emit('In Transit', payload);
    }, 3000);

    setTimeout(() => {
        console.log(`Package has been delivered ${payload.orderId}`);
        socket.emit('Delivered', payload);
    }, 4000);

};
