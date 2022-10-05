'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    eventPool.emit('Delivered', payload);
    console.log('- - - - - - - Your package has been delivered - - - - - ');
  }, 2000);
};
