'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    eventPool.emit('In Transit', payload);
    console.log('- - - - - - - Your package is in transit - - - - - ');
  }, 4000);
};
