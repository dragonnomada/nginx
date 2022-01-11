const http = require("http")

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write("SERVER 1")
    response.end()
})

server.listen(8901, () => {
    console.log("Server started at http://localhost:8901")
})