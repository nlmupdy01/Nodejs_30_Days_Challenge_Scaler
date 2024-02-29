const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

const server = http.createServer(app);

function setUpWebSocketServer(server) {
  const io = socketIO(server);
  io.on('connection', (socket) => {
    console.log('A user connected'); 
    socket.on('message', (data) => {
      console.log('Message received:', data); 
      io.emit('message', data);
  });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
}

setUpWebSocketServer(server); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(3000, ()=> {
  console.log('Server is running on http://localhost: 3000');
}) ;


// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');

// const app = express();

// // Store connected clients with their WebSocket connections and session data (replace with your data structure)
// const connectedClients = {};

// const wss = new WebSocket.Server({ server: http.createServer(app) }); // Create WebSocket server

// wss.on('connection', (ws, req) => {
//   const userId = req.url.split('/')[2]; // Extract user ID from request URL (modify based on your logic)
//   connectedClients[userId] = { ws, session: { /* Your session data structure here */ } };

//   ws.on('message', (message) => {
//     const data = JSON.parse(message);
//     const { userId, sessionData } = data;

//     // Update the session data for the user (replace with your logic)
//     connectedClients[userId].session = { ...connectedClients[userId].session, ...sessionData };

//     // Broadcast changes to all connected clients (excluding the sender)
//     wss.clients.forEach((client) => {
//       if (client.readyState === WebSocket.OPEN && client !== ws) {
//         client.send(JSON.stringify({ userId, sessionData }));
//       }
//     });
//   });

//   ws.on('close', () => {
//     delete connectedClients[userId];
//   });
// });

// // Route for the HTML page showcasing the editor (replace with your logic)
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html')); // Replace 'index.html' with your file path
// });

// // Import and use the path module (if needed)
// const path = require('path'); 

// // Start the server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });







