const http = require("http")

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write("Hi, this is a simple server")
    response.end()
})

server.listen(8888, "0.0.0.0", () => {
    console.log("Server started at http://localhost:8888")
})