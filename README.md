# GLOBAL AGENDA INFO
### Introduction
GLOBAL AGENDA INFO is a web page that provides all the necessary information about a futuristic multiplayer third-person shooter developed by Hi-Rez Studios called Global Agenda. Unfortunately, the game's servers were closed in 2018 and reopened in 2022, but the community is still active and continues to play the game despite the fact that the developers are not working on it.

### What is it?

The role of GLOBAL AGENDA INFO is to help players who have reached this web page to keep in touch with each other by referring to the Discord channel, but the main functionality is to monitor the status of the official server. Also on this web page you can find additional information about private servers, the community keeps trying to recreate them, so that in the future it will be possible to maintain your own server for the stability of the game.

### How it works?
User clicks on "Refresh server status button" then the Websocket client (which is on client-side of app) connects and sends request to the Websocket server (which is on server-side of app) and right after the Websocket server received the request, it sends to the Websocket client that the request is being processed. The TCP client (which is on server-side of app) is called and receives the request immediately after the Websocket server, sending it to the Global Agenda TCP server.

### To-do:
- set a timer for each user's IP address on the refresh button to prevent spam (3-5 seconds).

### Tools and technologies:
- Node JS - https://nodejs.org/
- Bootstrap - https://getbootstrap.com/
- Font Awesome - https://fontawesome.com/
