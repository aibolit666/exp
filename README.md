# exp

to install dependencies:
npm i

to run server:
npm start

server runs on localhost:8080

examples
to add new element to city array split terminal when server is on and:
curl -X POST -H "Content-Type: application/json" -d '{ "name": "Brest", "isCapital": false }' localhost:8080

auth
curl -X POST -H "Content-Type: application/json" -d '{ "username": "admin", "password": "admin" }' localhost:8080/auth

to add with auth
curl -X POST -H "Content-Type: application/json" -H "x-secret-token-x: qwe" -d '{ "name": "Brest", "isCapital": false }' localhost:8080/api/cities