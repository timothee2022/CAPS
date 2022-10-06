'use strict';

const { io } = require('socket-io.client');
const socket = io('http://localhost:3002/caps');

const handlePickup = require('./handlePickup')(socket);
// need to set up handlePickup.js file

socket.on('Pick Up', handlePickup);
