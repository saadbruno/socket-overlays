# socket-overlays
Overlay system for remote broadcasts using socket.io for real-time updates

## Setup
cd into direcotry, run `npm install` then `npm start`

## Usage
- Open two browser tabs
- Navigate to http://localhost:3000
- Navigate to http://localhost:3000/admin
- Insert any new information in the admin tab, and hit "send". The overlay should update

## How it works
- When running, it starts an Express and a Socket.io server
- When hitting "send", the client emits data to the socket.io server
- The server then forwawrds this data to all clients (both the overlay and the admin panel)
- The admin panel updates the forms with the new data (in case multiple people are managing the overlays at the same time)
- The overlay triggers an animation to change the data

## Links
[Socket.IO](https://socket.io/docs/)
[Anime.js](https://animejs.com/documentation/)