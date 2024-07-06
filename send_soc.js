const io = require('socket.io-client');
const socket = io('http://localhost:4001'); // Replace with your server URL if different

socket.on('connect', () => {
  console.log('Connected to server');
  const coordinates = [
    [15.355543, 44.181592], // San Francisco
    [15.355453, 44.181302], // Los Angeles
    [15.355779, 44.181031], // Las Vegas
    [15.356182, 44.180893],  // New York
    [15.356256, 44.181368],  // Chicago
   
  ];
  socket.emit('sendCoordinates', coordinates);
  console.log('Coordinates sent:', coordinates);

  socket.disconnect();
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
